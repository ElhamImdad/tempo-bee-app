import { View, Text, Pressable } from "react-native";
import React, { forwardRef } from "react";
import cn from "classnames";
import Icon from "../Icons";

const Button = forwardRef(({ children, ...props }) => (
  <Pressable
    className={cn(
      "px-8 py-5 w-full",
      {
        "bg-black": !props?.bgColor,
        "bg-primary": props.bgColor == "primary",
      },
      {
        "rounded-md": !props?.rounded,
        "rounded-full": props.rounded == "full",
        "rounded-none": props.rounded == "none",
        "rounded-sm": props.rounded == "sm",
        "rounded-lg": props.rounded == "lg",
      }
    )}
    onPress={props.onClick}
  >
    <View className="flex flex-row ">
      {props.icon && (
        <Text
          className={cn("text-start", {
            "text-white": !props?.textColor,
            "text-primary": props.textColor == "primary",
          })}
        >
          {<Icon name={props.icon} />}
        </Text>
      )}
      <Text
        className={cn("text-center flex-1", {
          "text-white": !props?.textColor,
          "text-primary": props.textColor == "primary",
        })}
      >
        {children}
      </Text>
    </View>
  </Pressable>
));
export default Button;
