import {
  Paintbrush,
  Wrench,
  Hammer,
  Plug,
  UserMinus,
} from "lucide-react-native";

export const profissaoIcon = {
  pintor: Paintbrush,
  encanador: Wrench,
  eletricista: Plug,
  pedreiro: Hammer,
  faxineiro: UserMinus,
  jardineiro: UserMinus,
} as const;

export type Profession =
  | "pintor"
  | "encanador"
  | "eletricista"
  | "pedreiro"
  | "faxineiro"
  | "jardineiro";
