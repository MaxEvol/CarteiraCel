const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
false;
import Data from "./screens/Data";
import Content from "./screens/Content";
import IOSKeyboard from "./screens/IOSKeyboard";
import Inputs from "./screens/Inputs";
import Inputs1 from "./screens/Inputs1";
import Inputs2 from "./screens/Inputs2";
import IOSNavigation from "./screens/IOSNavigation";
import IOSStatusBar from "./screens/IOSStatusBar";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Data"
              component={Data}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Content"
              component={Content}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IOSKeyboard"
              component={IOSKeyboard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Inputs"
              component={Inputs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Inputs1"
              component={Inputs1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Inputs2"
              component={Inputs2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IOSNavigation"
              component={IOSNavigation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IOSStatusBar"
              component={IOSStatusBar}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
