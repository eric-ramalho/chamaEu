import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25d366",
  },

  headerArea: {
    backgroundColor: "#25d366",
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 60,
  },
  containerHeader: {
    width: "100%",
    alignItems: "center",
    gap: 15,
    marginTop: 20,
  },
  logo: {
    fontWeight: "800",
    fontSize: 35,
    color: "#ffffff",
  },
  headerTitle: {
    fontWeight: "600",
    fontSize: 18,
    color: "#ffffff",
  },
  contentArea: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },

  containerInput: {
    backgroundColor: "#ffffff",
    height: 80,
    borderRadius: 15,
    justifyContent: "center",
    padding: 15,
    marginHorizontal: 15,
    marginTop: -40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  Input: {
    color: "#000000",
    height: 50,
    fontSize: 16,
  },

  containerList: {
    flex: 1,
    marginBottom: 20,
    width: "95%",
    alignSelf: "center",
  },

  textSecondary: {
    color: "#717579",
  },
  list: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 18,
  },
});
