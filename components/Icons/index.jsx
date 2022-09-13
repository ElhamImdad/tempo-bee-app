import React from "react";
import { MaterialCommunityIcons, FontAwesome, Ionicons, FontAwesome5, MaterialIcons } from "./Icons";

function Icon(props) {
  switch (props.name) {
    case "home":
    case "notebook-edit-outline":
    case "car":
    case "face-woman-profile":
    case "login":
    case "arrow-left":
    case "phone-plus":
    case "plus-circle-outline": {
      return (
        <MaterialCommunityIcons
          size={26}
          style={{ marginBottom: -3 }}
          {...props}
        />
      );
    }
    case "cash":
    case "clock-time-three-outline": {
      return (
        <MaterialCommunityIcons
          size={16}
          style={{ marginBottom: -3 }}
          {...props}
        />
      );
    }
    case "attach-money": {
      return <MaterialIcons size={16} style={{ marginBottom: -3 }} {...props} />;
    }
    case "location-sharp": {
      return <Ionicons size={16} style={{ marginBottom: -3 }} {...props} />;
    }
    case "person-add": {
      return <Ionicons size={26} style={{ marginBottom: -3 }} {...props} />;
    }
    case "eye":
    case "user-circle-o": {
      return <FontAwesome size={24} style={{ marginBottom: -3 }} {...props} />;
    }
    case "heart-o":
    case "search": {
      return <FontAwesome size={20} style={{ margin: 5 }} {...props} />;
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
