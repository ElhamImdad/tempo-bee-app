import { View, Text } from "react-native";
import React from "react";
import cn from "classnames";

const Card = ({ children, bgColor, height, width, padding, margin, border, rounded}) => (
  <View
    className={cn("block shadow-xl shadow-black opacity-95", {
      "bg-white ": !bgColor?.bgColor,
      "bg-primary ": bgColor == "primary",
      "bg-primary-light ": bgColor == "primaryL",
      "bg-gray-light ": bgColor == "grayL",
    }, {
      "border-2 border-primary ": !border?.border,
      "border-0": border== "none",
      "border border-gray": border=="1-primary",
    },{
      "rounded-lg": !rounded?.rounded,
      "rounded-3xl": rounded=="3xl",
    } , height, margin, width, padding)}
  >
    <View>{children}</View>
  </View>
);
export default Card;
