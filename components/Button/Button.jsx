import { View, Text, Pressable } from "react-native";
import React from "react";
import cn from "classnames";

const Button = React.forwardRef(({ children, ...props }) => (
  <Pressable
    className={cn("px-8 py-5 self-center rounded-md", {
      "bg-black": !props?.bgColor,
      "bg-primary": props.bgColor == "primary",
    })}
    onPress={props.onClick}
  >
    <Text
      className={cn("text-center", {
        "text-white": !props?.textColor,
        "text-primary": props.textColor == "primary",
      })}
    >
      {" "}
      {children}
    </Text>
  </Pressable>
));
export default Button;
