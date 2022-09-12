import { View, Text } from "react-native";
import React from "react";
import cn from "classnames";

const Card = ({ children, bgColor }) => (
  <View
    className={cn("block rounded-lg shadow-lg border-2 border-primary ", {
      "bg-white": !bgColor?.bgColor,
      "bg-primary": bgColor.bgColor == "primary",
    })}
  >
    <View>{children}</View>
  </View>
);
export default Card;
