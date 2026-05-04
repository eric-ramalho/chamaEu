import { View, Text } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { data } from "../../components/utils/profissao/data";

export default function Detalhe() {
  const { id } = useLocalSearchParams();
  const item = data.find((i) => i.id === id);
  return (
    <SafeAreaView>
      <StatusBar style="light" translucent />
      <Stack.Screen
        options={{ headerShown: true, title: ` ${item?.profession}` }}
      />
      <View>
        <Text>Detalhes do profissional {item?.profession}</Text>
      </View>
    </SafeAreaView>
  );
}
