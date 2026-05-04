import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { MapPin, MessageCircle } from "lucide-react-native";
import PictureProfile from "../PictureProfile";
type Props = {
  name: string;
  description: string;
  location: string;
  onPress?: () => void;
};
export function Card({ name, description, location, onPress }: Props) {
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
          <PictureProfile name={name.charAt(0).toUpperCase()} />
          <TouchableOpacity>
            <Text style={styles.buttonProfile} onPress={onPress}>
              Ver perfil
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.infoProfile}>
          <Text style={{ fontSize: 18, fontWeight: 600, letterSpacing: 1.2 }}>
            {name}
          </Text>
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
