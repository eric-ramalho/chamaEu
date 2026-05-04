import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "./style";
import { profissaoIcon, Profession } from "../../utils/db/ListaProfissao";
import { HelpCircle } from "lucide-react-native";

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
