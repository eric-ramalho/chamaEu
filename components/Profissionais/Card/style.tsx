import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: "#fff",
    margin: 15,
    padding: 15,
    borderColor: "#ddd",
    borderWidth: 1.3,
    borderRadius: 10,
    justifyContent: "space-between",
  },

  infoPeople: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
  },

  profile: {
    width: 70,
    height: 70,
    borderRadius: 25,
    backgroundColor: "#e6faed",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonProfile: {
    color: "#00b37e",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 600,
  },

  infoProfile: {
    flex: 1,
    gap: 8,
    marginLeft: 15,
  },
  ButtonWhatsApp: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#25D366",
    padding: 10,
    borderRadius: 8,
    marginTop: 15,
  },
});
