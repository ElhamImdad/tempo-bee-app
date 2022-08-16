import { Text } from "react-native";
import React, { forwardRef } from "react";

const Errors = forwardRef(({ children, ...props }) => (
  <Text className={cn("m-0.5 p-0", `text-danger`)} data-testid={props.dataTestId}>{children}</Text>
));

export default Errors;
