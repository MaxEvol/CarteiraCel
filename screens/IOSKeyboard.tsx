import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const IOSKeyboard = () => {
  return (
    <View style={styles.iOSKeyboardView}>
      <View style={styles.iOSKeyboardLightAlphabeticView1}>
        <Text style={styles.iOSKeyboardLightAlphabeticText}>
          iOS/Keyboard/Light/Alphabetic
        </Text>
        <View style={styles.iOSKeyboardLightAlphabeticView}>
          <View style={styles.backgroundView1}>
            <View style={styles.backgroundView} />
          </View>
          <View style={styles.homeIndicatorView1}>
            <View style={styles.homeIndicatorView} />
          </View>
          <View style={styles.keysView}>
            <Image
              style={styles.dictationIcon}
              resizeMode="cover"
              source={require("../assets/dictation.png")}
            />
            <Image
              style={styles.emojiIcon}
              resizeMode="cover"
              source={require("../assets/emoji.png")}
            />
            <View style={styles.returnView}>
              <Image
                style={styles.rectangleIcon}
                resizeMode="cover"
                source={require("../assets/rectangle.png")}
              />
              <Text style={styles.labelText}>Go</Text>
            </View>
            <View style={styles.spaceView}>
              <Image
                style={styles.rectangleIcon1}
                resizeMode="cover"
                source={require("../assets/rectangle1.png")}
              />
              <Text style={styles.labelText1}>space</Text>
            </View>
            <View style={styles.view}>
              <Image
                style={styles.rectangleIcon2}
                resizeMode="cover"
                source={require("../assets/rectangle2.png")}
              />
              <Text style={styles.labelText2}>123</Text>
            </View>
            <View style={styles.deleteView}>
              <View style={styles.keyLightView}>
                <Image
                  style={styles.rectangleIcon3}
                  resizeMode="cover"
                  source={require("../assets/rectangle3.png")}
                />
                <Text style={styles.labelText3}>{` `}</Text>
              </View>
              <Image
                style={styles.deleteButtonIcon}
                resizeMode="cover"
                source={require("../assets/delete-button.png")}
              />
            </View>
            <View style={styles.shiftView}>
              <View style={styles.keyLightView1}>
                <View style={styles.rectangleView} />
                <Text style={styles.symbolText}>{` `}</Text>
              </View>
              <Image
                style={styles.shiftIcon}
                resizeMode="cover"
                source={require("../assets/shift.png")}
              />
            </View>
            <View style={styles.mView}>
              <View style={styles.rectangleView1} />
              <Text style={styles.symbolText1}>M</Text>
            </View>
            <View style={styles.nView}>
              <View style={styles.rectangleView2} />
              <Text style={styles.symbolText2}>N</Text>
            </View>
            <View style={styles.bView}>
              <View style={styles.rectangleView3} />
              <Text style={styles.symbolText3}>B</Text>
            </View>
            <View style={styles.vView}>
              <View style={styles.rectangleView4} />
              <Text style={styles.symbolText4}>V</Text>
            </View>
            <View style={styles.cView}>
              <View style={styles.rectangleView5} />
              <Text style={styles.symbolText5}>C</Text>
            </View>
            <View style={styles.xView}>
              <View style={styles.rectangleView6} />
              <Text style={styles.symbolText6}>X</Text>
            </View>
            <View style={styles.zView}>
              <View style={styles.rectangleView7} />
              <Text style={styles.symbolText7}>Z</Text>
            </View>
            <View style={styles.lView}>
              <View style={styles.rectangleView8} />
              <Text style={styles.symbolText8}>L</Text>
            </View>
            <View style={styles.kView}>
              <View style={styles.rectangleView9} />
              <Text style={styles.symbolText9}>K</Text>
            </View>
            <View style={styles.jView}>
              <View style={styles.rectangleView10} />
              <Text style={styles.symbolText10}>J</Text>
            </View>
            <View style={styles.hView}>
              <View style={styles.rectangleView11} />
              <Text style={styles.symbolText11}>H</Text>
            </View>
            <View style={styles.gView}>
              <View style={styles.rectangleView12} />
              <Text style={styles.symbolText12}>G</Text>
            </View>
            <View style={styles.fView}>
              <View style={styles.rectangleView13} />
              <Text style={styles.symbolText13}>F</Text>
            </View>
            <View style={styles.dView}>
              <View style={styles.rectangleView14} />
              <Text style={styles.symbolText14}>D</Text>
            </View>
            <View style={styles.sView}>
              <View style={styles.rectangleView15} />
              <Text style={styles.symbolText15}>S</Text>
            </View>
            <View style={styles.aView}>
              <View style={styles.rectangleView16} />
              <Text style={styles.symbolText16}>A</Text>
            </View>
            <View style={styles.pView}>
              <View style={styles.rectangleView17} />
              <Text style={styles.symbolText17}>P</Text>
            </View>
            <View style={styles.oView}>
              <View style={styles.rectangleView18} />
              <Text style={styles.symbolText18}>O</Text>
            </View>
            <View style={styles.iView}>
              <View style={styles.rectangleView19} />
              <Text style={styles.symbolText19}>I</Text>
            </View>
            <View style={styles.uView}>
              <View style={styles.rectangleView20} />
              <Text style={styles.symbolText20}>U</Text>
            </View>
            <View style={styles.yView}>
              <View style={styles.rectangleView21} />
              <Text style={styles.symbolText21}>Y</Text>
            </View>
            <View style={styles.tView}>
              <View style={styles.rectangleView22} />
              <Text style={styles.symbolText22}>T</Text>
            </View>
            <View style={styles.rView}>
              <View style={styles.rectangleView23} />
              <Text style={styles.symbolText23}>R</Text>
            </View>
            <View style={styles.eView}>
              <View style={styles.rectangleView24} />
              <Text style={styles.symbolText24}>E</Text>
            </View>
            <View style={styles.wView}>
              <View style={styles.rectangleView25} />
              <Text style={styles.symbolText25}>W</Text>
            </View>
            <View style={styles.qView}>
              <View style={styles.rectangleView26} />
              <Text style={styles.symbolText26}>Q</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.iOSKeyboardLightNumericView1}>
        <Text style={styles.iOSKeyboardLightAlphabeticText1}>
          iOS/Keyboard/Light/Alphabetic
        </Text>
        <View style={styles.iOSKeyboardLightNumericView}>
          <View style={styles.backgroundView3}>
            <View style={styles.backgroundView2} />
          </View>
          <View style={styles.homeIndicatorView3}>
            <View style={styles.homeIndicatorView2} />
          </View>
          <View style={styles.keysView1}>
            <Image
              style={styles.deleteIcon}
              resizeMode="cover"
              source={require("../assets/delete.png")}
            />
            <View style={styles.view1}>
              <Image
                style={styles.keyBackgroundIcon}
                resizeMode="cover"
                source={require("../assets/key-background.png")}
              />
              <Text style={styles.numberText}>0</Text>
            </View>
            <View style={styles.view2}>
              <Image
                style={styles.keyBackgroundIcon1}
                resizeMode="cover"
                source={require("../assets/key-background1.png")}
              />
              <Text style={styles.labelText4}>WXYZ</Text>
              <Text style={styles.numberText1}>9</Text>
            </View>
            <View style={styles.view3}>
              <Image
                style={styles.keyBackgroundIcon2}
                resizeMode="cover"
                source={require("../assets/key-background1.png")}
              />
              <Text style={styles.labelText5}>TUV</Text>
              <Text style={styles.numberText2}>8</Text>
            </View>
            <View style={styles.view4}>
              <Image
                style={styles.keyBackgroundIcon3}
                resizeMode="cover"
                source={require("../assets/key-background1.png")}
              />
              <Text style={styles.labelText6}>PQRS</Text>
              <Text style={styles.numberText3}>7</Text>
            </View>
            <View style={styles.view5}>
              <Image
                style={styles.keyBackgroundIcon4}
                resizeMode="cover"
                source={require("../assets/key-background1.png")}
              />
              <Text style={styles.labelText7}>MNO</Text>
              <Text style={styles.numberText4}>6</Text>
            </View>
            <View style={styles.view6}>
              <Image
                style={styles.keyBackgroundIcon5}
                resizeMode="cover"
                source={require("../assets/key-background1.png")}
              />
              <Text style={styles.labelText8}>JKL</Text>
              <Text style={styles.numberText5}>5</Text>
            </View>
            <View style={styles.view7}>
              <Image
                style={styles.keyBackgroundIcon6}
                resizeMode="cover"
                source={require("../assets/key-background1.png")}
              />
              <Text style={styles.labelText9}>GHI</Text>
              <Text style={styles.numberText6}>4</Text>
            </View>
            <View style={styles.view8}>
              <Image
                style={styles.keyBackgroundIcon7}
                resizeMode="cover"
                source={require("../assets/key-background.png")}
              />
              <Text style={styles.labelText10}>DEF</Text>
              <Text style={styles.numberText7}>3</Text>
            </View>
            <View style={styles.view9}>
              <Image
                style={styles.keyBackgroundIcon8}
                resizeMode="cover"
                source={require("../assets/key-background.png")}
              />
              <Text style={styles.labelText11}>ABC</Text>
              <Text style={styles.numberText8}>2</Text>
            </View>
            <View style={styles.view10}>
              <Image
                style={styles.keyBackgroundIcon9}
                resizeMode="cover"
                source={require("../assets/key-background.png")}
              />
              <Text style={styles.labelText12}>{` `}</Text>
              <Text style={styles.numberText9}>1</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.iOSKeyboardLightAlphabeticView2}>
        <Text style={styles.iOSKeyboardLightAlphabeticText2}>
          iOS/Keyboard/Light/Alphabetic
        </Text>
        <Image
          style={styles.iOSKeyboardLightDictationIcon}
          resizeMode="cover"
          source={require("../assets/ioskeyboardlightdictation.png")}
        />
      </View>
      <View style={styles.iOSKeyboardLightAlphabeticView3}>
        <Text style={styles.iOSKeyboardLightAlphabeticText3}>
          iOS/Keyboard/Light/Alphabetic
        </Text>
        <View style={styles.iOSKeyboardLightEmojiView}>
          <View style={styles.backgroundView5}>
            <View style={styles.backgroundView4} />
          </View>
          <View style={styles.homeIndicatorView5}>
            <View style={styles.homeIndicatorView4} />
          </View>
          <Image
            style={styles.dictationIcon1}
            resizeMode="cover"
            source={require("../assets/dictation1.png")}
          />
          <Image
            style={styles.globeIcon}
            resizeMode="cover"
            source={require("../assets/globe.png")}
          />
          <Image
            style={styles.categoriesIcon}
            resizeMode="cover"
            source={require("../assets/categories.png")}
          />
          <View style={styles.keyboardEmojisView}>
            <Image
              style={styles.grinningFaceIcon}
              resizeMode="cover"
              source={require("../assets/grinning-face.png")}
            />
            <Image
              style={styles.bitmapIcon}
              resizeMode="cover"
              source={require("../assets/bitmap.png")}
            />
            <Image
              style={styles.bitmapIcon1}
              resizeMode="cover"
              source={require("../assets/bitmap1.png")}
            />
            <Image
              style={styles.bitmapIcon2}
              resizeMode="cover"
              source={require("../assets/bitmap2.png")}
            />
            <Image
              style={styles.bitmapIcon3}
              resizeMode="cover"
              source={require("../assets/bitmap3.png")}
            />
            <Image
              style={styles.bitmapIcon4}
              resizeMode="cover"
              source={require("../assets/bitmap4.png")}
            />
            <Image
              style={styles.bitmapIcon5}
              resizeMode="cover"
              source={require("../assets/bitmap5.png")}
            />
            <Image
              style={styles.bitmapIcon6}
              resizeMode="cover"
              source={require("../assets/bitmap6.png")}
            />
            <Image
              style={styles.bitmapIcon7}
              resizeMode="cover"
              source={require("../assets/bitmap7.png")}
            />
            <Image
              style={styles.bitmapIcon8}
              resizeMode="cover"
              source={require("../assets/bitmap8.png")}
            />
            <Image
              style={styles.bitmapIcon9}
              resizeMode="cover"
              source={require("../assets/bitmap9.png")}
            />
            <Image
              style={styles.bitmapIcon10}
              resizeMode="cover"
              source={require("../assets/bitmap10.png")}
            />
            <Image
              style={styles.bitmapIcon11}
              resizeMode="cover"
              source={require("../assets/bitmap11.png")}
            />
            <Image
              style={styles.bitmapIcon12}
              resizeMode="cover"
              source={require("../assets/bitmap12.png")}
            />
            <Image
              style={styles.bitmapIcon13}
              resizeMode="cover"
              source={require("../assets/bitmap13.png")}
            />
            <Image
              style={styles.bitmapIcon14}
              resizeMode="cover"
              source={require("../assets/bitmap14.png")}
            />
            <Image
              style={styles.bitmapIcon15}
              resizeMode="cover"
              source={require("../assets/bitmap15.png")}
            />
            <Image
              style={styles.bitmapIcon16}
              resizeMode="cover"
              source={require("../assets/bitmap16.png")}
            />
            <Image
              style={styles.bitmapIcon17}
              resizeMode="cover"
              source={require("../assets/bitmap17.png")}
            />
            <Image
              style={styles.bitmapIcon18}
              resizeMode="cover"
              source={require("../assets/bitmap18.png")}
            />
            <Image
              style={styles.bitmapIcon19}
              resizeMode="cover"
              source={require("../assets/bitmap19.png")}
            />
            <Image
              style={styles.bitmapIcon20}
              resizeMode="cover"
              source={require("../assets/bitmap20.png")}
            />
            <Image
              style={styles.bitmapIcon21}
              resizeMode="cover"
              source={require("../assets/bitmap21.png")}
            />
            <Image
              style={styles.bitmapIcon22}
              resizeMode="cover"
              source={require("../assets/bitmap22.png")}
            />
            <Image
              style={styles.bitmapIcon23}
              resizeMode="cover"
              source={require("../assets/bitmap23.png")}
            />
            <Image
              style={styles.bitmapIcon24}
              resizeMode="cover"
              source={require("../assets/bitmap24.png")}
            />
            <Image
              style={styles.bitmapIcon25}
              resizeMode="cover"
              source={require("../assets/bitmap25.png")}
            />
            <Image
              style={styles.bitmapIcon26}
              resizeMode="cover"
              source={require("../assets/bitmap26.png")}
            />
            <Image
              style={styles.bitmapIcon27}
              resizeMode="cover"
              source={require("../assets/bitmap27.png")}
            />
            <Image
              style={styles.bitmapIcon28}
              resizeMode="cover"
              source={require("../assets/bitmap28.png")}
            />
            <Image
              style={styles.bitmapIcon29}
              resizeMode="cover"
              source={require("../assets/bitmap29.png")}
            />
            <Image
              style={styles.bitmapIcon30}
              resizeMode="cover"
              source={require("../assets/bitmap30.png")}
            />
            <Image
              style={styles.bitmapIcon31}
              resizeMode="cover"
              source={require("../assets/bitmap31.png")}
            />
            <Image
              style={styles.bitmapIcon32}
              resizeMode="cover"
              source={require("../assets/bitmap32.png")}
            />
            <Image
              style={styles.bitmapIcon33}
              resizeMode="cover"
              source={require("../assets/bitmap33.png")}
            />
            <Image
              style={styles.bitmapIcon34}
              resizeMode="cover"
              source={require("../assets/bitmap34.png")}
            />
            <Image
              style={styles.bitmapIcon35}
              resizeMode="cover"
              source={require("../assets/bitmap35.png")}
            />
            <Image
              style={styles.bitmapIcon36}
              resizeMode="cover"
              source={require("../assets/bitmap36.png")}
            />
            <Image
              style={styles.bitmapIcon37}
              resizeMode="cover"
              source={require("../assets/bitmap37.png")}
            />
            <Image
              style={styles.bitmapIcon38}
              resizeMode="cover"
              source={require("../assets/bitmap38.png")}
            />
          </View>
          <Text style={styles.categoryText}>{`Smileys & People`}</Text>
        </View>
      </View>
      <View style={styles.headerView}>
        <View style={styles.bGView} />
        <Text style={styles.keyboardText}>Keyboard</Text>
        <Text style={styles.iOSText}>iOS</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iOSKeyboardLightAlphabeticText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 12,
    fontFamily: "Inter",
    color: "#666",
    textAlign: "left",
  },
  backgroundView: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: "#d1d5db",
  },
  backgroundView1: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  homeIndicatorView: {
    position: "absolute",
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: 100,
    backgroundColor: "#000",
    width: 134,
    height: 5,
  },
  homeIndicatorView1: {
    position: "absolute",
    height: "11.68%",
    width: "100%",
    top: "88.32%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  dictationIcon: {
    position: "relative",
    width: 15,
    height: 25,
  },
  emojiIcon: {
    position: "relative",
    width: 27,
    height: 27,
  },
  rectangleIcon: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: -1,
    left: 0,
    borderRadius: 4.6,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  labelText: {
    position: "absolute",
    top: "26.19%",
    left: 0,
    fontSize: 16,
    letterSpacing: -0.32,
    lineHeight: 21,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
    width: 88,
  },
  returnView: {
    position: "absolute",
    height: "16.22%",
    width: "23.85%",
    top: "62.55%",
    right: "0%",
    bottom: "21.24%",
    left: "76.15%",
  },
  rectangleIcon1: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: -1,
    left: 0,
    borderRadius: 4.6,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  labelText1: {
    position: "absolute",
    top: "26.19%",
    left: 0,
    fontSize: 16,
    letterSpacing: -0.32,
    lineHeight: 21,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
    width: 182,
  },
  spaceView: {
    position: "absolute",
    height: "16.22%",
    width: "49.32%",
    top: "62.55%",
    right: "25.47%",
    bottom: "21.24%",
    left: "25.2%",
  },
  rectangleIcon2: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: -1,
    left: 0,
    borderRadius: 4.6,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  labelText2: {
    position: "absolute",
    top: "26.19%",
    left: 0,
    fontSize: 16,
    letterSpacing: -0.32,
    lineHeight: 21,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
    width: 87,
  },
  view: {
    position: "absolute",
    height: "16.22%",
    width: "23.58%",
    top: "62.55%",
    right: "76.42%",
    bottom: "21.24%",
    left: "0%",
  },
  rectangleIcon3: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: -1,
    left: 0,
    borderRadius: 4.6,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  labelText3: {
    position: "absolute",
    top: "26.19%",
    left: 0,
    fontSize: 16,
    letterSpacing: -0.32,
    lineHeight: 21,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
    width: 42,
  },
  keyLightView: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  deleteButtonIcon: {
    position: "relative",
    width: 22.66,
    height: 16.99,
  },
  deleteView: {
    position: "absolute",
    height: "16.22%",
    width: "11.38%",
    top: "41.7%",
    right: "0%",
    bottom: "42.08%",
    left: "88.62%",
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText: {
    position: "absolute",
    marginTop: -13,
    top: "50%",
    left: "48.07%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  keyLightView1: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  shiftIcon: {
    position: "absolute",
    height: "39.18%",
    width: "44.95%",
    top: "29.05%",
    right: "27.29%",
    bottom: "31.77%",
    left: "27.76%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  shiftView: {
    position: "absolute",
    height: "16.22%",
    width: "11.38%",
    top: "41.7%",
    right: "88.62%",
    bottom: "42.08%",
    left: "0%",
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText1: {
    position: "absolute",
    marginTop: -13,
    top: "50%",
    left: "18.75%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  mView: {
    position: "absolute",
    height: "16.22%",
    width: "8.67%",
    top: "41.7%",
    right: "14.91%",
    bottom: "42.08%",
    left: "76.42%",
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText2: {
    position: "absolute",
    marginTop: -13,
    top: "50%",
    left: "25%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  nView: {
    position: "absolute",
    height: "16.22%",
    width: "8.67%",
    top: "41.7%",
    right: "25.2%",
    bottom: "42.08%",
    left: "66.12%",
  },
  rectangleView3: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText3: {
    position: "absolute",
    marginTop: -13,
    top: "50%",
    left: "28.13%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  bView: {
    position: "absolute",
    height: "16.22%",
    width: "8.67%",
    top: "41.7%",
    right: "35.5%",
    bottom: "42.08%",
    left: "55.83%",
  },
  rectangleView4: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText4: {
    position: "absolute",
    marginTop: -13,
    top: "50%",
    left: "25%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  vView: {
    position: "absolute",
    height: "16.22%",
    width: "8.67%",
    top: "41.7%",
    right: "45.53%",
    bottom: "42.08%",
    left: "45.8%",
  },
  rectangleView5: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText5: {
    position: "absolute",
    marginTop: -13,
    top: "50%",
    left: "25%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  cView: {
    position: "absolute",
    height: "16.22%",
    width: "8.67%",
    top: "41.7%",
    right: "55.83%",
    bottom: "42.08%",
    left: "35.5%",
  },
  rectangleView6: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText6: {
    position: "absolute",
    marginTop: -13,
    top: "50%",
    left: "25%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  xView: {
    position: "absolute",
    height: "16.22%",
    width: "8.67%",
    top: "41.7%",
    right: "65.85%",
    bottom: "42.08%",
    left: "25.47%",
  },
  rectangleView7: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText7: {
    position: "absolute",
    marginTop: -13,
    top: "50%",
    left: "28.13%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  zView: {
    position: "absolute",
    height: "16.22%",
    width: "8.67%",
    top: "41.7%",
    right: "76.15%",
    bottom: "42.08%",
    left: "15.18%",
  },
  rectangleView8: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText8: {
    position: "absolute",
    marginTop: -13,
    top: "50%",
    left: "31.25%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  lView: {
    position: "absolute",
    height: "16.22%",
    width: "8.67%",
    top: "20.85%",
    right: "4.88%",
    bottom: "62.93%",
    left: "86.45%",
  },
  rectangleView9: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText9: {
    position: "absolute",
    marginTop: -13,
    top: "50%",
    left: "28.13%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  kView: {
    position: "absolute",
    height: "16.22%",
    width: "8.67%",
    top: "20.85%",
    right: "15.18%",
    bottom: "62.93%",
    left: "76.15%",
  },
  rectangleView10: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText10: {
    position: "absolute",
    marginTop: -13,
    top: "50%",
    left: "31.25%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  jView: {
    position: "absolute",
    height: "16.22%",
    width: "8.67%",
    top: "20.85%",
    right: "25.2%",
    bottom: "62.93%",
    left: "66.12%",
  },
  rectangleView11: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText11: {
    position: "absolute",
    marginTop: -13,
    top: "50%",
    left: "25%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  hView: {
    position: "absolute",
    height: "16.22%",
    width: "8.67%",
    top: "20.85%",
    right: "35.5%",
    bottom: "62.93%",
    left: "55.83%",
  },
  rectangleView12: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText12: {
    position: "absolute",
    marginTop: -13,
    top: "50%",
    left: "25%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  gView: {
    position: "absolute",
    height: "16.22%",
    width: "8.67%",
    top: "20.85%",
    right: "45.53%",
    bottom: "62.93%",
    left: "45.8%",
  },
  rectangleView13: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText13: {
    position: "absolute",
    marginTop: -13,
    top: "50%",
    left: "31.25%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  fView: {
    position: "absolute",
    height: "16.22%",
    width: "8.67%",
    top: "20.85%",
    right: "55.83%",
    bottom: "62.93%",
    left: "35.5%",
  },
  rectangleView14: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText14: {
    position: "absolute",
    marginTop: -13,
    top: "50%",
    left: "25%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  dView: {
    position: "absolute",
    height: "16.22%",
    width: "8.67%",
    top: "20.85%",
    right: "65.85%",
    bottom: "62.93%",
    left: "25.47%",
  },
  rectangleView15: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText15: {
    position: "absolute",
    marginTop: -13,
    top: "50%",
    left: "28.13%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  sView: {
    position: "absolute",
    height: "16.22%",
    width: "8.67%",
    top: "20.85%",
    right: "76.15%",
    bottom: "62.93%",
    left: "15.18%",
  },
  rectangleView16: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText16: {
    position: "absolute",
    marginTop: -13,
    top: "50%",
    left: "25%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  aView: {
    position: "absolute",
    height: "16.22%",
    width: "8.67%",
    top: "20.85%",
    right: "86.18%",
    bottom: "62.93%",
    left: "5.15%",
  },
  rectangleView17: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText17: {
    position: "absolute",
    marginTop: -13,
    top: "50%",
    left: "28.13%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  pView: {
    position: "absolute",
    height: "16.22%",
    width: "8.67%",
    top: "0%",
    right: "0%",
    bottom: "83.78%",
    left: "91.33%",
  },
  rectangleView18: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText18: {
    position: "absolute",
    marginTop: -13,
    top: "50%",
    left: "21.88%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  oView: {
    position: "absolute",
    height: "16.22%",
    width: "8.67%",
    top: "0%",
    right: "10.03%",
    bottom: "83.78%",
    left: "81.3%",
  },
  rectangleView19: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText19: {
    position: "absolute",
    marginTop: -13,
    top: "50%",
    left: "40.63%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  iView: {
    position: "absolute",
    height: "16.22%",
    width: "8.67%",
    top: "0%",
    right: "20.33%",
    bottom: "83.78%",
    left: "71%",
  },
  rectangleView20: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText20: {
    position: "absolute",
    marginTop: -13,
    top: "50%",
    left: "25%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  uView: {
    position: "absolute",
    height: "16.22%",
    width: "8.67%",
    top: "0%",
    right: "30.35%",
    bottom: "83.78%",
    left: "60.98%",
  },
  rectangleView21: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText21: {
    position: "absolute",
    marginTop: -13,
    top: "50%",
    left: "28.13%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  yView: {
    position: "absolute",
    height: "16.22%",
    width: "8.67%",
    top: "0%",
    right: "40.65%",
    bottom: "83.78%",
    left: "50.68%",
  },
  rectangleView22: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText22: {
    position: "absolute",
    marginTop: -13,
    top: "50%",
    left: "28.13%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  tView: {
    position: "absolute",
    height: "16.22%",
    width: "8.67%",
    top: "0%",
    right: "50.68%",
    bottom: "83.78%",
    left: "40.65%",
  },
  rectangleView23: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText23: {
    position: "absolute",
    marginTop: -13,
    top: "50%",
    left: "28.13%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  rView: {
    position: "absolute",
    height: "16.22%",
    width: "8.67%",
    top: "0%",
    right: "60.98%",
    bottom: "83.78%",
    left: "30.35%",
  },
  rectangleView24: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText24: {
    position: "absolute",
    marginTop: -13,
    top: "50%",
    left: "28.13%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  eView: {
    position: "absolute",
    height: "16.22%",
    width: "8.67%",
    top: "0%",
    right: "71%",
    bottom: "83.78%",
    left: "20.33%",
  },
  rectangleView25: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText25: {
    position: "absolute",
    marginTop: -13,
    top: "50%",
    left: "15.63%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  wView: {
    position: "absolute",
    height: "16.22%",
    width: "8.67%",
    top: "0%",
    right: "81.3%",
    bottom: "83.78%",
    left: "10.03%",
  },
  rectangleView26: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText26: {
    position: "absolute",
    marginTop: -13,
    top: "50%",
    left: "21.88%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  qView: {
    position: "absolute",
    height: "16.22%",
    width: "8.67%",
    top: "0%",
    right: "91.33%",
    bottom: "83.78%",
    left: "0%",
  },
  keysView: {
    position: "absolute",
    height: "89%",
    width: "98.4%",
    top: "2.75%",
    right: "0.8%",
    bottom: "8.25%",
    left: "0.8%",
  },
  iOSKeyboardLightAlphabeticView: {
    position: "absolute",
    top: 23,
    left: 0,
    backgroundColor: "#ccced3",
    width: 375,
    height: 291,
  },
  iOSKeyboardLightAlphabeticView1: {
    position: "absolute",
    top: 168,
    left: 40,
    width: 375,
    height: 314,
  },
  iOSKeyboardLightAlphabeticText1: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 12,
    fontFamily: "Inter",
    color: "#666",
    textAlign: "left",
  },
  backgroundView2: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: "#d1d5db",
  },
  backgroundView3: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  homeIndicatorView2: {
    position: "absolute",
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: 100,
    backgroundColor: "#000",
    width: 134,
    height: 5,
  },
  homeIndicatorView3: {
    position: "absolute",
    height: "11.68%",
    width: "100%",
    top: "88.32%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  deleteIcon: {
    position: "relative",
    width: 24,
    height: 17.99,
  },
  keyBackgroundIcon: {
    position: "absolute",
    height: "102.17%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "-2.17%",
    left: "0%",
    borderRadius: 5,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  numberText: {
    position: "absolute",
    top: "15.22%",
    left: 0,
    fontSize: 25,
    letterSpacing: 0.29,
    fontFamily: "SF Pro Display",
    color: "#000",
    textAlign: "center",
    width: 117,
  },
  view1: {
    position: "absolute",
    height: "22.22%",
    width: "32.23%",
    top: "77.78%",
    right: "33.88%",
    bottom: "0%",
    left: "33.88%",
  },
  keyBackgroundIcon1: {
    position: "absolute",
    height: "102.13%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "-2.13%",
    left: "0%",
    borderRadius: 5,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  labelText4: {
    position: "absolute",
    top: "63.04%",
    left: 0,
    fontSize: 10,
    letterSpacing: 2,
    fontWeight: "700",
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
    width: 117,
  },
  numberText1: {
    position: "absolute",
    top: "2.17%",
    left: 0,
    fontSize: 25,
    letterSpacing: 0.29,
    fontFamily: "SF Pro Display",
    color: "#000",
    textAlign: "center",
    width: 117,
  },
  view2: {
    position: "absolute",
    height: "22.71%",
    width: "32.23%",
    top: "51.69%",
    right: "0%",
    bottom: "25.6%",
    left: "67.77%",
  },
  keyBackgroundIcon2: {
    position: "absolute",
    height: "102.13%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "-2.13%",
    left: "0%",
    borderRadius: 5,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  labelText5: {
    position: "absolute",
    top: "63.04%",
    left: 0,
    fontSize: 10,
    letterSpacing: 2,
    fontWeight: "700",
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
    width: 117,
  },
  numberText2: {
    position: "absolute",
    top: "2.17%",
    left: 0,
    fontSize: 25,
    letterSpacing: 0.29,
    fontFamily: "SF Pro Display",
    color: "#000",
    textAlign: "center",
    width: 117,
  },
  view3: {
    position: "absolute",
    height: "22.71%",
    width: "32.23%",
    top: "51.69%",
    right: "33.88%",
    bottom: "25.6%",
    left: "33.88%",
  },
  keyBackgroundIcon3: {
    position: "absolute",
    height: "102.13%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "-2.13%",
    left: "0%",
    borderRadius: 5,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  labelText6: {
    position: "absolute",
    top: "63.04%",
    left: 0,
    fontSize: 10,
    letterSpacing: 2,
    fontWeight: "700",
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
    width: 117,
  },
  numberText3: {
    position: "absolute",
    top: "2.17%",
    left: 0,
    fontSize: 25,
    letterSpacing: 0.29,
    fontFamily: "SF Pro Display",
    color: "#000",
    textAlign: "center",
    width: 117,
  },
  view4: {
    position: "absolute",
    height: "22.71%",
    width: "32.23%",
    top: "51.69%",
    right: "67.77%",
    bottom: "25.6%",
    left: "0%",
  },
  keyBackgroundIcon4: {
    position: "absolute",
    height: "102.13%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "-2.13%",
    left: "0%",
    borderRadius: 5,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  labelText7: {
    position: "absolute",
    top: "63.04%",
    left: 0,
    fontSize: 10,
    letterSpacing: 2,
    fontWeight: "700",
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
    width: 117,
  },
  numberText4: {
    position: "absolute",
    top: "2.17%",
    left: 0,
    fontSize: 25,
    letterSpacing: 0.29,
    fontFamily: "SF Pro Display",
    color: "#000",
    textAlign: "center",
    width: 117,
  },
  view5: {
    position: "absolute",
    height: "22.71%",
    width: "32.23%",
    top: "25.6%",
    right: "0%",
    bottom: "51.69%",
    left: "67.77%",
  },
  keyBackgroundIcon5: {
    position: "absolute",
    height: "102.13%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "-2.13%",
    left: "0%",
    borderRadius: 5,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  labelText8: {
    position: "absolute",
    top: "63.04%",
    left: 0,
    fontSize: 10,
    letterSpacing: 2,
    fontWeight: "700",
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
    width: 117,
  },
  numberText5: {
    position: "absolute",
    top: "2.17%",
    left: 0,
    fontSize: 25,
    letterSpacing: 0.29,
    fontFamily: "SF Pro Display",
    color: "#000",
    textAlign: "center",
    width: 117,
  },
  view6: {
    position: "absolute",
    height: "22.71%",
    width: "32.23%",
    top: "25.6%",
    right: "33.88%",
    bottom: "51.69%",
    left: "33.88%",
  },
  keyBackgroundIcon6: {
    position: "absolute",
    height: "102.13%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "-2.13%",
    left: "0%",
    borderRadius: 5,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  labelText9: {
    position: "absolute",
    top: "63.04%",
    left: 0,
    fontSize: 10,
    letterSpacing: 2,
    fontWeight: "700",
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
    width: 117,
  },
  numberText6: {
    position: "absolute",
    top: "2.17%",
    left: 0,
    fontSize: 25,
    letterSpacing: 0.29,
    fontFamily: "SF Pro Display",
    color: "#000",
    textAlign: "center",
    width: 117,
  },
  view7: {
    position: "absolute",
    height: "22.71%",
    width: "32.23%",
    top: "25.6%",
    right: "67.77%",
    bottom: "51.69%",
    left: "0%",
  },
  keyBackgroundIcon7: {
    position: "absolute",
    height: "102.17%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "-2.17%",
    left: "0%",
    borderRadius: 5,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  labelText10: {
    position: "absolute",
    top: "63.04%",
    left: 0,
    fontSize: 10,
    letterSpacing: 2,
    fontWeight: "700",
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
    width: 117,
  },
  numberText7: {
    position: "absolute",
    top: "2.17%",
    left: 0,
    fontSize: 25,
    letterSpacing: 0.29,
    fontFamily: "SF Pro Display",
    color: "#000",
    textAlign: "center",
    width: 117,
  },
  view8: {
    position: "absolute",
    height: "22.22%",
    width: "32.23%",
    top: "0%",
    right: "0%",
    bottom: "77.78%",
    left: "67.77%",
  },
  keyBackgroundIcon8: {
    position: "absolute",
    height: "102.17%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "-2.17%",
    left: "0%",
    borderRadius: 5,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  labelText11: {
    position: "absolute",
    top: "63.04%",
    left: 0,
    fontSize: 10,
    letterSpacing: 2,
    fontWeight: "700",
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
    width: 117,
  },
  numberText8: {
    position: "absolute",
    top: "2.17%",
    left: 0,
    fontSize: 25,
    letterSpacing: 0.29,
    fontFamily: "SF Pro Display",
    color: "#000",
    textAlign: "center",
    width: 117,
  },
  view9: {
    position: "absolute",
    height: "22.22%",
    width: "32.23%",
    top: "0%",
    right: "33.88%",
    bottom: "77.78%",
    left: "33.88%",
  },
  keyBackgroundIcon9: {
    position: "absolute",
    height: "102.17%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "-2.17%",
    left: "0%",
    borderRadius: 5,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  labelText12: {
    position: "absolute",
    top: "63.04%",
    left: 0,
    fontSize: 10,
    letterSpacing: 2,
    fontWeight: "700",
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
    width: 117,
  },
  numberText9: {
    position: "absolute",
    top: "2.17%",
    left: 0,
    fontSize: 25,
    letterSpacing: 0.29,
    fontFamily: "SF Pro Display",
    color: "#000",
    textAlign: "center",
    width: 117,
  },
  view10: {
    position: "absolute",
    height: "22.22%",
    width: "32.23%",
    top: "0%",
    right: "67.77%",
    bottom: "77.78%",
    left: "0%",
  },
  keysView1: {
    position: "absolute",
    height: "71.13%",
    width: "96.8%",
    top: "2.06%",
    right: "1.6%",
    bottom: "26.8%",
    left: "1.6%",
  },
  iOSKeyboardLightNumericView: {
    position: "absolute",
    top: 23,
    left: 0,
    backgroundColor: "#ccced3",
    width: 375,
    height: 291,
  },
  iOSKeyboardLightNumericView1: {
    position: "absolute",
    top: 168,
    left: 431,
    width: 375,
    height: 314,
  },
  iOSKeyboardLightAlphabeticText2: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 12,
    fontFamily: "Inter",
    color: "#666",
    textAlign: "left",
  },
  iOSKeyboardLightDictationIcon: {
    position: "absolute",
    top: 23,
    left: 0,
    width: 375,
    height: 291,
  },
  iOSKeyboardLightAlphabeticView2: {
    position: "absolute",
    top: 168,
    left: 822,
    width: 375,
    height: 314,
  },
  iOSKeyboardLightAlphabeticText3: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 12,
    fontFamily: "Inter",
    color: "#666",
    textAlign: "left",
  },
  backgroundView4: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: "#d1d5db",
  },
  backgroundView5: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  homeIndicatorView4: {
    position: "absolute",
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: 100,
    backgroundColor: "#000",
    width: 134,
    height: 5,
  },
  homeIndicatorView5: {
    position: "absolute",
    height: "10.21%",
    width: "100%",
    top: "89.79%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  dictationIcon1: {
    position: "relative",
    width: 15,
    height: 25,
  },
  globeIcon: {
    position: "relative",
    width: 26,
    height: 26,
  },
  categoriesIcon: {
    position: "absolute",
    height: "9.01%",
    width: "91.54%",
    top: "66.97%",
    right: "3.13%",
    bottom: "24.02%",
    left: "5.33%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  grinningFaceIcon: {
    position: "absolute",
    height: "17.39%",
    width: "8.53%",
    top: "0%",
    right: "87.73%",
    bottom: "82.61%",
    left: "3.73%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  bitmapIcon: {
    position: "absolute",
    height: "17.39%",
    width: "8.53%",
    top: "20.65%",
    right: "87.73%",
    bottom: "61.96%",
    left: "3.73%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  bitmapIcon1: {
    position: "absolute",
    height: "17.39%",
    width: "8.53%",
    top: "41.3%",
    right: "87.73%",
    bottom: "41.3%",
    left: "3.73%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  bitmapIcon2: {
    position: "absolute",
    height: "17.39%",
    width: "8.53%",
    top: "61.96%",
    right: "87.73%",
    bottom: "20.65%",
    left: "3.73%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  bitmapIcon3: {
    position: "absolute",
    height: "17.39%",
    width: "8.53%",
    top: "82.61%",
    right: "87.73%",
    bottom: "0%",
    left: "3.73%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  bitmapIcon4: {
    position: "absolute",
    height: "17.39%",
    width: "8.53%",
    top: "0%",
    right: "75.47%",
    bottom: "82.61%",
    left: "16%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  bitmapIcon5: {
    position: "absolute",
    height: "17.39%",
    width: "8.53%",
    top: "20.65%",
    right: "75.47%",
    bottom: "61.96%",
    left: "16%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  bitmapIcon6: {
    position: "absolute",
    height: "16.85%",
    width: "8.27%",
    top: "41.85%",
    right: "75.47%",
    bottom: "41.3%",
    left: "16.27%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  bitmapIcon7: {
    position: "absolute",
    height: "17.39%",
    width: "8.53%",
    top: "61.96%",
    right: "75.47%",
    bottom: "20.65%",
    left: "16%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  bitmapIcon8: {
    position: "absolute",
    height: "17.39%",
    width: "8.53%",
    top: "82.61%",
    right: "75.47%",
    bottom: "0%",
    left: "16%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  bitmapIcon9: {
    position: "absolute",
    height: "17.39%",
    width: "8.53%",
    top: "0%",
    right: "63.2%",
    bottom: "82.61%",
    left: "28.27%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  bitmapIcon10: {
    position: "absolute",
    height: "17.39%",
    width: "8.53%",
    top: "20.65%",
    right: "63.2%",
    bottom: "61.96%",
    left: "28.27%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  bitmapIcon11: {
    position: "absolute",
    height: "17.39%",
    width: "8.53%",
    top: "41.3%",
    right: "63.2%",
    bottom: "41.3%",
    left: "28.27%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  bitmapIcon12: {
    position: "absolute",
    height: "17.39%",
    width: "8.53%",
    top: "61.96%",
    right: "63.2%",
    bottom: "20.65%",
    left: "28.27%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  bitmapIcon13: {
    position: "absolute",
    height: "17.39%",
    width: "8.53%",
    top: "82.61%",
    right: "63.2%",
    bottom: "0%",
    left: "28.27%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  bitmapIcon14: {
    position: "absolute",
    height: "17.39%",
    width: "8.53%",
    top: "0%",
    right: "50.93%",
    bottom: "82.61%",
    left: "40.53%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  bitmapIcon15: {
    position: "absolute",
    height: "17.39%",
    width: "8.53%",
    top: "20.65%",
    right: "50.93%",
    bottom: "61.96%",
    left: "40.53%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  bitmapIcon16: {
    position: "absolute",
    height: "17.39%",
    width: "8.53%",
    top: "41.3%",
    right: "50.93%",
    bottom: "41.3%",
    left: "40.53%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  bitmapIcon17: {
    position: "absolute",
    height: "17.39%",
    width: "8.53%",
    top: "61.96%",
    right: "50.93%",
    bottom: "20.65%",
    left: "40.53%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  bitmapIcon18: {
    position: "absolute",
    height: "17.39%",
    width: "8.53%",
    top: "82.61%",
    right: "50.93%",
    bottom: "0%",
    left: "40.53%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  bitmapIcon19: {
    position: "absolute",
    height: "17.39%",
    width: "8.53%",
    top: "0%",
    right: "38.67%",
    bottom: "82.61%",
    left: "52.8%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  bitmapIcon20: {
    position: "absolute",
    height: "17.39%",
    width: "8.53%",
    top: "20.65%",
    right: "38.67%",
    bottom: "61.96%",
    left: "52.8%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  bitmapIcon21: {
    position: "absolute",
    height: "17.39%",
    width: "8.53%",
    top: "41.3%",
    right: "38.67%",
    bottom: "41.3%",
    left: "52.8%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  bitmapIcon22: {
    position: "absolute",
    height: "17.39%",
    width: "8.53%",
    top: "61.96%",
    right: "38.67%",
    bottom: "20.65%",
    left: "52.8%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  bitmapIcon23: {
    position: "absolute",
    height: "17.39%",
    width: "8.53%",
    top: "82.61%",
    right: "38.67%",
    bottom: "0%",
    left: "52.8%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  bitmapIcon24: {
    position: "absolute",
    height: "17.39%",
    width: "8.53%",
    top: "0%",
    right: "26.4%",
    bottom: "82.61%",
    left: "65.07%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  bitmapIcon25: {
    position: "absolute",
    height: "17.39%",
    width: "8.53%",
    top: "20.65%",
    right: "26.4%",
    bottom: "61.96%",
    left: "65.07%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  bitmapIcon26: {
    position: "absolute",
    height: "17.39%",
    width: "8.53%",
    top: "41.3%",
    right: "26.4%",
    bottom: "41.3%",
    left: "65.07%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  bitmapIcon27: {
    position: "absolute",
    height: "16.85%",
    width: "8.53%",
    top: "61.96%",
    right: "26.4%",
    bottom: "21.2%",
    left: "65.07%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  bitmapIcon28: {
    position: "absolute",
    height: "17.39%",
    width: "8%",
    top: "82.61%",
    right: "26.67%",
    bottom: "0%",
    left: "65.33%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  bitmapIcon29: {
    position: "absolute",
    height: "17.39%",
    width: "8.53%",
    top: "0%",
    right: "14.13%",
    bottom: "82.61%",
    left: "77.33%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  bitmapIcon30: {
    position: "absolute",
    height: "17.39%",
    width: "8.53%",
    top: "20.65%",
    right: "14.13%",
    bottom: "61.96%",
    left: "77.33%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  bitmapIcon31: {
    position: "absolute",
    height: "17.39%",
    width: "8.53%",
    top: "41.3%",
    right: "14.13%",
    bottom: "41.3%",
    left: "77.33%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  bitmapIcon32: {
    position: "absolute",
    height: "17.39%",
    width: "8.53%",
    top: "61.96%",
    right: "14.13%",
    bottom: "20.65%",
    left: "77.33%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  bitmapIcon33: {
    position: "absolute",
    height: "17.39%",
    width: "8.53%",
    top: "82.61%",
    right: "14.13%",
    bottom: "0%",
    left: "77.33%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  bitmapIcon34: {
    position: "absolute",
    height: "17.39%",
    width: "8.53%",
    top: "0%",
    right: "1.87%",
    bottom: "82.61%",
    left: "89.6%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  bitmapIcon35: {
    position: "absolute",
    height: "17.39%",
    width: "8.53%",
    top: "20.65%",
    right: "1.87%",
    bottom: "61.96%",
    left: "89.6%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  bitmapIcon36: {
    position: "absolute",
    height: "17.39%",
    width: "8.53%",
    top: "41.3%",
    right: "1.87%",
    bottom: "41.3%",
    left: "89.6%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  bitmapIcon37: {
    position: "absolute",
    height: "17.39%",
    width: "8.53%",
    top: "61.96%",
    right: "1.87%",
    bottom: "20.65%",
    left: "89.6%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  bitmapIcon38: {
    position: "absolute",
    height: "17.39%",
    width: "8.53%",
    top: "82.61%",
    right: "1.87%",
    bottom: "0%",
    left: "89.6%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  keyboardEmojisView: {
    position: "absolute",
    height: "55.26%",
    width: "100%",
    top: "9.01%",
    right: "0%",
    bottom: "35.74%",
    left: "0%",
  },
  categoryText: {
    position: "absolute",
    marginTop: -158,
    top: "50%",
    left: "4.27%",
    fontSize: 12,
    textTransform: "uppercase",
    fontWeight: "600",
    fontFamily: "SF Pro Text",
    color: "#707174",
    textAlign: "left",
  },
  iOSKeyboardLightEmojiView: {
    position: "absolute",
    top: 23,
    left: 0,
    backgroundColor: "#ccced3",
    width: 375,
    height: 333,
  },
  iOSKeyboardLightAlphabeticView3: {
    position: "absolute",
    top: 168,
    left: 1213,
    width: 375,
    height: 356,
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
  keyboardText: {
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
  iOSKeyboardView: {
    position: "relative",
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#ededed",
    borderWidth: 1,
    flex: 1,
    width: "100%",
    height: 603,
    overflow: "hidden",
  },
});

export default IOSKeyboard;
