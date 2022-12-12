import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";

const Data = () => {
  return (
    <View style={styles.dataView}>
      <View style={styles.dataMobileGraphView1}>
        <Text style={styles.dataMobileGraphText}>Data/Mobile Graph</Text>
        <View style={styles.dataMobileGraphView}>
          <Image
            style={styles.backgroundIcon}
            resizeMode="cover"
            source={require("../assets/background.png")}
          />
          <View style={styles.barsView}>
            <View style={styles.barLineView}>
              <View style={styles.dataBarChartBackgroundView}>
                <Image
                  style={styles.backgroundIcon1}
                  resizeMode="cover"
                  source={require("../assets/background1.png")}
                />
                <Text style={styles.itemText}>Item</Text>
              </View>
              <View style={styles.dataBarChartFillView}>
                <View style={styles.backgroundView} />
              </View>
            </View>
            <View style={styles.barLineView1}>
              <View style={styles.dataBarChartBackgroundView1}>
                <Image
                  style={styles.backgroundIcon2}
                  resizeMode="cover"
                  source={require("../assets/background1.png")}
                />
                <Text style={styles.itemText1}>Item</Text>
              </View>
              <View style={styles.dataBarChartFillView1}>
                <View style={styles.backgroundView1} />
              </View>
            </View>
            <View style={styles.barLineView2}>
              <View style={styles.dataBarChartBackgroundView2}>
                <Image
                  style={styles.backgroundIcon3}
                  resizeMode="cover"
                  source={require("../assets/background1.png")}
                />
                <Text style={styles.itemText2}>Item</Text>
              </View>
              <View style={styles.dataBarChartFillView2}>
                <View style={styles.backgroundView2} />
              </View>
            </View>
            <View style={styles.barLineView3}>
              <View style={styles.dataBarChartBackgroundView3}>
                <Image
                  style={styles.backgroundIcon4}
                  resizeMode="cover"
                  source={require("../assets/background1.png")}
                />
                <Text style={styles.itemText3}>Item</Text>
              </View>
              <View style={styles.dataBarChartFillView3}>
                <View style={styles.backgroundView3} />
              </View>
            </View>
            <View style={styles.barLineView4}>
              <View style={styles.dataBarChartBackgroundView4}>
                <Image
                  style={styles.backgroundIcon5}
                  resizeMode="cover"
                  source={require("../assets/background1.png")}
                />
                <Text style={styles.itemText4}>Item</Text>
              </View>
              <View style={styles.dataBarChartFillView4}>
                <View style={styles.backgroundView4} />
              </View>
            </View>
            <View style={styles.barLineView5}>
              <View style={styles.dataBarChartBackgroundView5}>
                <Image
                  style={styles.backgroundIcon6}
                  resizeMode="cover"
                  source={require("../assets/background1.png")}
                />
                <Text style={styles.itemText5}>Item</Text>
              </View>
              <View style={styles.dataBarChartFillView5}>
                <View style={styles.backgroundView5} />
              </View>
            </View>
            <View style={styles.barLineView6}>
              <View style={styles.dataBarChartBackgroundView6}>
                <Image
                  style={styles.backgroundIcon7}
                  resizeMode="cover"
                  source={require("../assets/background1.png")}
                />
                <Text style={styles.itemText6}>Item</Text>
              </View>
              <View style={styles.dataBarChartFillView6}>
                <View style={styles.backgroundView6} />
              </View>
            </View>
            <View style={styles.barLineView7}>
              <View style={styles.dataBarChartBackgroundView7}>
                <Image
                  style={styles.backgroundIcon8}
                  resizeMode="cover"
                  source={require("../assets/background1.png")}
                />
                <Text style={styles.itemText7}>Item</Text>
              </View>
              <View style={styles.dataBarChartFillView7}>
                <View style={styles.backgroundView7} />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.dataBarChartFillView9}>
        <Text style={styles.dataBarChartFillText}>Data/Bar Chart/Fill</Text>
        <View style={styles.dataBarChartFillView8}>
          <View style={styles.backgroundView8} />
        </View>
      </View>
      <View style={styles.dataBarChartBackgroundView9}>
        <Text style={styles.dataBarChartFillText1}>Data/Bar Chart/Fill</Text>
        <View style={styles.dataBarChartBackgroundView8}>
          <Image
            style={styles.backgroundIcon9}
            resizeMode="cover"
            source={require("../assets/background9.png")}
          />
          <Text style={styles.groupText}>Group 1</Text>
        </View>
      </View>
      <View style={styles.headerView}>
        <View style={styles.bGView} />
        <Text style={styles.dataText}>Data</Text>
        <Text style={styles.interfaceText}>Interface</Text>
      </View>
      <View style={styles.contentSearchResultView}>
        <Text style={styles.dataGraphResultText}>Data/Graph Result</Text>
        <View style={styles.dataGraphResultView}>
          <Text style={styles.itemText8}>Item</Text>
          <Text style={styles.statisticText}>Statistic</Text>
          <View style={styles.dividerView} />
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/icon.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dataMobileGraphText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 12,
    fontFamily: "Inter",
    color: "#666",
    textAlign: "left",
  },
  backgroundIcon: {
    position: "absolute",
    height: "100.43%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "-0.43%",
    left: "0%",
    borderRadius: 20,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  backgroundIcon1: {
    position: "absolute",
    marginLeft: -1,
    top: 0,
    bottom: 43,
    left: "50%",
    borderRadius: 200,
    maxHeight: "100%",
    width: 16,
  },
  itemText: {
    position: "absolute",
    marginLeft: -7.79,
    bottom: 8.15,
    left: "50%",
    fontSize: 10,
    fontFamily: "Inter",
    color: "#666",
    textAlign: "right",
    transform: [
      {
        rotate: "-45deg",
      },
    ],
  },
  dataBarChartBackgroundView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 30,
    height: 202,
  },
  backgroundView: {
    position: "absolute",
    width: "100%",
    top: 0,
    right: "0%",
    bottom: 0,
    left: "0%",
    borderRadius: 8,
    backgroundColor: "#5db075",
  },
  dataBarChartFillView: {
    position: "absolute",
    top: 49,
    left: 14,
    width: 16,
    height: 117,
  },
  barLineView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 30,
    height: 202,
  },
  backgroundIcon2: {
    position: "absolute",
    marginLeft: -1,
    top: 0,
    bottom: 43,
    left: "50%",
    borderRadius: 200,
    maxHeight: "100%",
    width: 16,
  },
  itemText1: {
    position: "absolute",
    marginLeft: -7.79,
    bottom: 8.15,
    left: "50%",
    fontSize: 10,
    fontFamily: "Inter",
    color: "#666",
    textAlign: "right",
    transform: [
      {
        rotate: "-45deg",
      },
    ],
  },
  dataBarChartBackgroundView1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 30,
    height: 202,
  },
  backgroundView1: {
    position: "absolute",
    width: "100%",
    top: 0,
    right: "0%",
    bottom: 0,
    left: "0%",
    borderRadius: 8,
    backgroundColor: "#4b9460",
  },
  dataBarChartFillView1: {
    position: "absolute",
    top: 89,
    left: 14,
    width: 16,
    height: 77,
  },
  barLineView1: {
    position: "absolute",
    top: 0,
    left: 40,
    width: 30,
    height: 202,
  },
  backgroundIcon3: {
    position: "absolute",
    marginLeft: -1,
    top: 0,
    bottom: 43,
    left: "50%",
    borderRadius: 200,
    maxHeight: "100%",
    width: 16,
  },
  itemText2: {
    position: "absolute",
    marginLeft: -7.79,
    bottom: 8.15,
    left: "50%",
    fontSize: 10,
    fontFamily: "Inter",
    color: "#666",
    textAlign: "right",
    transform: [
      {
        rotate: "-45deg",
      },
    ],
  },
  dataBarChartBackgroundView2: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 30,
    height: 202,
  },
  backgroundView2: {
    position: "absolute",
    width: "100%",
    top: 0,
    right: "0%",
    bottom: 0,
    left: "0%",
    borderRadius: 8,
    backgroundColor: "#5db075",
  },
  dataBarChartFillView2: {
    position: "absolute",
    top: 49,
    left: 14,
    width: 16,
    height: 117,
  },
  barLineView2: {
    position: "absolute",
    top: 0,
    left: 80,
    width: 30,
    height: 202,
  },
  backgroundIcon4: {
    position: "absolute",
    marginLeft: -1,
    top: 0,
    bottom: 43,
    left: "50%",
    borderRadius: 200,
    maxHeight: "100%",
    width: 16,
  },
  itemText3: {
    position: "absolute",
    marginLeft: -7.79,
    bottom: 8.15,
    left: "50%",
    fontSize: 10,
    fontFamily: "Inter",
    color: "#666",
    textAlign: "right",
    transform: [
      {
        rotate: "-45deg",
      },
    ],
  },
  dataBarChartBackgroundView3: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 30,
    height: 202,
  },
  backgroundView3: {
    position: "absolute",
    width: "100%",
    top: 0,
    right: "0%",
    bottom: 0,
    left: "0%",
    borderRadius: 8,
    backgroundColor: "#4b9460",
  },
  dataBarChartFillView3: {
    position: "absolute",
    top: 89,
    left: 14,
    width: 16,
    height: 77,
  },
  barLineView3: {
    position: "absolute",
    top: 0,
    left: 120,
    width: 30,
    height: 202,
  },
  backgroundIcon5: {
    position: "absolute",
    marginLeft: -1,
    top: 0,
    bottom: 43,
    left: "50%",
    borderRadius: 200,
    maxHeight: "100%",
    width: 16,
  },
  itemText4: {
    position: "absolute",
    marginLeft: -7.79,
    bottom: 8.15,
    left: "50%",
    fontSize: 10,
    fontFamily: "Inter",
    color: "#666",
    textAlign: "right",
    transform: [
      {
        rotate: "-45deg",
      },
    ],
  },
  dataBarChartBackgroundView4: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 30,
    height: 202,
  },
  backgroundView4: {
    position: "absolute",
    width: "100%",
    top: 0,
    right: "0%",
    bottom: 0,
    left: "0%",
    borderRadius: 8,
    backgroundColor: "#5db075",
  },
  dataBarChartFillView4: {
    position: "absolute",
    top: 49,
    left: 14,
    width: 16,
    height: 117,
  },
  barLineView4: {
    position: "absolute",
    top: 0,
    left: 160,
    width: 30,
    height: 202,
  },
  backgroundIcon6: {
    position: "absolute",
    marginLeft: -1,
    top: 0,
    bottom: 43,
    left: "50%",
    borderRadius: 200,
    maxHeight: "100%",
    width: 16,
  },
  itemText5: {
    position: "absolute",
    marginLeft: -7.79,
    bottom: 8.15,
    left: "50%",
    fontSize: 10,
    fontFamily: "Inter",
    color: "#666",
    textAlign: "right",
    transform: [
      {
        rotate: "-45deg",
      },
    ],
  },
  dataBarChartBackgroundView5: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 30,
    height: 202,
  },
  backgroundView5: {
    position: "absolute",
    width: "100%",
    top: 0,
    right: "0%",
    bottom: 0,
    left: "0%",
    borderRadius: 8,
    backgroundColor: "#4b9460",
  },
  dataBarChartFillView5: {
    position: "absolute",
    top: 89,
    left: 14,
    width: 16,
    height: 77,
  },
  barLineView5: {
    position: "absolute",
    top: 0,
    left: 200,
    width: 30,
    height: 202,
  },
  backgroundIcon7: {
    position: "absolute",
    marginLeft: -1,
    top: 0,
    bottom: 43,
    left: "50%",
    borderRadius: 200,
    maxHeight: "100%",
    width: 16,
  },
  itemText6: {
    position: "absolute",
    marginLeft: -7.79,
    bottom: 8.15,
    left: "50%",
    fontSize: 10,
    fontFamily: "Inter",
    color: "#666",
    textAlign: "right",
    transform: [
      {
        rotate: "-45deg",
      },
    ],
  },
  dataBarChartBackgroundView6: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 30,
    height: 202,
  },
  backgroundView6: {
    position: "absolute",
    width: "100%",
    top: 0,
    right: "0%",
    bottom: 0,
    left: "0%",
    borderRadius: 8,
    backgroundColor: "#5db075",
  },
  dataBarChartFillView6: {
    position: "absolute",
    top: 49,
    left: 14,
    width: 16,
    height: 117,
  },
  barLineView6: {
    position: "absolute",
    top: 0,
    left: 240,
    width: 30,
    height: 202,
  },
  backgroundIcon8: {
    position: "absolute",
    marginLeft: -1,
    top: 0,
    bottom: 43,
    left: "50%",
    borderRadius: 200,
    maxHeight: "100%",
    width: 16,
  },
  itemText7: {
    position: "absolute",
    marginLeft: -7.79,
    bottom: 8.15,
    left: "50%",
    fontSize: 10,
    fontFamily: "Inter",
    color: "#666",
    textAlign: "right",
    transform: [
      {
        rotate: "-45deg",
      },
    ],
  },
  dataBarChartBackgroundView7: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 30,
    height: 202,
  },
  backgroundView7: {
    position: "absolute",
    width: "100%",
    top: 0,
    right: "0%",
    bottom: 0,
    left: "0%",
    borderRadius: 8,
    backgroundColor: "#4b9460",
  },
  dataBarChartFillView7: {
    position: "absolute",
    top: 89,
    left: 14,
    width: 16,
    height: 77,
  },
  barLineView7: {
    position: "absolute",
    top: 0,
    left: 280,
    width: 30,
    height: 202,
  },
  barsView: {
    position: "absolute",
    top: 16,
    left: 10,
    width: 310,
    height: 202,
  },
  dataMobileGraphView: {
    position: "absolute",
    top: 23,
    left: 0,
    width: 343,
    height: 231,
  },
  dataMobileGraphView1: {
    position: "absolute",
    top: 168,
    left: 40,
    width: 343,
    height: 254,
  },
  dataBarChartFillText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 12,
    fontFamily: "Inter",
    color: "#666",
    textAlign: "left",
  },
  backgroundView8: {
    position: "absolute",
    width: "100%",
    top: 0,
    right: "0%",
    bottom: 0,
    left: "0%",
    borderRadius: 100,
    backgroundColor: "#5db075",
  },
  dataBarChartFillView8: {
    position: "absolute",
    top: 23,
    left: 0,
    width: 16,
    height: 32,
  },
  dataBarChartFillView9: {
    position: "absolute",
    top: 438,
    left: 40,
    width: 105,
    height: 55,
  },
  dataBarChartFillText1: {
    position: "absolute",
    top: 0,
    left: 14,
    fontSize: 12,
    fontFamily: "Inter",
    color: "#666",
    textAlign: "left",
  },
  backgroundIcon9: {
    position: "absolute",
    marginLeft: -1,
    top: 0,
    bottom: 43,
    left: "50%",
    borderRadius: 200,
    maxHeight: "100%",
    width: 16,
  },
  groupText: {
    position: "absolute",
    marginLeft: -19.1,
    bottom: -3.16,
    left: "50%",
    fontSize: 10,
    fontFamily: "Inter",
    color: "#666",
    textAlign: "right",
    transform: [
      {
        rotate: "-45deg",
      },
    ],
  },
  dataBarChartBackgroundView8: {
    position: "absolute",
    top: 23,
    left: 0,
    width: 30,
    height: 243,
  },
  dataBarChartBackgroundView9: {
    position: "absolute",
    top: 438,
    left: 145,
    width: 119,
    height: 266,
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
  dataText: {
    position: "absolute",
    bottom: 32,
    left: 32,
    fontSize: 24,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  interfaceText: {
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
  dataGraphResultText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 12,
    fontFamily: "Inter",
    color: "#666",
    textAlign: "left",
  },
  itemText8: {
    position: "absolute",
    top: 0,
    left: 32,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  statisticText: {
    position: "absolute",
    top: 0,
    right: 0,
    fontSize: 14,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "right",
  },
  dividerView: {
    position: "absolute",
    top: 34.5,
    right: -0.5,
    left: -0.5,
    borderStyle: "solid",
    borderColor: "#e8e8e8",
    borderTopWidth: 1,
    height: 1,
  },
  icon: {
    position: "absolute",
    top: 2,
    left: 0,
    width: 16,
    height: 16,
  },
  dataGraphResultView: {
    position: "absolute",
    top: 23,
    left: 0,
    width: 343,
    height: 35,
  },
  contentSearchResultView: {
    position: "absolute",
    top: 168,
    left: 415,
    width: 343,
    height: 58,
  },
  dataView: {
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

export default Data;
