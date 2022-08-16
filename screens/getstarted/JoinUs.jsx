import React from "react";
import { View, Text, Image } from "react-native";
import Button from "../../components/Button";

export default function JoinUs({ history }) {
  const continueAsGuestHandler = () => {
    history.push("/home");
  };
  const loginHandler = () => {
    alert("I am a log in button");
  };

  const signUpHandler = () => {
    alert("I am a sign up button");
  };

  return (
    <View className="flex-1 justify-center items-center space-y-6">
      <View>
        <Image
          className="w-44 h-40"
          source={require("../../assets/logo.png")}
        />
      </View>
      <View className="w-4/5">
        <Button onClick={signUpHandler} rounded='full' icon="plus-circle-outline">إنشاء حساب جديد</Button>
      </View>
      <View className="w-4/5">
        <Button onClick={loginHandler} rounded="full" icon="user-circle-o">تسجيل الدخول إلى حسابي</Button>
      </View>
      <View className="w-4/5">
        <Button onClick={continueAsGuestHandler} rounded='full' icon="eye">اكمل الدخول كزائر</Button>
      </View>
    </View>
  );
}
