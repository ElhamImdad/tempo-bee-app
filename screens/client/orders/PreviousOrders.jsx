import { View, Text, ScrollView } from "react-native";
import React from "react";
import Card from "../../../components/cards";
import Icon from "../../../components/Icons";
import Colors from "../../../constants/Colors";

export default function PreviousOrders() {
  return (
    <ScrollView>
    <View className="flex-1 p-5 space-y-2">
      <Card height={"min-h-fit"} border={"none"} padding="px-3.5 py-5">
        <View className="gap-3 flex flex-row flex-wrap h-screen w-screen">
          <View className="flex flex-1 items-start space-y-1">
            <Text className=" text-primary-dark text-base font-bold">
              المكتبة
            </Text>
            <View className="flex flex-row space-x-1">
              <Text className="text-success">x4</Text>
              <Text className="text-xs">طباعة أوراق</Text>
            </View>
          </View>
          <View className="flex flex-1 space-y-1">
            <View className="items-start flex-row space-x-1">
              <Icon
                name="clock-time-three-outline"
                color={Colors.secondary}
              ></Icon>
              <Text className="text-gray text-sm">10-20 دقائق</Text>
            </View>
            <View className="items-start flex-row space-x-1">
              <Icon name="location-sharp" color={Colors.secondary}></Icon>
              <Text className="text-gray text-sm">كلية الحاسبات</Text>
            </View>
            <View className="items-start flex-row space-x-1">
              <Icon name="attach-money" color={Colors.secondary}></Icon>
              <Text className="text-gray text-sm">الدفع عند الاستلام</Text>
            </View>
          </View>
        </View>
        <Card padding={"py-1 px-2"} margin="mt-3" border={"1-primary"} bgColor={"grayL"}>
          <View className="flex flex-row flex-wrap">
            <Text className="flex flex-1 text-left text-xs">مجموع الطلب</Text>
            <Text className="flex flex-1 text-left text-primary-dark text-xs">
              6.00 ريال
            </Text>
            {/* <View className="flex flex-1 items-start">
              <Text className="text-sm">مجموع الطلب</Text>
              <Text className="text-primary-dark text-xs">6.00 ريال</Text>
            </View>
            <View className="flex flex-1 items-start">
              <Text className="text-sm">مجموع الطلب</Text>
              <Text className="text-primary-dark text-xs">6.00 ريال</Text>
            </View> */}
          </View>
          <View className="flex flex-row flex-wrap">
            <Text className="flex flex-1 text-left text-xs">رسوم التوصيل</Text>
            <Text className="flex flex-1 text-left text-primary-dark text-xs">
              6.00 ريال
            </Text>
          </View>
        </Card>
      </Card>
    </View>
    </ScrollView>
  );
}
