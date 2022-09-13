import { View, Text, Image } from "react-native";
import React from "react";
import Card from "../../components/cards";

export default function Foods() {
  return (
    <View className="flex-1 items-center ">
        <View className="flex-1 items-center w-full bg-gradient-to-r from-primary to-white px-5">
        <Card width={"w-full"} height={"h-1/3"}  border="none" rounded={"3xl"}>
          <Image
            className="h-full w-full object-cover rounded-3xl"
            source={require("../../assets/restaurants.jpg")}
          />
        </Card>
        </View>
    </View>
  );
}
