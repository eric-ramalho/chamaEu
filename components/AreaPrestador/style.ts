import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  areaPrestador: {
    backgroundColor: "#67df94",
    borderRadius: 15,
    padding: 5,
    width: 180,
    height: 35,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginLeft: "auto",

    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 1,
  },
  areaPrestadorTitle: {
    fontSize: 15,
    fontWeight: 700,
    color: "#ffff",
  },
});
