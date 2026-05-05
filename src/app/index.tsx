import { AntDesign } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import {
  Text,
  View,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ButtonPrestador } from "@/src/components/AreaPrestador";
import { Card } from "@/src/components/Home/Card";
import { Input } from "@/src/components/Home/Input";
import { styles } from "@/src/components/Styles/Home/styleHome";
import { data } from "@/src/data/Listacategorias";

export default function Home() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" translucent />

      <View style={styles.headerArea}>
        <ButtonPrestador onPress={() => console.log("ola")} />

        <View style={styles.containerHeader}>
          <Text style={styles.logo}>chamaEu</Text>
          <Text style={styles.headerTitle}>
            Encontre profissionais na sua cidade
          </Text>
        </View>
      </View>

      <View style={styles.contentArea}>
        <View style={styles.containerInput}>
          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            accessible={false}
          >
            <Input placeholder="Qual serviço você precisa?" />
          </TouchableWithoutFeedback>
        </View>

        <View
          style={{
            flexDirection: "row",
            gap: 10,
            marginTop: 20,
            padding: 15,
          }}
        >
          <AntDesign name="star" size={18} color="#27d366" />
          <Text style={styles.textSecondary}>
            Profissionais mais procurados
          </Text>
        </View>

        <View style={styles.containerList}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            numColumns={2}
            renderItem={({ item }) => (
              <Card
                idCard={item.id}
                title={item.title}
                profession={item.profession}
                onPress={() => router.push(`/profissionais/${item.id}`)}
              />
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
