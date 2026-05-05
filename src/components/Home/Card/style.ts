import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 8,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  icons: {
    backgroundColor: "#e9faef",
    height: 50,
    width: 50,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    color: "#333",
    fontWeight: "600",
  },
});
