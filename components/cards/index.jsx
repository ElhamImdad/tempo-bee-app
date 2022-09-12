import { View, Text } from "react-native";
import React from "react";
import cn from "classnames";

const Card = ({ children, bgColor, height, width, padding}) => (
  <View
    className={cn("block rounded-lg shadow-lg border-2 border-primary ", {
      "bg-white ": !bgColor?.bgColor,
      "bg-primary ": bgColor == "primary",
      "bg-primary-light ": bgColor == "primaryL",
    }, height, width, padding)}
  >
    <View>{children}</View>
  </View>
);
export default Card;
