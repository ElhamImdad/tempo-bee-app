import { View, Text, TextInput } from 'react-native';
import React, {useRef} from 'react';
import Errors from '../Errors';


const Input = ({
    className,
    containerStyle,
    errors,
    disabled,
    icon,
    inputStyle,
    name,
    onChange,
    placeholder,
    readOnly,
    required,
    type,
    value,
    wrapperStyle
  }) => {
    const inputRef = useRef(null);
  
    const handleClick = () => {
      if (inputRef && inputRef.current) inputRef.current.focus();
    };
  
    return (
      <View className={className} style={wrapperStyle}>
        <View onClick={handleClick} className="container" style={containerStyle}>
          {icon && <name/>}
          <TextInput
            ref={inputRef}
            aria-label={name}
            data-testid={name}
            tabIndex={0}
            type={type}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            value={value}
            style={inputStyle}
            disabled={disabled}
            readOnly={readOnly}
          />
        </View>
        {errors && !value && required && (
            <Errors dataTestId="errors">Required!</Errors>
        //   <Errors data-testid="errors">Required!</Errors>
        )}
      </View>
    );
  };

export default Input;