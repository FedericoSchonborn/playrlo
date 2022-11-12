import { CrateInformation } from "./types.ts";

export type Result<T> =
  | T
  | { error: string };

export type MetaCratesResponse = {
  crates: CrateInformation[];
};

export type MetaVersionResponse = {
  version: string;
  hash: string;
  date: string;
};

export type CompileResponse = {
  success: boolean;
  code: string;
  stdout: string;
  stderr: string;
};

export type FormatResponse = {
  success: boolean;
  code: string;
  stdout: string;
  stderr: string;
};
