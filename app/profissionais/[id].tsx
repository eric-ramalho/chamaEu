import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function Detalhe() {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Detalhe do serviço</Text>
      <Text>ID: {id}</Text>
    </View>
  );
}
