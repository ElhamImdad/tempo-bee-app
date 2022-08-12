import React from "react";
import { View, Text, Image } from "react-native";
import Button from "../../components/Button/Button";

export default function JoinUs({ history }) {
  const continueAsGuestHandler = () => {
    history.push("/");
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
      <View>
        <Button onClick={loginHandler}>تسجيل الدخول إلى حسابي</Button>
      </View>
      <View>
        <Button onClick={signUpHandler}>إنشاء حساب جديد</Button>
      </View>
      <View>
        <Button onClick={continueAsGuestHandler}>اكمل الدخول كزائر</Button>
      </View>
    </View>
  );
}
