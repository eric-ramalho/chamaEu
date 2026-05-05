import { Text, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { User } from "lucide-react-native";
type Props = {
  name: string;
  onPress?: () => void;
};
export function ButtonEnter({ name, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.ButtonWhatsApp} onPress={onPress}>
      <User color={"white"} />
      <Text style={{ color: "white", fontWeight: 700, fontSize: 16 }}>
        {name}
      </Text>
    </TouchableOpacity>
  );
}
