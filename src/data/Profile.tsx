import * as Crypto from "expo-crypto";
import { Profession } from "./ListaProfissao";

type Profile = {
  id: string;
  name: string;
  description: string;
  location: string;
  profession: Profession;
  yearsOfExperience?: number;
  offeredService?: string[];
};

export const profile: Profile[] = [
  {
    id: Crypto.randomUUID(),
    name: "João Silva",
    description:
      "Eletricista com 10 anos de experiência em instalações residenciais e comerciais.",
    location: "São Paulo",
    yearsOfExperience: 10,
    profession: "eletricista",
    offeredService: [
      "Instalação de sistemas elétricos",
      "Reparos elétricos",
      "Manutenção preventiva",
    ],
  },
  {
    id: Crypto.randomUUID(),
    name: "Maria Oliveira",
    description:
      "Pintora especializada em acabamentos de alta qualidade para interiores e exteriores.",
    yearsOfExperience: 10,
    location: "Rio de Janeiro",
    profession: "pintor",
    offeredService: [
      "Pintura residencial",
      "Pintura comercial",
      "Pintura decorativa",
    ],
  },
  {
    id: Crypto.randomUUID(),
    name: "Carlos Santos",
    description:
      "Encanador experiente em reparos e instalações hidráulicas para residências e empresas.",
    yearsOfExperience: 10,
    offeredService: [
      "Reparos hidráulicos",
      "Instalação de sistemas de encanamento",
      "Manutenção preventiva",
    ],
    location: "Belo Horizonte",
    profession: "encanador",
  },
  {
    id: Crypto.randomUUID(),
    name: "Ana Costa",
    description:
      "Pedreira qualificada em construção civil, com foco em alvenaria e estruturas de concreto.",
    yearsOfExperience: 10,
    offeredService: [
      "Construção de alvenaria",
      "Estruturas de concreto",
      "Reparos em construções",
    ],
    location: "Curitiba",
    profession: "pedreiro",
  },
  {
    id: Crypto.randomUUID(),
    name: "Pedro Almeida",
    description:
      "Eletricista certificado em sistemas elétricos residenciais e industriais, com 15 anos de experiência.",
    yearsOfExperience: 10,
    offeredService: [
      "Instalação de sistemas elétricos",
      "Reparos elétricos",
      "Manutenção preventiva",
    ],
    location: "Porto Alegre",
    profession: "eletricista",
  },
  {
    id: Crypto.randomUUID(),
    name: "Pedro jose",
    description:
      "Eletricista certificado em sistemas elétricos residenciais e industriais, com 15 anos de experiênciade experiênciade experiênciade experiênciade experiênciade experiênciade experiênciade experiência.experiênciade experiência.experiênciade experiência.experiênciade experiência.experiênciade experiência.experiênciade experiência.",
    yearsOfExperience: 10,
    offeredService: [
      "Instalação de sistemas elétricos",
      "Reparos elétricos",
      "Manutenção preventiva",
    ],
    location: "Porto Alegre",
    profession: "eletricista",
  },
  {
    id: Crypto.randomUUID(),
    name: "Luciana Ferreira",
    description:
      "Pintora profissional especializada em técnicas de pintura decorativa e renovação de ambientes.",
    yearsOfExperience: 10,
    offeredService: [
      "Pintura residencial",
      "Pintura comercial",
      "Pintura decorativa",
    ],
    location: "Salvador",
    profession: "pintor",
  },
];
