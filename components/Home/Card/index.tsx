import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "./style";
import { Profession } from "../../utils/db/ListaProfissao";
import { IconsMain } from "../IconsMain";

type Props = {
  idCard: string;
  title: string;
  profession: Profession;
  onPress?: () => void;
};

export function Card({ title, profession, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.icons}>
        <IconsMain profession={profession} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
