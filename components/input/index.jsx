import { View, Text, TextInput } from "react-native";
import React, { useRef } from "react";
import Errors from "../Errors";
import cn from "classnames";
import Icon from "../Icons";
import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";

const Input = ({
  className,
  containerStyle,
  errors,
  disabled,
  icon,
  name,
  onChange,
  placeholder,
  readOnly,
  required,
  type,
  value,
  wrapperStyle,
  color,
}) => {
  const inputRef = useRef(null);

  const handleClick = () => {
    if (inputRef && inputRef.current) inputRef.current.focus();
  };
  const colorScheme = useColorScheme();

  return (
    <View
      onClick={handleClick}
      className={cn(
        "px-1 flex-1 flex-row border-2 border-solid rounded-md transition m-0 focus:outline-none ",
        {
          "border-black focus:border-primary focus:bg-white": !color,
        }
      )}
    >
      {icon && <Icon name={icon} color={Colors[colorScheme]}></Icon>}
      <TextInput
        className={cn("flex-1 px-2 py-1.5 text-sm", {
          "text-gray-dark focus:text-gray-dark ": !color,
        })}
        //   className={cn(
        //     "block w-full px-3 py-1.5 text-base font-normal border-2 border-solid rounded-md transition m-0 focus:outline-none",
        //     {
        //         "border-black text-gray-dark focus:bg-white focus:text-gray-dark focus:border-primary": !color
        //     }
        //   )}
        ref={inputRef}
        aria-label={name}
        data-testid={name}
        tabIndex={0}
        type={type}
        name={name}
        onChangeText={onChange}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        readOnly={readOnly}
      ></TextInput>
    </View>
    //     {errors && !value && required && (
    //         <Errors dataTestId="errors">Required!</Errors>
    //     //   <Errors data-testid="errors">Required!</Errors>
    //     )}
    //   </View>
  );
};

export default Input;
