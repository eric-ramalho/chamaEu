import * as Crypto from "expo-crypto";

import { type Profession } from "@/src/data/ListaProfissao";

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
  { id: Crypto.randomUUID(), title: "Jardineiro", profession: "jardineiro" },
  { id: Crypto.randomUUID(), title: "Faxineiro", profession: "faxineiro" },
  { id: Crypto.randomUUID(), title: "Pedreiro", profession: "pedreiro" },
  { id: Crypto.randomUUID(), title: "Eletricista", profession: "eletricista" },
  { id: Crypto.randomUUID(), title: "Pintor", profession: "pintor" },
  { id: Crypto.randomUUID(), title: "Encanador", profession: "encanador" },
  { id: Crypto.randomUUID(), title: "Jardineiro", profession: "jardineiro" },
  { id: Crypto.randomUUID(), title: "Faxineiro", profession: "faxineiro" },
  { id: Crypto.randomUUID(), title: "Pedreiro", profession: "pedreiro" },
  { id: Crypto.randomUUID(), title: "Eletricista", profession: "eletricista" },
  { id: Crypto.randomUUID(), title: "Pintor", profession: "pintor" },
  { id: Crypto.randomUUID(), title: "Encanador", profession: "encanador" },
  { id: Crypto.randomUUID(), title: "Jardineiro", profession: "jardineiro" },
  { id: Crypto.randomUUID(), title: "Faxineiro", profession: "faxineiro" },
  { id: Crypto.randomUUID(), title: "Pedreiro", profession: "pedreiro" },
  { id: Crypto.randomUUID(), title: "Eletricista", profession: "eletricista" },
  { id: Crypto.randomUUID(), title: "Pintor", profession: "pintor" },
  { id: Crypto.randomUUID(), title: "Encanador", profession: "encanador" },
  { id: Crypto.randomUUID(), title: "Jardineiro", profession: "jardineiro" },
  { id: Crypto.randomUUID(), title: "Faxineiro", profession: "faxineiro" },
  { id: Crypto.randomUUID(), title: "Pedreiro", profession: "pedreiro" },
  { id: Crypto.randomUUID(), title: "Eletricista", profession: "eletricista" },
  { id: Crypto.randomUUID(), title: "Pintor", profession: "pintor" },
  { id: Crypto.randomUUID(), title: "Encanador", profession: "encanador" },
  { id: Crypto.randomUUID(), title: "Jardineiro", profession: "jardineiro" },
  { id: Crypto.randomUUID(), title: "Faxineiro", profession: "faxineiro" },
];
