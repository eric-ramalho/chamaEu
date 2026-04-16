import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "./style";
import { profissaoIcon, Profession } from "../../utils/Profissao";
import { HelpCircle } from "lucide-react-native";

type Props = {
  idCard: string;
  title: string;
  profession: Profession;
};

export function Card({ title, profession }: Props) {
  const key = profession.toLowerCase() as keyof typeof profissaoIcon;
  const Icon = profissaoIcon[key] || HelpCircle;

  return (
    <TouchableOpacity style={styles.card}>
      {Icon && <Icon size={24} color="#27d366" />}
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}
