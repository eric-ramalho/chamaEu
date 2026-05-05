import * as Crypto from "expo-crypto";
import { Profession } from "./ListaProfissao";

type Item = {
  id: string;
  title: string;
  profession: Profession;
};

export const data: Item[] = [
  { id: Crypto.randomUUID(), title: "Pedreiro", profession: "pedreiro" },
  { id: Crypto.randomUUID(), title: "Eletricista", profession: "eletricista" },
  { id: Crypto.randomUUID(), title: "Pintor", profession: "pintor" },
  { id: Crypto.randomUUID(), title: "Encanador", profession: "encanador" },
];
