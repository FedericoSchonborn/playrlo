import type {
  AssemblyFlavor,
  Channel,
  CompileTarget,
  CrateType,
  DemangleAssembly,
  Edition,
  Mode,
  ProcessAssembly,
} from "./types.ts";

export type CompileRequest = {
  target: CompileTarget;
  assemblyFlavor: AssemblyFlavor;
  demangleAssembly: DemangleAssembly;
  processAssembly: ProcessAssembly;
  channel: Channel;
  mode: Mode;
  edition: Edition;
  crateType: CrateType;
  tests: boolean;
  backtrace: boolean;
  code: string;
};

export type FormatRequest = {
  code: string;
  edition: Edition;
};
