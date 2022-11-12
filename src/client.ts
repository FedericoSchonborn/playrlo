import type { CompileRequest, FormatRequest } from "./request.ts";
import type { CompileResponse, FormatResponse, Response } from "./response.ts";
import {
  DEFAULT_ASSEMBLY_FLAVOR,
  DEFAULT_CHANNEL,
  DEFAULT_COMPILE_TARGET,
  DEFAULT_CRATE_TYPE,
  DEFAULT_DEMANGLE_ASSEMBLY,
  DEFAULT_EDITION,
  DEFAULT_MODE,
  DEFAULT_PROCESS_ASSEMBLY,
} from "./types.ts";

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

  async compile(
    code: string,
    options: Omit<Partial<CompileRequest>, "code"> = {},
  ): Promise<CompileResponse> {
    return await this.#request(
      "POST",
      "/compile",
      {
        target: options.target ?? DEFAULT_COMPILE_TARGET,
        assemblyFlavor: options.assemblyFlavor ?? DEFAULT_ASSEMBLY_FLAVOR,
        demangleAssembly: options.demangleAssembly ?? DEFAULT_DEMANGLE_ASSEMBLY,
        processAssembly: options.processAssembly ?? DEFAULT_PROCESS_ASSEMBLY,
        channel: options.channel ?? DEFAULT_CHANNEL,
        mode: options.mode ?? DEFAULT_MODE,
        edition: options.edition ?? DEFAULT_EDITION,
        crateType: options.crateType ?? DEFAULT_CRATE_TYPE,
        tests: options.tests ?? false,
        backtrace: options.backtrace ?? false,
        code: code,
      } as CompileRequest,
    );
  }

  async format(
    code: string,
    options: Omit<Partial<FormatRequest>, "code"> = {},
  ): Promise<FormatResponse> {
    return await this.#request(
      "POST",
      "/format",
      {
        code,
        edition: options.edition ?? DEFAULT_EDITION,
      } as FormatRequest,
    );
  }
}
