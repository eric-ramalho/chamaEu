import { View, Text } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { data } from "../../src/data/Listacategorias";
import { IconsMain } from "../../src/components/Home/IconsMain";
import { styles } from "../../src/components/Styles/Profissionais/styleProfissionais";
import { Card } from "../../src/components/Profissionais/Card";
import { profile } from "../../src/data/Profile";
import { useRouter } from "expo-router";

import { FlatList } from "react-native";

export default function Detalhe() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const item = data.find((i) => i.id === id);

  if (!item) {
    return (
      <SafeAreaView>
        <Text>Serviço não encontrado</Text>
      </SafeAreaView>
    );
  }

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
        renderItem={({ item: profileItem }) => (
          <Card
            name={profileItem.name}
            description={profileItem.description}
            location={profileItem.location}
            onPress={() =>
              router.push(`/profissionais/profile/${profileItem.id}`)
            }
          />
        )}
      />
    </SafeAreaView>
  );
}
