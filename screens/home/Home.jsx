import { View, Image, TextInput } from 'react-native';
import React from 'react';
import Button from '../../components/Button';

export default function Home() {
  return (
    <View className="flex-1 items-center space-y-6 px-3 py-9">
      <View>
        <Image
          className="w-44 h-40"
          source={require("../../assets/logo.png")}
        />
      </View>
      <View>
        <Button >تسجيل الدخول إلى حسابي</Button>
      </View>
 
    </View>
  )
}