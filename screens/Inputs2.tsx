import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";

const Inputs2 = () => {
  return (
    <View style={styles.inputsView}>
      <View style={styles.inputTextView1}>
        <Text style={styles.inputText}>Input/Text</Text>
        <View style={styles.inputTextView}>
          <Image
            style={styles.bGIcon}
            resizeMode="cover"
            source={require("../assets/bg1.png")}
          />
          <Text style={styles.nameText}>Name</Text>
          <Text style={styles.showText}>Show</Text>
        </View>
      </View>
      <View style={styles.inputSearchView1}>
        <Text style={styles.inputSearchORSendText}>Input/SearchORSend</Text>
        <View style={styles.inputSearchView}>
          <Image
            style={styles.bGIcon1}
            resizeMode="cover"
            source={require("../assets/bg2.png")}
          />
          <Text style={styles.searchText}>Search</Text>
          <Image
            style={styles.iconSend}
            resizeMode="cover"
            source={require("../assets/iconsend.png")}
          />
        </View>
      </View>
      <View style={styles.segmentedControlStructureView1}>
        <Text style={styles.segmentedControlStructureText}>
          Segmented Control/Structure
        </Text>
        <View style={styles.segmentedControlStructureView}>
          <Image
            style={styles.bGIcon2}
            resizeMode="cover"
            source={require("../assets/bg2.png")}
          />
          <Text style={styles.searchText1}>Search</Text>
          <Text style={styles.searchText2}>Search</Text>
          <View style={styles.leftSelectedView}>
            <Image
              style={styles.bGIcon3}
              resizeMode="cover"
              source={require("../assets/bg4.png")}
            />
            <Text style={styles.searchText3}>Search</Text>
          </View>
          <View style={styles.rightSelectedView}>
            <Image
              style={styles.bGIcon4}
              resizeMode="cover"
              source={require("../assets/bg4.png")}
            />
            <Text style={styles.searchText4}>Search</Text>
          </View>
        </View>
      </View>
      <View style={styles.segmentedControlLeftView1}>
        <Text style={styles.segmentedControlLeftText}>
          Segmented Control/Left
        </Text>
        <View style={styles.segmentedControlLeftView}>
          <View style={styles.segmentedControlStructureView2}>
            <Image
              style={styles.bGIcon5}
              resizeMode="cover"
              source={require("../assets/bg2.png")}
            />
            <Text style={styles.searchText5}>Search</Text>
            <Text style={styles.searchText6}>Search</Text>
            <View style={styles.leftSelectedView1}>
              <Image
                style={styles.bGIcon6}
                resizeMode="cover"
                source={require("../assets/bg4.png")}
              />
              <Text style={styles.searchText7}>Search</Text>
            </View>
            <View style={styles.rightSelectedView1}>
              <Image
                style={styles.bGIcon7}
                resizeMode="cover"
                source={require("../assets/bg4.png")}
              />
              <Text style={styles.searchText8}>Search</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.segmentedControlRightView1}>
        <Text style={styles.segmentedControlRightText}>
          Segmented Control/Right
        </Text>
        <View style={styles.segmentedControlRightView}>
          <View style={styles.segmentedControlStructureView3}>
            <Image
              style={styles.bGIcon8}
              resizeMode="cover"
              source={require("../assets/bg2.png")}
            />
            <Text style={styles.searchText9}>Search</Text>
            <Text style={styles.searchText10}>Search</Text>
            <View style={styles.leftSelectedView2}>
              <Image
                style={styles.bGIcon9}
                resizeMode="cover"
                source={require("../assets/bg4.png")}
              />
              <Text style={styles.searchText11}>Search</Text>
            </View>
            <View style={styles.rightSelectedView2}>
              <Image
                style={styles.bGIcon10}
                resizeMode="cover"
                source={require("../assets/bg4.png")}
              />
              <Text style={styles.searchText12}>Search</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.radioUnselectedView1}>
        <Text style={styles.radioUnselectedText}>Radio/Unselected</Text>
        <View style={styles.radioUnselectedView}>
          <Text style={styles.radioOptionHere}>Radio option here...</Text>
          <View style={styles.dividerView} />
          <Image
            style={styles.radioIcon}
            resizeMode="cover"
            source={require("../assets/radio.png")}
          />
        </View>
      </View>
      <View style={styles.radioSelectedView1}>
        <Text style={styles.radioSelectedText}>Radio/Unselected</Text>
        <View style={styles.radioSelectedView}>
          <Text style={styles.radioOptionHere1}>Radio option here...</Text>
          <View style={styles.dividerView1} />
          <Image
            style={styles.radioIcon1}
            resizeMode="cover"
            source={require("../assets/radio1.png")}
          />
        </View>
      </View>
      <View style={styles.headerView}>
        <View style={styles.bGView} />
        <Text style={styles.inputsText}>Inputs</Text>
        <Text style={styles.interactionsText}>Interactions</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 12,
    fontFamily: "Inter",
    color: "#666",
    textAlign: "left",
  },
  bGIcon: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 8,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  nameText: {
    position: "absolute",
    marginTop: -9,
    top: "50%",
    left: 16,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#bdbdbd",
    textAlign: "left",
  },
  showText: {
    position: "absolute",
    marginTop: -9,
    top: "50%",
    right: 16,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#5db075",
    textAlign: "right",
    display: "none",
  },
  inputTextView: {
    position: "absolute",
    top: 23,
    left: 0,
    width: 343,
    height: 50,
  },
  inputTextView1: {
    position: "absolute",
    top: 168,
    left: 40,
    width: 343,
    height: 73,
  },
  inputSearchORSendText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 12,
    fontFamily: "Inter",
    color: "#666",
    textAlign: "left",
  },
  bGIcon1: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 100,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  searchText: {
    position: "absolute",
    marginTop: -9,
    top: "50%",
    left: 16,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#bdbdbd",
    textAlign: "left",
  },
  iconSend: {
    position: "absolute",
    marginTop: -17,
    top: "50%",
    right: 8,
    width: 34,
    height: 34,
    display: "none",
  },
  inputSearchView: {
    position: "absolute",
    top: 23,
    left: 0,
    width: 343,
    height: 50,
  },
  inputSearchView1: {
    position: "absolute",
    top: 257,
    left: 40,
    width: 343,
    height: 73,
  },
  segmentedControlStructureText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 12,
    fontFamily: "Inter",
    color: "#666",
    textAlign: "left",
  },
  bGIcon2: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 100,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  searchText1: {
    position: "absolute",
    marginTop: -9,
    marginLeft: 56.5,
    top: "50%",
    left: "50%",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#bdbdbd",
    textAlign: "center",
  },
  searchText2: {
    position: "absolute",
    marginTop: -9,
    marginLeft: -110.5,
    top: "50%",
    left: "50%",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#bdbdbd",
    textAlign: "center",
  },
  bGIcon3: {
    position: "absolute",
    height: "100%",
    top: "0%",
    right: 0,
    bottom: "0%",
    left: 0,
    borderRadius: 100,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  searchText3: {
    position: "absolute",
    marginTop: -9,
    marginLeft: -26.75,
    top: "50%",
    left: "50%",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#bdbdbd",
    textAlign: "center",
  },
  leftSelectedView: {
    position: "absolute",
    height: "92%",
    top: "4%",
    right: 169.5,
    bottom: "4%",
    left: 2,
  },
  bGIcon4: {
    position: "absolute",
    height: "100%",
    top: "0%",
    right: 0,
    bottom: "0%",
    left: 0,
    borderRadius: 100,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  searchText4: {
    position: "absolute",
    marginTop: -9,
    marginLeft: -26.75,
    top: "50%",
    left: "50%",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#bdbdbd",
    textAlign: "center",
  },
  rightSelectedView: {
    position: "absolute",
    height: "92%",
    top: "4%",
    right: 2.5,
    bottom: "4%",
    left: 169,
    display: "none",
  },
  segmentedControlStructureView: {
    position: "absolute",
    top: 23,
    left: 0,
    width: 343,
    height: 50,
  },
  segmentedControlStructureView1: {
    position: "absolute",
    top: 346,
    left: 40,
    width: 343,
    height: 73,
  },
  segmentedControlLeftText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 12,
    fontFamily: "Inter",
    color: "#666",
    textAlign: "left",
  },
  bGIcon5: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 100,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  searchText5: {
    position: "absolute",
    marginTop: -9,
    marginLeft: 56.5,
    top: "50%",
    left: "50%",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#bdbdbd",
    textAlign: "center",
  },
  searchText6: {
    position: "absolute",
    marginTop: -9,
    marginLeft: -110.5,
    top: "50%",
    left: "50%",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#bdbdbd",
    textAlign: "center",
  },
  bGIcon6: {
    position: "absolute",
    height: "100%",
    top: "0%",
    right: 0,
    bottom: "0%",
    left: 0,
    borderRadius: 100,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  searchText7: {
    position: "absolute",
    marginTop: -9,
    marginLeft: -26.75,
    top: "50%",
    left: "50%",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#5db075",
    textAlign: "center",
  },
  leftSelectedView1: {
    position: "absolute",
    height: "92%",
    top: "4%",
    right: 169.5,
    bottom: "4%",
    left: 2,
  },
  bGIcon7: {
    position: "absolute",
    height: "100%",
    top: "0%",
    right: 0,
    bottom: "0%",
    left: 0,
    borderRadius: 100,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  searchText8: {
    position: "absolute",
    marginTop: -9,
    marginLeft: -26.75,
    top: "50%",
    left: "50%",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#5db075",
    textAlign: "center",
  },
  rightSelectedView1: {
    position: "absolute",
    height: "92%",
    top: "4%",
    right: 2.5,
    bottom: "4%",
    left: 169,
    display: "none",
  },
  segmentedControlStructureView2: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  segmentedControlLeftView: {
    position: "absolute",
    top: 23,
    left: 0,
    width: 343,
    height: 50,
  },
  segmentedControlLeftView1: {
    position: "absolute",
    top: 435,
    left: 40,
    width: 343,
    height: 73,
  },
  segmentedControlRightText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 12,
    fontFamily: "Inter",
    color: "#666",
    textAlign: "left",
  },
  bGIcon8: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 100,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  searchText9: {
    position: "absolute",
    marginTop: -9,
    marginLeft: 56.5,
    top: "50%",
    left: "50%",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#bdbdbd",
    textAlign: "center",
  },
  searchText10: {
    position: "absolute",
    marginTop: -9,
    marginLeft: -110.5,
    top: "50%",
    left: "50%",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#bdbdbd",
    textAlign: "center",
  },
  bGIcon9: {
    position: "absolute",
    height: "100%",
    top: "0%",
    right: 0,
    bottom: "0%",
    left: 0,
    borderRadius: 100,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  searchText11: {
    position: "absolute",
    marginTop: -9,
    marginLeft: -26.75,
    top: "50%",
    left: "50%",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#bdbdbd",
    textAlign: "center",
  },
  leftSelectedView2: {
    position: "absolute",
    height: "92%",
    top: "4%",
    right: 169.5,
    bottom: "4%",
    left: 2,
    display: "none",
  },
  bGIcon10: {
    position: "absolute",
    height: "100%",
    top: "0%",
    right: 0,
    bottom: "0%",
    left: 0,
    borderRadius: 100,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  searchText12: {
    position: "absolute",
    marginTop: -9,
    marginLeft: -26.75,
    top: "50%",
    left: "50%",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#5db075",
    textAlign: "center",
  },
  rightSelectedView2: {
    position: "absolute",
    height: "92%",
    top: "4%",
    right: 2.5,
    bottom: "4%",
    left: 169,
  },
  segmentedControlStructureView3: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  segmentedControlRightView: {
    position: "absolute",
    top: 23,
    left: 0,
    width: 343,
    height: 50,
  },
  segmentedControlRightView1: {
    position: "absolute",
    top: 524,
    left: 40,
    width: 343,
    height: 73,
  },
  radioUnselectedText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 12,
    fontFamily: "Inter",
    color: "#666",
    textAlign: "left",
  },
  radioOptionHere: {
    position: "absolute",
    marginTop: -8,
    top: "50%",
    left: 0,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#bdbdbd",
    textAlign: "left",
  },
  dividerView: {
    position: "absolute",
    right: -0.5,
    bottom: -1.5,
    left: -0.5,
    borderStyle: "solid",
    borderColor: "#e8e8e8",
    borderTopWidth: 1,
    height: 1,
  },
  radioIcon: {
    position: "absolute",
    top: 16,
    right: 0,
    width: 16,
    height: 16,
  },
  radioUnselectedView: {
    position: "absolute",
    top: 25,
    left: 0,
    width: 343,
    height: 48,
  },
  radioUnselectedView1: {
    position: "absolute",
    top: 613,
    left: 40,
    width: 343,
    height: 73,
  },
  radioSelectedText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 12,
    fontFamily: "Inter",
    color: "#666",
    textAlign: "left",
  },
  radioOptionHere1: {
    position: "absolute",
    marginTop: -9,
    top: "50%",
    left: 0,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#bdbdbd",
    textAlign: "left",
  },
  dividerView1: {
    position: "absolute",
    right: -0.5,
    bottom: -1.5,
    left: -0.5,
    borderStyle: "solid",
    borderColor: "#e8e8e8",
    borderTopWidth: 1,
    height: 1,
  },
  radioIcon1: {
    position: "absolute",
    top: 16,
    right: 0,
    width: 16,
    height: 16,
  },
  radioSelectedView: {
    position: "absolute",
    top: 25,
    left: 0,
    width: 343,
    height: 48,
  },
  radioSelectedView1: {
    position: "absolute",
    top: 702,
    left: 40,
    width: 343,
    height: 73,
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
  inputsText: {
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

export default Inputs2;
