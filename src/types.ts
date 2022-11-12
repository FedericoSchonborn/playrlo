export type CompileTarget =
  | "asm"
  | "llvm-ir"
  | "mir"
  | "hir"
  | "wasm";
export const DEFAULT_COMPILE_TARGET: CompileTarget = "asm";

export type AssemblyFlavor =
  | "att"
  | "intel";
export const DEFAULT_ASSEMBLY_FLAVOR: AssemblyFlavor = "att";

export type DemangleAssembly =
  | "demangle"
  | "mangle";
export const DEFAULT_DEMANGLE_ASSEMBLY: DemangleAssembly = "demangle";

export type ProcessAssembly =
  | "filter"
  | "raw";
export const DEFAULT_PROCESS_ASSEMBLY: ProcessAssembly = "filter";

export type Channel =
  | "stable"
  | "beta"
  | "nightly";
export const DEFAULT_CHANNEL: Channel = "stable";

export type Mode =
  | "debug"
  | "release";
export const DEFAULT_MODE: Mode = "debug";

export type CrateType =
  | "bin"
  | "lib"
  | "dylib"
  | "rlib"
  | "staticlib"
  | "cdylib"
  | "proc-macro";
export const DEFAULT_CRATE_TYPE: CrateType = "bin";

export type Edition =
  | "2015"
  | "2018"
  | "2021";
export const DEFAULT_EDITION: Edition = "2021";
