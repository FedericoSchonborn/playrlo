import type { FormatRequest } from "./request.ts";
import type { FormatResponse, Response } from "./response.ts";
import { DEFAULT_EDITION } from "./types.ts";

export const DEFAULT_HOST = "https://play.rust-lang.org";
export const DEFAULT_USER_AGENT = "playrlo/0.0.0";

export type ClientOptions = {
  host?: string;
  userAgent?: string;
};

export class Client {
  #host: string;
  #userAgent: string;

  constructor(options: ClientOptions = {}) {
    this.#host = options.host ?? DEFAULT_HOST;
    this.#userAgent = options.userAgent ?? DEFAULT_USER_AGENT;
  }

  async #request<P, R>(
    method: "GET" | "POST",
    path: string,
    params?: P,
  ): Promise<R> {
    const response = await fetch(`${this.#host}${path}`, {
      body: params ? JSON.stringify(params) : undefined,
      headers: {
        "Content-Type": "application/json",
        "User-Agent": this.#userAgent,
      },
      method: method,
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.statusText}`);
    }

    const result: Response<R> = await response.json();
    if ("error" in result) {
      throw new Error(`Request failed: ${result.error}`);
    }

    return result;
  }

  async format(
    code: string,
    options: Omit<Partial<FormatRequest>, "code"> = {},
  ): Promise<FormatResponse> {
    return await this.#request(
      "POST",
      "/format",
      { code, edition: options.edition ?? DEFAULT_EDITION } as FormatRequest,
    );
  }
}
