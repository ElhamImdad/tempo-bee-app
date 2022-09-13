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

export default function Restaurants({ navigation }) {
  const colorScheme = useColorScheme();
  const restaurantsCardHandler = () => {
    navigation.navigate('foods');
  };

  return (
    <ScrollView>
      <View className=" flex-1 space-y-6 p-5">
        <TouchableHighlight onPress={restaurantsCardHandler}>
          <Card height={"h-52"} padding="pb-3">
            <Image
              className="w-full h-3/4 rounded-t-lg"
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
                    color={Colors.secondary}
                  ></Icon>
                  <Text className="text-sm text-gray">10-20 دقائق</Text>
                </View>
              </View>
              <View className="justify-center">
                <Icon
                  name="heart-o"
                  color={Colors.secondary}
                ></Icon>
              </View>
            </View>
          </Card>
        </TouchableHighlight>
      </View>
    </ScrollView>
  );
}
