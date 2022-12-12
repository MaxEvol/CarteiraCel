import * as React from "react";
import { Text, StyleSheet, View } from "react-native";

const Inputs1 = () => {
  return (
    <View style={styles.inputsView}>
      <View style={styles.buttonPrimaryView1}>
        <Text style={styles.buttonPrimaryText}>Button/Primary</Text>
        <View style={styles.buttonPrimaryView}>
          <Text style={styles.clickMeText}>Click Me</Text>
        </View>
      </View>
      <View style={styles.buttonSecondaryView1}>
        <Text style={styles.buttonSecondaryText}>Button/Secondary</Text>
        <View style={styles.buttonSecondaryView}>
          <Text style={styles.clickMeText1}>Click Me</Text>
        </View>
      </View>
      <View style={styles.buttonDisabledView1}>
        <Text style={styles.buttonDisabledText}>Button/Disabled</Text>
        <View style={styles.buttonDisabledView}>
          <Text style={styles.clickMeText2}>Click Me</Text>
        </View>
      </View>
      <View style={styles.headerView}>
        <View style={styles.bGView} />
        <Text style={styles.buttonText}>Button</Text>
        <Text style={styles.interactionsText}>Interactions</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonPrimaryText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 12,
    fontFamily: "Inter",
    color: "#666",
    textAlign: "left",
  },
  clickMeText: {
    position: "relative",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  buttonPrimaryView: {
    position: "absolute",
    top: 23,
    left: 0,
    borderRadius: 100,
    backgroundColor: "#5db075",
    flexDirection: "column",
    paddingHorizontal: 32,
    paddingVertical: 16,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  buttonPrimaryView1: {
    position: "absolute",
    top: 168,
    left: 40,
    width: 131,
    height: 74,
  },
  buttonSecondaryText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 12,
    fontFamily: "Inter",
    color: "#666",
    textAlign: "left",
  },
  clickMeText1: {
    position: "relative",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#4b9460",
    textAlign: "center",
  },
  buttonSecondaryView: {
    position: "absolute",
    top: 23,
    left: 0,
    borderRadius: 100,
    backgroundColor: "#f6f6f6",
    flexDirection: "row",
    paddingHorizontal: 32,
    paddingVertical: 16,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  buttonSecondaryView1: {
    position: "absolute",
    top: 258,
    left: 40,
    width: 131,
    height: 74,
  },
  buttonDisabledText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 12,
    fontFamily: "Inter",
    color: "#666",
    textAlign: "left",
  },
  clickMeText2: {
    position: "relative",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#bdbdbd",
    textAlign: "center",
  },
  buttonDisabledView: {
    position: "absolute",
    top: 23,
    left: 0,
    borderRadius: 100,
    backgroundColor: "#f6f6f6",
    flexDirection: "row",
    paddingHorizontal: 32,
    paddingVertical: 16,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  buttonDisabledView1: {
    position: "absolute",
    top: 348,
    left: 40,
    width: 131,
    height: 74,
  },
  bGView: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: "#f8f8f8",
  },
  buttonText: {
    position: "absolute",
    bottom: 32,
    left: 32,
    fontSize: 24,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  interactionsText: {
    position: "absolute",
    bottom: 69,
    left: 32,
    fontSize: 12,
    fontFamily: "Inter",
    color: "#666",
    textAlign: "left",
  },
  headerView: {
    position: "absolute",
    top: 8,
    right: 8,
    left: 8,
    height: 128,
  },
  inputsView: {
    position: "relative",
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#ededed",
    borderWidth: 1,
    flex: 1,
    width: "100%",
    height: 1012,
    overflow: "hidden",
  },
});

export default Inputs1;
