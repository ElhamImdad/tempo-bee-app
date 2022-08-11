import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {TailwindProvider} from 'tailwind-rn';
import {useTailwind} from 'tailwind-rn';
import utilities from './tailwind.json';
import GetStarted from './screens/getstarted/GetStarted';

export default function App() {
  const tailwind = useTailwind();

  return (
    <TailwindProvider utilities={utilities}>
    <View style={tailwind('pt-12 items-center')}>
      <View style={tailwind('bg-blue-200 px-3 py-1 rounded-full')}>
					<Text style={tailwind('text-blue-800 font-semibold')}>
						Hello word !
					</Text>
				</View>
      <GetStarted/>
      <StatusBar />
    </View>
    </TailwindProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
