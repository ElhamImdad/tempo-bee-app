import { StatusBar } from "expo-status-bar";
import { Text, View, I18nManager } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import Routes from "./components/navigation/Routes";
import { NativeRouter, Switch, Route } from "react-router-native";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute
} from "@react-navigation/native";

export default function App() {
  I18nManager.forceRTL(true);
  try {
    I18nManager.allowRTL(true);
  } catch (e) {
    console.log(e);
  }
  return (
   <NavigationContainer>
    <TailwindProvider>
       <NativeRouter>
      <View className="bg-primary h-full ">
        <Routes/>
        <StatusBar />
      </View>
      </NativeRouter>
    </TailwindProvider>
    </NavigationContainer>
  );
}
