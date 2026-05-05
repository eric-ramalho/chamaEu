import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { styles } from "../../../src/components/Styles/Home/styleHome";
import PictureProfile from "../../../src/components/Profissionais/PictureProfile";
import { profile } from "../../../src/data/Profile";

export default function Detalhe() {
  const { id } = useLocalSearchParams();
  const item = profile.find((profileItem) => profileItem.id === id);

  if (!item) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" translucent />
        <Text>Perfil nao encontrado</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" translucent />

      <View style={styles.headerArea}>
        <View style={styles.containerHeader}>
          <PictureProfile name={item.name.charAt(0).toUpperCase()} />
          <Text style={styles.logo}>{item.name}</Text>
          <Text style={styles.headerTitle}>
            {item.profession.toUpperCase()}
          </Text>
        </View>
      </View>

      <View style={styles.contentArea}>
        <View style={styles.containerInput}>
          <Text>{item.location}</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            gap: 10,
            marginTop: 20,
            padding: 15,
          }}
        >
          <Text style={styles.textSecondary}>{item.description}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
