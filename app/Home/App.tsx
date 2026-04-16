import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./index";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View>
        <TouchableOpacity style={styles.areaPrestador}>
          <MaterialIcons name="business-center" size={24} color="black" />
          <Text>Área do prestador</Text>
        </TouchableOpacity>
        <Text>chamaEu</Text>
        <Text>Encontre profissionais na sua cidade</Text>
      </View>
    </View>
  );
}
