import { AntDesign } from "@expo/vector-icons";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { styles } from "./index";
import { Text, View, TouchableOpacity } from "react-native";

import { ButtonPrestador } from "../components/AreaPrestador";
import { Input } from "../components/Input";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["top"]}>
        <StatusBar style="light" translucent />
        <View style={styles.headerArea}>
          <ButtonPrestador
            onPress={() => {
              console.log("ola");
            }}
          />
          <View style={styles.containerHeader}>
            <Text style={styles.logo}>chamaEu</Text>
            <Text style={styles.haderTitle}>
              Encontre profissionais na sua cidade
            </Text>
          </View>
        </View>

        <View style={styles.contentArea}>
          <View style={styles.containerInput}>
            <Input placeholder="Qual serviço você precisa?" />
          </View>
          {/* View Profissionais mais procurados */}
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              marginTop: 20,
              padding: 15,
            }}
          >
            <AntDesign name="star" size={18} color="#27d366" />
            <Text style={styles.textSecondary}>
              Profissionais mais procurados
            </Text>
          </View>

          <View style={styles.containerList}></View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
