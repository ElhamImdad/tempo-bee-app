import React from "react";
import { MaterialCommunityIcons, FontAwesome } from "./Icons";

function Icon(props) {
  switch (props.name) {
    case "home":
    case "notebook-edit-outline":
    case "car":
    case "face-woman-profile":
    case "plus-circle-outline": {
      return (
        <MaterialCommunityIcons
          size={26}
          style={{ marginBottom: -3 }}
          {...props}
        />
      );
    }
    case "clock-time-three-outline": {
      return (
        <MaterialCommunityIcons
          size={16}
          style={{ marginBottom: -8 }}
          {...props}
        />
      );
    }
    case "eye":
    case "user-circle-o": {
        return (
            <FontAwesome
              size={24}
              style={{ marginBottom: -3 }}
              {...props}
            />
          );
    }
    case "heart-o":
    case "search": {
      return (
          <FontAwesome
            size={20}
            style={{ margin: 5 }}
            {...props}
          />
        );
  }

    default: {
      return (
        <MaterialCommunityIcons
          size={26}
          style={{ marginBottom: -3 }}
          name="bug"
        />
      );
    }
  }
}

export default Icon;
