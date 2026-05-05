import { styles } from "./style";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { TextInput, TextInputProps, View } from "react-native";

export function Input({ ...rest }: TextInputProps) {
  return (
    <View style={styles.CInput}>
      <MaterialCommunityIcons
        name="account-search-outline"
        size={24}
        color="#b4b4b4"
      />
      <TextInput style={styles.input} {...rest}></TextInput>
    </View>
  );
}
