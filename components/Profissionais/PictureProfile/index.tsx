import { View, Text } from "react-native";
import { styles } from "./style";

export default function PictureProfile({ name }: { name: string }) {
  return (
    <View style={styles.profile}>
      <Text style={{ fontSize: 24, fontWeight: 700 }}>{name}</Text>
    </View>
  );
}
