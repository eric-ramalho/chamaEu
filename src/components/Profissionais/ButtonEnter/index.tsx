import { type ComponentType } from "react";
import { Text, TouchableOpacity } from "react-native";

import { styles } from "./style";

type Props = {
  name: string;
  onPress?: () => void;
  Icon?: ComponentType<{ color: string }>;
};
export function ButtonEnter({ name, onPress, Icon, ...rest }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.ButtonWhatsApp}
      onPress={onPress}
    >
      {Icon && <Icon color="white" />}
      <Text style={{ color: "white", fontWeight: "700", fontSize: 16 }}>
        {name}
      </Text>
    </TouchableOpacity>
  );
}
