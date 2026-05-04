import { View, Text } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { data } from "../../components/utils/profissao/data";
import { IconsMain } from "../../components/Home/IconsMain";
import { styles } from "../../components/StylesApps/Profissionais/styleProfissionais";
import { Card } from "../../components/Profissionais/Card";

export default function Detalhe() {
  const { id } = useLocalSearchParams();

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
      <View>
        <Text>Oláa</Text>
        <Card />
      </View>
    </SafeAreaView>
  );
}
