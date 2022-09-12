import { View, Text } from "react-native";
import React from "react";
import Icon from "../../../components/Icons";
import Colors from "../../../constants/Colors";
import useColorScheme from "../../../hooks/useColorScheme";

export default function Profile() {
  const colorScheme = useColorScheme();
  return (
    <View className="py-20">
      <View>
        <View className="flex flex-row justify-between px-4">
          <View className="flex flex-row space-x-2">
            <Icon name="login" color={Colors[colorScheme]}></Icon>
            <Text className="text-base">تسجيل الدخول</Text>
          </View>
          <View>
            <Icon name="arrow-left" color={Colors[colorScheme]}></Icon>
          </View>
        </View>
        <View className="h-px w-full my-3 bg-Neutral-light"></View>

        <View className="flex flex-row justify-between px-4">
          <View className="flex flex-row space-x-2">
            <Icon name="phone-plus" color={Colors[colorScheme]}></Icon>
            <Text className="text-base">التواصل مع الدعم</Text>
          </View>
          <View>
            <Icon name="arrow-left" color={Colors[colorScheme]}></Icon>
          </View>
        </View>
        <View className="h-px w-full my-3 bg-Neutral-light"></View>

        <View className="flex flex-row justify-between px-4">
          <View className="flex flex-row space-x-2">
            <Icon name="person-add" color={Colors[colorScheme]}></Icon>
            <Text className="text-base">انضم إلينا</Text>
          </View>
          <View>
            <Icon name="arrow-left" color={Colors[colorScheme]}></Icon>
          </View>
        </View>
        <View className="h-px w-full my-3 bg-Neutral-light"></View>
      </View>
    </View>
  );
}
