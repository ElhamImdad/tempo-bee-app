import { StatusBar } from "expo-status-bar";
import { Text, View, I18nManager } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import GetStarted from "./screens/getstarted/GetStarted";
import Routes from "./routes/Routes";
import { NativeRouter, Switch, Route } from "react-router-native";

export default function App() {
  I18nManager.forceRTL(true);
  try {
    I18nManager.allowRTL(true);
  } catch (e) {
    console.log(e);
  }
  return (
   
    <TailwindProvider>
       <NativeRouter>
      <View className="h-full">
        <Routes/>
        <StatusBar />
      </View>
      </NativeRouter>
    </TailwindProvider>
    
  );
}
