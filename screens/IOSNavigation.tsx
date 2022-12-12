import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";

const IOSNavigation = () => {
  return (
    <View style={styles.iOSNavigationView}>
      <View style={styles.iOSStatusBarBlackView}>
        <Text style={styles.iOSStatusBarBlackText}>iOS/Status Bar/Black</Text>
        <View style={styles.pageHeaderView}>
          <Text style={styles.leftText}>Left</Text>
          <Text style={styles.signUpText}>Sign Up</Text>
          <Image
            style={styles.iconX}
            resizeMode="cover"
            source={require("../assets/iconx.png")}
          />
          <Text style={styles.rightText}>Right</Text>
        </View>
      </View>
      <View style={styles.headerView}>
        <View style={styles.bGView} />
        <Text style={styles.iOSNavigationText}>iOS Navigation</Text>
        <Text style={styles.iOSText}>iOS</Text>
      </View>
      <View style={styles.iOSBottomBar5Tabs2}>
        <View style={styles.iOSBottomBar5Tabs}>
          <View style={styles.iPhoneUIView}>
            <View style={styles.backgroundView} />
            <View style={styles.homeIndicatorView1}>
              <View style={styles.homeIndicatorView} />
            </View>
          </View>
          <View style={styles.tabsView}>
            <View style={styles.rectangleView} />
            <View style={styles.rectangleView1} />
            <View style={styles.rectangleView2} />
            <View style={styles.rectangleView3} />
            <View style={styles.rectangleView4} />
          </View>
          <View style={styles.topDividerView} />
        </View>
        <Text style={styles.iOSBottomBar5Tabs1}>iOS/Bottom Bar/5 Tabs</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iOSStatusBarBlackText: {
    position: "absolute",
    top: 0,
    left: 2,
    fontSize: 12,
    fontFamily: "Inter",
    color: "#666",
    textAlign: "left",
  },
  leftText: {
    position: "absolute",
    top: 8,
    right: 0,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#5db075",
    textAlign: "right",
  },
  signUpText: {
    position: "absolute",
    marginLeft: -55,
    top: 0,
    left: "50%",
    fontSize: 30,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "center",
  },
  iconX: {
    position: "absolute",
    top: 16,
    left: -0.31,
    width: 16,
    height: 16,
    display: "none",
  },
  rightText: {
    position: "absolute",
    marginTop: -10,
    top: "50%",
    left: 0,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#5db075",
    textAlign: "left",
  },
  pageHeaderView: {
    position: "absolute",
    top: 23,
    left: 0,
    width: 258,
    height: 36,
  },
  iOSStatusBarBlackView: {
    position: "absolute",
    top: 168,
    left: 38,
    width: 258,
    height: 59,
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
  iOSNavigationText: {
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
  backgroundView: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "#fafafa",
  },
  homeIndicatorView: {
    position: "absolute",
    marginLeft: -67,
    bottom: 0,
    left: "50%",
    borderRadius: 100,
    backgroundColor: "#000",
    width: 134,
    height: 5,
  },
  homeIndicatorView1: {
    position: "absolute",
    marginLeft: -67.5,
    bottom: 9,
    left: "50%",
    width: 134,
    height: 5,
  },
  iPhoneUIView: {
    position: "absolute",
    top: 0.5,
    right: 0,
    bottom: 0,
    left: 0,
  },
  rectangleView: {
    position: "absolute",
    marginLeft: -160,
    top: 0,
    left: "50%",
    borderRadius: 100,
    backgroundColor: "#5db075",
    width: 32,
    height: 32,
  },
  rectangleView1: {
    position: "absolute",
    marginLeft: -88,
    top: 0,
    left: "50%",
    borderRadius: 100,
    backgroundColor: "#e8e8e8",
    width: 32,
    height: 32,
  },
  rectangleView2: {
    position: "absolute",
    marginLeft: -16,
    top: 0,
    left: "50%",
    borderRadius: 100,
    backgroundColor: "#e8e8e8",
    width: 32,
    height: 32,
  },
  rectangleView3: {
    position: "absolute",
    marginLeft: 56,
    top: 0,
    left: "50%",
    borderRadius: 100,
    backgroundColor: "#e8e8e8",
    width: 32,
    height: 32,
  },
  rectangleView4: {
    position: "absolute",
    marginLeft: 128,
    top: 0,
    left: "50%",
    borderRadius: 100,
    backgroundColor: "#e8e8e8",
    width: 32,
    height: 32,
  },
  tabsView: {
    position: "absolute",
    marginLeft: -161.5,
    top: 15,
    left: "50%",
    width: 320,
    height: 32,
  },
  topDividerView: {
    position: "absolute",
    top: 0.5,
    right: 0,
    left: 0,
    backgroundColor: "#bdc5cd",
    height: 0.5,
  },
  iOSBottomBar5Tabs: {
    position: "absolute",
    top: 23,
    left: 0,
    width: 375,
    height: 83.5,
  },
  iOSBottomBar5Tabs1: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 12,
    fontFamily: "Inter",
    color: "#666",
    textAlign: "left",
  },
  iOSBottomBar5Tabs2: {
    position: "absolute",
    top: 243,
    left: 35,
    width: 375,
    height: 106.5,
  },
  iOSNavigationView: {
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

export default IOSNavigation;
