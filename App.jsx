import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import GetStarted from "./screens/getstarted/GetStarted";

export default function App() {
  return (
    <TailwindProvider>
      <View className="flex-1 items-center justify-center">
        <GetStarted />
        <StatusBar />
      </View>
    </TailwindProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
