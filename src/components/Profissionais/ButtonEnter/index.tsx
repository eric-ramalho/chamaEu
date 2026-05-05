import { Text, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { User, MessageCircle } from "lucide-react-native";
type Props = {
  name: string;
  onPress?: () => void;
  Icon?: React.ComponentType<{ color: string }>;
};
export function ButtonEnter({ name, onPress, Icon, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.ButtonWhatsApp} onPress={onPress}>
      {Icon && <Icon color="white" />}
      <Text style={{ color: "white", fontWeight: "700", fontSize: 16 }}>
        {name}
      </Text>
    </TouchableOpacity>
  );
}
