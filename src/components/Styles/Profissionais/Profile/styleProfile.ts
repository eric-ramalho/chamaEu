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
    fontSize: 16,
    color: "#090b0e",
    marginBottom: 5,
    marginTop: 15,
  },
  contentArea: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },

  containerList: {
    flex: 1,
    marginBottom: 20,
    width: "95%",
    alignSelf: "center",
  },

  textSecondary: {
    color: "#717579",
    marginTop: 5,
  },

  list: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 18,
  },
  containerProfile: {
    backgroundColor: "#ffffff",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
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
  nameProfile: {
    fontSize: 18,
    fontWeight: "600",
    color: "#212529",
  },

  imageGrid: {
    width: "100%",
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
  },

  footerArea: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#dee2e6",
  },
  imageGridContainer: {
    width: "100%",
    marginTop: 20,
    alignItems: "center",
    gap: 10,
  },

  imageListContent: {
    paddingHorizontal: 20,
    gap: 12,
  },

  imageMock: {
    width: 130,
    height: 110,
    backgroundColor: "#e9ecef",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#dee2e6",
  },
  customHeader: {
    position: "absolute",
    top: 45,
    left: 0,
    right: 0,
    zIndex: 10,
    paddingHorizontal: 20,
  },

  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "flex-start",
  },
});
