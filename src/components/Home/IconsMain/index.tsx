import { HelpCircle } from "lucide-react-native";
import { View } from "react-native";

import { profissaoIcon, type Profession } from "@/src/data/ListaProfissao";

import { styles } from "./style";

type Props = {
  profession: Profession;
};

export function IconsMain({ profession }: Props) {
  const key = profession.toLowerCase() as keyof typeof profissaoIcon;
  const Icon = profissaoIcon[key] || HelpCircle;

  return (
    <View style={styles.icons}>
      {Icon && <Icon size={24} color="#25d366" />}
    </View>
  );
}
