import {
  View,
  Text,
  Image,
  TouchableHighlight,
  ScrollView,
} from "react-native";
import React from "react";
import Card from "../../components/cards";
import Icon from "../../components/Icons";
import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";

export default function Restaurants() {
  const colorScheme = useColorScheme();
  const restaurantsCardHandler = () => {
    alert("I am restaurants card");
  };

  return (
    <ScrollView>
      <View className=" flex-1  space-y-6 px-3 py-9">
        <TouchableHighlight onPress={restaurantsCardHandler}>
          <Card height={"h-52"} padding="pb-3">
            <Image
              className="w-full h-3/4"
              source={require("../../assets/restaurants.jpg")}
            />
            <View className="flex flex-row justify-between px-3">
              <View className="items-start">
                <Text className=" py-1 text-base font-medium text-primary-dark">
                  البيك
                </Text>
                <View className=" flex flex-row space-x-1">
                  <Icon
                    name="clock-time-three-outline"
                    color={Colors[colorScheme]}
                  ></Icon>
                  <Text className="text-sm">10-20 دقائق</Text>
                </View>
              </View>
              <View className="justify-center">
                <Icon
                  name="heart-o"
                  color={Colors[colorScheme]}
                ></Icon>
              </View>
            </View>
          </Card>
        </TouchableHighlight>
      </View>
    </ScrollView>
  );
}
