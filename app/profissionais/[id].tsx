import { View, Text } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { data } from "../../components/utils/db/Listacategorias";
import { IconsMain } from "../../components/Home/IconsMain";
import { styles } from "../../components/StylesApps/Profissionais/styleProfissionais";
import { Card } from "../../components/Profissionais/Card";
import { profile } from "../../components/utils/db/Profile";
import { useRouter } from "expo-router";

import { FlatList } from "react-native";

export default function Detalhe() {
  const { id } = useLocalSearchParams();

  const item = data.find((i) => i.id === id);
  const dataProfile = profile.find((p) => p.id === id);

  if (!item) {
    return (
      <SafeAreaView>
        <Text>Serviço não encontrado</Text>
      </SafeAreaView>
    );
  }
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="light" translucent />

      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: () => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 20,
                paddingBottom: 10,
              }}
            >
              <IconsMain profession={item.profession} />
              <Text style={styles.haderTitle}>{item.title.toUpperCase()}</Text>
            </View>
          ),
        }}
      />
      <FlatList
        data={profile.filter((p) => p.profession === item.profession)}
        keyExtractor={(data) => data.id}
        numColumns={1}
        renderItem={({ item }) => (
          <Card
            name={item.name}
            description={item.description}
            location={item.location}
            onPress={() =>
              router.push(`/profissionais/profile/${dataProfile.id}`)
            }
          />
        )}
      />
    </SafeAreaView>
  );
}
