import * as Crypto from "expo-crypto";
import { Profession } from "./ListaProfissao";

type Profile = {
  id: string;
  name: string;
  description: string;
  location: string;
  profession: Profession;
};

export const profile: Profile[] = [
  {
    id: Crypto.randomUUID(),
    name: "João Silva",
    description:
      "Eletricista com 10 anos de experiência em instalações residenciais e comerciais.",
    location: "São Paulo",
    profession: "eletricista",
  },
  {
    id: Crypto.randomUUID(),
    name: "Maria Oliveira",
    description:
      "Pintora especializada em acabamentos de alta qualidade para interiores e exteriores.",
    location: "Rio de Janeiro",
    profession: "pintor",
  },
  {
    id: Crypto.randomUUID(),
    name: "Carlos Santos",
    description:
      "Encanador experiente em reparos e instalações hidráulicas para residências e empresas.",
    location: "Belo Horizonte",
    profession: "encanador",
  },
  {
    id: Crypto.randomUUID(),
    name: "Ana Costa",
    description:
      "Pedreira qualificada em construção civil, com foco em alvenaria e estruturas de concreto.",
    location: "Curitiba",
    profession: "pedreiro",
  },
  {
    id: Crypto.randomUUID(),
    name: "Pedro Almeida",
    description:
      "Eletricista certificado em sistemas elétricos residenciais e industriais, com 15 anos de experiência.",
    location: "Porto Alegre",
    profession: "eletricista",
  },
  {
    id: Crypto.randomUUID(),
    name: "Pedro jose",
    description:
      "Eletricista certificado em sistemas elétricos residenciais e industriais, com 15 anos de experiênciade experiênciade experiênciade experiênciade experiênciade experiênciade experiênciade experiência.experiênciade experiência.experiênciade experiência.experiênciade experiência.experiênciade experiência.experiênciade experiência.",
    location: "Porto Alegre",
    profession: "eletricista",
  },
  {
    id: Crypto.randomUUID(),
    name: "Luciana Ferreira",
    description:
      "Pintora profissional especializada em técnicas de pintura decorativa e renovação de ambientes.",
    location: "Salvador",
    profession: "pintor",
  },
];
