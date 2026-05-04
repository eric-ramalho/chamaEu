import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { data } from "../../../components/utils/db/Listacategorias";
import { useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { styles } from "../../../components/StylesApps/Home/styleHome";
import PictureProfile from "../../../components/Profissionais/PictureProfile";

export default function Detalhe() {
  const { id } = useLocalSearchParams();
  const item = data.find((i) => i.id === id);

  if (!item) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" translucent />

        <View style={styles.headerArea}>
          <View style={styles.containerHeader}>
            <PictureProfile name={name} />
          </View>
        </View>

        <View style={styles.contentArea}>
          <View style={styles.containerInput}></View>

          <View
            style={{
              flexDirection: "row",
              gap: 10,
              marginTop: 20,
              padding: 15,
            }}
          >
            <Text style={styles.textSecondary}>
              Profissionais mais procurados
            </Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
