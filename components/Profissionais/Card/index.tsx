import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { MapPin, MessageCircle } from "lucide-react-native";
type Props = {
  name: string;
  description: string;
  location: string;
};
export function Card({ name, description, location }: Props) {
  return (
    <View style={styles.containerMain}>
      <View style={styles.infoPeople}>
        <View
          style={{
            flexDirection: "column",
            gap: 5,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={styles.profile}>
            <Text style={{ fontSize: 18, fontWeight: 600, letterSpacing: 1.2 }}>
              {name}
            </Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.buttonProfile}>Ver perfil</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.infoProfile}>
          <Text style={{ color: "#3f3f3f", flexWrap: "wrap", width: "80%" }}>
            {description}
          </Text>
          <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
            <MapPin width={18} />
            <Text>{location}</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.ButtonWhatsApp}>
        <MessageCircle color={"white"} />
        <Text style={{ color: "white", fontWeight: 700, fontSize: 16 }}>
          Chamar no WhatsApp
        </Text>
      </TouchableOpacity>
    </View>
  );
}
