import { Paintbrush, Wrench, Hammer, Plug } from "lucide-react-native";

export const profissaoIcon = {
  pintor: Paintbrush,
  encanador: Wrench,
  eletricista: Plug,
  pedreiro: Hammer,
} as const;

export type Profession = "pintor" | "encanador" | "eletricista" | "pedreiro";
