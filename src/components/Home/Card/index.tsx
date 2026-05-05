import { TouchableOpacity, View, Text } from "react-native";

import { type Profession } from "@/src/data/ListaProfissao";
import { IconsMain } from "@/src/components/Home/IconsMain";

import { styles } from "./style";

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
