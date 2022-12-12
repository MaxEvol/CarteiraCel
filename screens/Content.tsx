import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const Content = () => {
  return (
    <View style={styles.contentView}>
      <View style={styles.contentContentBlockSmallView1}>
        <Text style={styles.contentContentBlockSmallText}>
          Content/Content Block/Small
        </Text>
        <View style={styles.contentContentBlockSmallView}>
          <View style={styles.contentBlockView} />
          <Text style={styles.headerText}>Header</Text>
          <Text style={styles.mAgoText}>8m ago</Text>
          <Text style={styles.hellWantToUseYourYacht}>
            He'll want to use your yacht, and I don't want this thing smelling
            like fish.
          </Text>
          <View style={styles.dividerLineView} />
        </View>
      </View>
      <View style={styles.contentContentBlockSmallView2}>
        <Text style={styles.contentCommentText}>Content/Comment</Text>
        <View style={styles.contentCommentView}>
          <View style={styles.contentBlockView1} />
          <Text style={styles.firstLastText}>First Last</Text>
          <Text style={styles.mAgoText1}>8m ago</Text>
          <Text style={styles.hellWantToUseYourYacht1}>
            He'll want to use your yacht, and I don't want this thing smelling
            like fish.
          </Text>
          <View style={styles.dividerLineView1} />
        </View>
      </View>
      <View style={styles.contentSearchResultView1}>
        <Text style={styles.contentSearchResultText}>
          Content/Search Result
        </Text>
        <View style={styles.contentSearchResultView}>
          <Text style={styles.searchResultText}>Search result</Text>
          <View style={styles.dividerView} />
        </View>
      </View>
      <View style={styles.contentContentBlockLargeView1}>
        <Text style={styles.contentContentBlockLargeText}>
          Content/Content Block/Large
        </Text>
        <View style={styles.contentContentBlockLargeView}>
          <View style={styles.contentBlockView2} />
          <Text style={[styles.headerText1, styles.mt8]}>Header</Text>
          <View style={[styles.textTime, styles.mt8]}>
            <Text style={styles.hellWantToUseYourYacht2}>
              He'll want to use your yacht, and I don't want this thing smelling
              like fish.
            </Text>
            <Text style={[styles.mAgoText2, styles.mt8]}>8m ago</Text>
            <Image
              style={[styles.paginationIcon, styles.mt8]}
              resizeMode="cover"
              source={require("../assets/pagination.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.headerView}>
        <View style={styles.bGView} />
        <Text style={styles.contentText}>Content</Text>
        <Text style={styles.interfaceText}>Interface</Text>
      </View>
      <View style={styles.contentMarketBlockView1}>
        <View style={styles.contentMarketBlockView}>
          <View style={styles.rectangleView} />
          <Text style={styles.item1NameGoesHere}>
            <Text style={styles.item1Name}>Item #1 Name</Text>
            <Text style={styles.goesHereText}>Goes Here</Text>
          </Text>
          <Text style={styles.text}>$19.99</Text>
        </View>
        <Text style={styles.contentMarketBlockText1}>
          <Text style={styles.contentMarketBlockText}>
            Content/Market Block
          </Text>
        </Text>
      </View>
      <View style={styles.messageReceiveView1}>
        <View style={styles.messageReceiveView}>
          <Image
            style={styles.bGIcon}
            resizeMode="cover"
            source={require("../assets/bg.png")}
          />
          <Text
            style={styles.loremIpsumDolorSitAmetCo}
          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla quam eu faci lisis mollis. `}</Text>
        </View>
        <Text style={styles.messageReceiveText}>Message/Receive</Text>
      </View>
      <View style={styles.messageSendView1}>
        <View style={styles.messageSendView}>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
          <Text
            style={styles.loremIpsumDolorSitAmetCo1}
          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</Text>
        </View>
        <Text style={styles.messageSendText}>Message/Send</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt8: {
    marginTop: 8,
  },
  contentContentBlockSmallText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 12,
    fontFamily: "Inter",
    color: "#666",
    textAlign: "left",
  },
  contentBlockView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 8,
    backgroundColor: "#f6f6f6",
    width: 50,
    height: 50,
  },
  headerText: {
    position: "absolute",
    top: 0,
    left: 66,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  mAgoText: {
    position: "absolute",
    top: 2,
    right: 0,
    fontSize: 14,
    fontFamily: "Inter",
    color: "#bdbdbd",
    textAlign: "right",
  },
  hellWantToUseYourYacht: {
    position: "absolute",
    top: 27,
    left: 66,
    fontSize: 14,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
    width: 254,
  },
  dividerLineView: {
    position: "absolute",
    right: -0.5,
    bottom: -0.5,
    left: 65.5,
    borderStyle: "solid",
    borderColor: "#e8e8e8",
    borderTopWidth: 1,
    height: 1,
  },
  contentContentBlockSmallView: {
    position: "absolute",
    top: 23,
    left: 0,
    width: 328,
    height: 77,
  },
  contentContentBlockSmallView1: {
    position: "absolute",
    top: 168,
    left: 40,
    width: 328,
    height: 100,
  },
  contentCommentText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 12,
    fontFamily: "Inter",
    color: "#666",
    textAlign: "left",
  },
  contentBlockView1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 100,
    backgroundColor: "#f6f6f6",
    width: 32,
    height: 32,
  },
  firstLastText: {
    position: "absolute",
    top: 0,
    left: 50,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  mAgoText1: {
    position: "absolute",
    top: 2,
    right: 0,
    fontSize: 14,
    fontFamily: "Inter",
    color: "#bdbdbd",
    textAlign: "right",
  },
  hellWantToUseYourYacht1: {
    position: "absolute",
    top: 27,
    left: 50,
    fontSize: 14,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
    width: 254,
  },
  dividerLineView1: {
    position: "absolute",
    right: -0.5,
    bottom: -0.5,
    left: -0.5,
    borderStyle: "solid",
    borderColor: "#e8e8e8",
    borderTopWidth: 1,
    height: 1,
  },
  contentCommentView: {
    position: "absolute",
    top: 23,
    left: 0,
    width: 328,
    height: 77,
  },
  contentContentBlockSmallView2: {
    position: "absolute",
    top: 333,
    left: 415,
    width: 328,
    height: 100,
  },
  contentSearchResultText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 12,
    fontFamily: "Inter",
    color: "#666",
    textAlign: "left",
  },
  searchResultText: {
    position: "absolute",
    marginTop: -16.5,
    top: "50%",
    left: 0,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  dividerView: {
    position: "absolute",
    right: -0.5,
    bottom: -0.5,
    left: -0.5,
    borderStyle: "solid",
    borderColor: "#e8e8e8",
    borderTopWidth: 1,
    height: 1,
  },
  contentSearchResultView: {
    position: "absolute",
    top: 23,
    left: 0,
    width: 343,
    height: 33,
  },
  contentSearchResultView1: {
    position: "absolute",
    top: 449,
    left: 415,
    width: 343,
    height: 56,
  },
  contentContentBlockLargeText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 12,
    fontFamily: "Inter",
    color: "#666",
    textAlign: "left",
  },
  contentBlockView2: {
    alignSelf: "stretch",
    position: "relative",
    borderRadius: 8,
    backgroundColor: "#f6f6f6",
    height: 240,
    flexShrink: 0,
  },
  headerText1: {
    position: "relative",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  hellWantToUseYourYacht2: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 14,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  mAgoText2: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Inter",
    color: "#bdbdbd",
    textAlign: "right",
  },
  paginationIcon: {
    position: "relative",
    width: 40,
    height: 8,
    flexShrink: 0,
  },
  textTime: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  contentContentBlockLargeView: {
    position: "absolute",
    top: 23,
    left: 0,
    width: 343,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  contentContentBlockLargeView1: {
    position: "absolute",
    top: 284,
    left: 40,
    width: 343,
    height: 373,
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
  contentText: {
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
  rectangleView: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    borderRadius: 8,
    backgroundColor: "#f6f6f6",
    height: 110,
  },
  item1Name: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  goesHereText: {
    margin: 0,
  },
  item1NameGoesHere: {
    position: "absolute",
    top: 118,
    left: 0,
    fontSize: 14,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
    width: 110,
  },
  text: {
    position: "absolute",
    top: 160,
    left: 0,
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  contentMarketBlockView: {
    position: "absolute",
    top: 38,
    left: 0,
    width: 110,
    height: 177,
  },
  contentMarketBlockText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  contentMarketBlockText1: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 12,
    fontFamily: "Inter",
    color: "#666",
    textAlign: "left",
  },
  contentMarketBlockView1: {
    position: "absolute",
    top: 673,
    left: 40,
    width: 124,
    height: 215,
  },
  bGIcon: {
    position: "absolute",
    height: "101.23%",
    width: "100.43%",
    top: "-0.4%",
    right: "-0.21%",
    bottom: "-0.84%",
    left: "-0.21%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  loremIpsumDolorSitAmetCo: {
    position: "absolute",
    top: 15,
    left: 16,
    fontSize: 14,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
    width: 203,
    height: 72,
  },
  messageReceiveView: {
    position: "absolute",
    top: 23,
    left: 0,
    width: 235,
    height: 126,
  },
  messageReceiveText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 12,
    fontFamily: "Inter",
    color: "#666",
    textAlign: "left",
  },
  messageReceiveView1: {
    position: "absolute",
    top: 168,
    left: 415,
    width: 235,
    height: 149,
  },
  vectorIcon: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  loremIpsumDolorSitAmetCo1: {
    position: "absolute",
    top: 15,
    left: 16,
    fontSize: 14,
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
    width: 203,
  },
  messageSendView: {
    position: "absolute",
    top: 23,
    left: 0,
    width: 235,
    height: 86,
  },
  messageSendText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 12,
    fontFamily: "Inter",
    color: "#666",
    textAlign: "left",
  },
  messageSendView1: {
    position: "absolute",
    top: 168,
    left: 682,
    width: 235,
    height: 109,
  },
  contentView: {
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

export default Content;
