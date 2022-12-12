import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";

const IOSStatusBar = () => {
  return (
    <View style={styles.iOSStatusBar1}>
      <View style={styles.iOSStatusBarBlackView}>
        <Text style={styles.iOSStatusBarBlackText}>iOS/Status Bar/Black</Text>
        <Image
          style={styles.iOSStatusBarBlackIcon}
          resizeMode="cover"
          source={require("../assets/iosstatus-barblack.png")}
        />
      </View>
      <View style={styles.iOSStatusBarBlackView1}>
        <Text style={styles.iOSStatusBarWhiteText}>iOS/Status Bar/White</Text>
        <Image
          style={styles.iOSStatusBarWhiteIcon}
          resizeMode="cover"
          source={require("../assets/iosstatus-barwhite.png")}
        />
      </View>
      <View style={styles.headerView}>
        <View style={styles.bGView} />
        <Text style={styles.iOSStatusBar}>iOS Status Bar</Text>
        <Text style={styles.iOSText}>iOS</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iOSStatusBarBlackText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 12,
    fontFamily: "Inter",
    color: "#666",
    textAlign: "left",
  },
  iOSStatusBarBlackIcon: {
    position: "absolute",
    top: 23,
    left: 0,
    width: 375,
    height: 44,
    overflow: "hidden",
  },
  iOSStatusBarBlackView: {
    position: "absolute",
    top: 168,
    left: 40,
    width: 375,
    height: 67,
  },
  iOSStatusBarWhiteText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 12,
    fontFamily: "Inter",
    color: "#666",
    textAlign: "left",
  },
  iOSStatusBarWhiteIcon: {
    position: "absolute",
    top: 23,
    left: 0,
    width: 375,
    height: 44,
  },
  iOSStatusBarBlackView1: {
    position: "absolute",
    top: 251,
    left: 40,
    width: 375,
    height: 67,
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
  iOSStatusBar: {
    position: "absolute",
    bottom: 32,
    left: 32,
    fontSize: 24,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  iOSText: {
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
  iOSStatusBar1: {
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

export default IOSStatusBar;
