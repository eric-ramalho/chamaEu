import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { styles } from "../../../src/components/Styles/Profissionais/Profile/styleProfile";
import PictureProfile from "../../../src/components/Profissionais/PictureProfile";
import { profile } from "../../../src/data/Profile";
import { MapPin, BriefcaseBusiness } from "lucide-react-native";

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
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.headerArea}>
        <View style={styles.containerHeader}>
          <PictureProfile name={item.name.charAt(0).toUpperCase()} />
        </View>
      </View>

      <View style={styles.contentArea}>
        <View style={styles.containerProfile}>
          <Text style={styles.nameProfile}>{item.name}</Text>
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              marginTop: 5,
              justifyContent: "center",
              alignItems: "center",
              borderBottomWidth: 1,
              borderBottomColor: "#dee2e6",
              paddingBottom: 20,
              width: "100%",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                marginTop: 5,
              }}
            >
              <MapPin size={16} color="#6c757d" />
              <Text style={styles.textSecondary}>{item.location}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                gap: 10,
                marginTop: 5,
                alignItems: "center",
              }}
            >
              <Text style={styles.textSecondary}>
                {item.yearsOfExperience} Anos de Experiencia
              </Text>
            </View>
          </View>

          <View style={{ width: "100%", paddingHorizontal: 20, marginTop: 10 }}>
            <Text style={styles.headerTitle}>Sobre</Text>
            <Text>{item.description}</Text>

            <BriefcaseBusiness />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
