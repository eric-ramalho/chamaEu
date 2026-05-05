import { MapPin, User } from "lucide-react-native";
import { Text, View } from "react-native";

import { ButtonEnter } from "@/src/components/Profissionais/ButtonEnter";
import PictureProfile from "@/src/components/Profissionais/PictureProfile";

import { styles } from "./style";

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
        </View>
        <View style={styles.infoProfile}>
          <Text style={{ fontSize: 18, fontWeight: 600, letterSpacing: 1.2 }}>
            {name}
          </Text>
          <Text
            numberOfLines={4}
            ellipsizeMode="tail"
            style={{ color: "#3f3f3f", flexWrap: "wrap", width: "80%" }}
          >
            {description}
          </Text>
          <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
            <MapPin width={18} />
            <Text>{location}</Text>
          </View>
        </View>
      </View>

      <ButtonEnter Icon={User} name="Ver Perfil" onPress={onPress} />
    </View>
  );
}
