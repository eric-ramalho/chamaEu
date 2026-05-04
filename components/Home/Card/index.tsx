import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "./style";
import { profissaoIcon, Profession } from "../../utils/Profissao";
import { HelpCircle } from "lucide-react-native";

type Props = {
  idCard: string;
  title: string;
  profession: Profession;
  onPress?: () => void;
};

export function Card({ title, profession, onPress }: Props) {
  const key = profession.toLowerCase() as keyof typeof profissaoIcon;
  const Icon = profissaoIcon[key] || HelpCircle;

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.icons}>
        {Icon && <Icon size={24} color="#25d366" />}
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
