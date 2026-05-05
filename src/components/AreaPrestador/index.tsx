import { MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity } from "react-native";

import { styles } from "./style";

type Props = {
  onPress: () => void;
};

export function ButtonPrestador({ onPress }: Props) {
  return (
    <TouchableOpacity
      style={styles.areaPrestador}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <MaterialIcons name="business-center" size={18} color="#ffff" />
      <Text style={styles.areaPrestadorTitle}>Área do prestador</Text>
    </TouchableOpacity>
  );
}
