import { AntDesign } from "@expo/vector-icons";
import * as Crypto from "expo-crypto";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { styles } from "./index";
import { Text, View, FlatList } from "react-native";

import { Profession } from "../utils/Profissao";
import { ButtonPrestador } from "../components/AreaPrestador";
import { Input } from "../components/Input";
import { Card } from "../components/Card";

type Item = {
  id: string;
  title: string;
  profession: Profession;
};

const data: Item[] = [
  { id: Crypto.randomUUID(), title: "Encanador", profession: "encanador" },
  { id: Crypto.randomUUID(), title: "Eletricista", profession: "eletricista" },
  { id: Crypto.randomUUID(), title: "Pintor", profession: "pintor" },
  { id: Crypto.randomUUID(), title: "Encanador", profession: "encanador" },
  { id: Crypto.randomUUID(), title: "Eletricista", profession: "eletricista" },
  { id: Crypto.randomUUID(), title: "Pintor", profession: "pintor" },
  { id: Crypto.randomUUID(), title: "Encanador", profession: "encanador" },
  { id: Crypto.randomUUID(), title: "Eletricista", profession: "eletricista" },
  { id: Crypto.randomUUID(), title: "Pintor", profession: "pintor" },
  { id: Crypto.randomUUID(), title: "Encanador", profession: "encanador" },
  { id: Crypto.randomUUID(), title: "Eletricista", profession: "eletricista" },
  { id: Crypto.randomUUID(), title: "Pintor", profession: "pintor" },
  { id: Crypto.randomUUID(), title: "Encanador", profession: "encanador" },
  { id: Crypto.randomUUID(), title: "Eletricista", profession: "eletricista" },
  { id: Crypto.randomUUID(), title: "Pintor", profession: "pintor" },
  { id: Crypto.randomUUID(), title: "Encanador", profession: "encanador" },
  { id: Crypto.randomUUID(), title: "Eletricista", profession: "eletricista" },
  { id: Crypto.randomUUID(), title: "Pintor", profession: "pintor" },
];

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["top"]}>
        <StatusBar style="light" translucent />
        <View style={styles.headerArea}>
          <ButtonPrestador
            onPress={() => {
              console.log("ola");
            }}
          />
          <View style={styles.containerHeader}>
            <Text style={styles.logo}>chamaEu</Text>
            <Text style={styles.haderTitle}>
              Encontre profissionais na sua cidade
            </Text>
          </View>
        </View>

        <View style={styles.contentArea}>
          <View style={styles.containerInput}>
            <Input placeholder="Qual serviço você precisa?" />
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
                />
              )}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
