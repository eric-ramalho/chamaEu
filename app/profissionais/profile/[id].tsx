import {
  Text,
  View,
  FlatList,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { styles } from "../../../src/components/Styles/Profissionais/Profile/styleProfile";
import PictureProfile from "../../../src/components/Profissionais/PictureProfile";
import { profile } from "../../../src/data/Profile";
import { MockupImages } from "../../../src/data/MockupImages";
import { router } from "expo-router";
import {
  MapPin,
  BriefcaseBusiness,
  CircleCheck,
  ChevronRight,
  MessageCircle,
  ArrowLeft,
} from "lucide-react-native";
import { ButtonEnter } from "../../../src/components/Profissionais/ButtonEnter";

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
      <View style={styles.customHeader}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <ArrowLeft size={26} color="#fff" />
        </Pressable>
      </View>
      <View style={styles.headerArea}>
        <TouchableOpacity
          style={styles.containerHeader}
          onPress={() => router.back()}
        >
          <PictureProfile name={item.name.charAt(0).toUpperCase()} />
        </TouchableOpacity>
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
            <Text style={styles.textSecondary}>{item.description}</Text>
            {/* Limitar a quantidade descritiva */}
          </View>
          <View
            style={{
              width: "100%",
              marginTop: 20,
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 10,
              paddingHorizontal: 20,
            }}
          >
            <BriefcaseBusiness color={"#35d671"} size={17} />
            <Text style={[styles.headerTitle, { marginTop: 5 }]}>
              Serviços Oferecidos
            </Text>
          </View>
          <View style={{ width: "100%", paddingHorizontal: 20, marginTop: 10 }}>
            {item.offeredService?.map((service, index) => (
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
                key={index}
              >
                <CircleCheck color={"#35d671"} size={17} />
                <Text key={index} style={styles.textSecondary}>
                  {service}
                </Text>
              </View>
            ))}
          </View>

          <View style={{ width: "100%", paddingHorizontal: 20, marginTop: 10 }}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <MapPin color={"#35d671"} size={17} style={{ marginTop: 8 }} />
              <Text style={styles.headerTitle}>Região de Atendimento</Text>
            </View>
            <Text style={styles.textSecondary}>{item.location}</Text>
          </View>
        </View>
        {/* Adicionando Fotos */}
        <View style={styles.imageGridContainer}>
          <Text style={styles.headerTitle}>Fotos</Text>
          <FlatList
            data={MockupImages}
            keyExtractor={(item) => String(item)}
            horizontal
            showsHorizontalScrollIndicator={true}
            contentContainerStyle={styles.imageListContent}
            renderItem={() => <View style={styles.imageMock} />}
          />
        </View>
      </View>
      <View style={styles.footerArea}>
        <ButtonEnter Icon={MessageCircle} name="Entrar em Contato" />
      </View>
    </SafeAreaView>
  );
}
