import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { data } from "../../components/utils/db/Listacategorias";
import { useLocalSearchParams } from "expo-router";

export default function Detalhe() {
  const { id } = useLocalSearchParams();
  const item = data.find((i) => i.id === id);

  if (!item) {
    return (
      <SafeAreaView>
        <Text>Testando serviço</Text>
      </SafeAreaView>
    );
  }
}
