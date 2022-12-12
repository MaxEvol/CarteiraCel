import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";

const Inputs = () => {
  return (
    <View style={styles.inputsView}>
      <View style={styles.iconCheckmarkView}>
        <Text style={styles.iconCheckmarkText}>Icon/Checkmark</Text>
        <Image
          style={styles.iconCheckmark}
          resizeMode="cover"
          source={require("../assets/iconcheckmark.png")}
        />
      </View>
      <View style={styles.checkboxEmptyView1}>
        <Text style={styles.checkboxEmptyText}>Checkbox/Empty</Text>
        <View style={styles.checkboxEmptyView}>
          <View style={styles.bGView} />
          <Image
            style={styles.iconCheckmark1}
            resizeMode="cover"
            source={require("../assets/iconcheckmark1.png")}
          />
        </View>
      </View>
      <View style={styles.checkboxOptionEmptyView1}>
        <Text style={styles.checkboxOptionEmptyText}>
          Checkbox Option/Empty
        </Text>
        <View style={styles.checkboxOptionEmptyView}>
          <View style={styles.checkboxEmptyView2}>
            <View style={styles.bGView1} />
            <Image
              style={styles.iconCheckmark2}
              resizeMode="cover"
              source={require("../assets/iconcheckmark2.png")}
            />
          </View>
          <Text style={styles.textHere}>Text here</Text>
        </View>
      </View>
      <View style={styles.checkboxOptionFilledView1}>
        <Text style={styles.checkboxOptionFilledText}>
          Checkbox Option/Filled
        </Text>
        <View style={styles.checkboxOptionFilledView}>
          <View style={styles.checkboxFilledView}>
            <View style={styles.bGView2} />
            <Image
              style={styles.iconCheckmark3}
              resizeMode="cover"
              source={require("../assets/iconcheckmark2.png")}
            />
          </View>
          <Text style={styles.textHere1}>Text here</Text>
        </View>
      </View>
      <View style={styles.checkboxFilledView2}>
        <Text style={styles.checkboxFilledText}>Checkbox/Filled</Text>
        <View style={styles.checkboxFilledView1}>
          <View style={styles.bGView3} />
          <Image
            style={styles.iconCheckmark4}
            resizeMode="cover"
            source={require("../assets/iconcheckmark1.png")}
          />
        </View>
      </View>
      <View style={styles.headerView}>
        <View style={styles.bGView4} />
        <Text style={styles.checkmarkText}>Checkmark</Text>
        <Text style={styles.interactionsText}>Interactions</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconCheckmarkText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 12,
    fontFamily: "Inter",
    color: "#666",
    textAlign: "left",
  },
  iconCheckmark: {
    position: "absolute",
    top: 23,
    left: -0.5,
    width: 7.5,
    height: 6.75,
  },
  iconCheckmarkView: {
    position: "absolute",
    top: 168,
    left: 40,
    width: 93,
    height: 29,
  },
  checkboxEmptyText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 12,
    fontFamily: "Inter",
    color: "#666",
    textAlign: "left",
  },
  bGView: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 4,
    backgroundColor: "#f6f6f6",
    borderStyle: "solid",
    borderColor: "#e8e8e8",
    borderWidth: 1,
  },
  iconCheckmark1: {
    position: "absolute",
    top: 4,
    left: 4,
    width: 8,
    height: 7,
    display: "none",
  },
  checkboxEmptyView: {
    position: "absolute",
    top: 23,
    left: 0,
    width: 16,
    height: 16,
  },
  checkboxEmptyView1: {
    position: "absolute",
    top: 213,
    left: 40,
    width: 98,
    height: 39,
  },
  checkboxOptionEmptyText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 12,
    fontFamily: "Inter",
    color: "#666",
    textAlign: "left",
  },
  bGView1: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 4,
    backgroundColor: "#f6f6f6",
    borderStyle: "solid",
    borderColor: "#e8e8e8",
    borderWidth: 1,
  },
  iconCheckmark2: {
    position: "absolute",
    top: 4,
    left: 4,
    width: 8,
    height: 7,
    display: "none",
  },
  checkboxEmptyView2: {
    position: "absolute",
    top: 0.5,
    left: 0,
    width: 16,
    height: 16,
  },
  textHere: {
    position: "absolute",
    top: 0,
    left: 24,
    fontSize: 14,
    fontFamily: "Inter",
    color: "#666",
    textAlign: "left",
    width: 154,
  },
  checkboxOptionEmptyView: {
    position: "absolute",
    top: 23,
    left: 0,
    width: 177,
    height: 17,
  },
  checkboxOptionEmptyView1: {
    position: "absolute",
    top: 323,
    left: 40,
    width: 177,
    height: 40,
  },
  checkboxOptionFilledText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 12,
    fontFamily: "Inter",
    color: "#666",
    textAlign: "left",
  },
  bGView2: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 4,
    backgroundColor: "#5db075",
    borderStyle: "solid",
    borderColor: "#4b9460",
    borderWidth: 1,
  },
  iconCheckmark3: {
    position: "absolute",
    top: 4,
    left: 3.5,
    width: 8.5,
    height: 7.76,
  },
  checkboxFilledView: {
    position: "absolute",
    top: 0.5,
    left: 0,
    width: 16,
    height: 16,
  },
  textHere1: {
    position: "absolute",
    top: 0,
    left: 24,
    fontSize: 14,
    fontFamily: "Inter",
    color: "#666",
    textAlign: "left",
    width: 154,
  },
  checkboxOptionFilledView: {
    position: "absolute",
    top: 22,
    left: 0,
    width: 177,
    height: 17,
  },
  checkboxOptionFilledView1: {
    position: "absolute",
    top: 379,
    left: 40,
    width: 177,
    height: 39,
  },
  checkboxFilledText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 12,
    fontFamily: "Inter",
    color: "#666",
    textAlign: "left",
  },
  bGView3: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 4,
    backgroundColor: "#5db075",
    borderStyle: "solid",
    borderColor: "#4b9460",
    borderWidth: 1,
  },
  iconCheckmark4: {
    position: "absolute",
    top: 4,
    left: 3.5,
    width: 8.5,
    height: 7.76,
  },
  checkboxFilledView1: {
    position: "absolute",
    top: 23,
    left: 0,
    width: 16,
    height: 16,
  },
  checkboxFilledView2: {
    position: "absolute",
    top: 268,
    left: 40,
    width: 92,
    height: 39,
  },
  bGView4: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: "#f8f8f8",
  },
  checkmarkText: {
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

export default Inputs;
