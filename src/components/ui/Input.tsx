import {
  View,
  Text,
  TextInput,
  StyleSheet,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import React from 'react';
import Colors from '../../theme/colors';

interface Props extends Omit<React.ComponentProps<typeof TextInput>, 'style'> {
  label: string;
  isInvalid?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  labelStyle?: StyleProp<TextStyle>;
}

const Input: React.FC<Props> = ({
  label,
  isInvalid,
  containerStyle,
  inputStyle,
  labelStyle,
  ...textInputProps
}) => {
  return (
    <View style={containerStyle}>
      <Text
        style={[styles.label, isInvalid && styles.labelInvalid, labelStyle]}>
        {label}
      </Text>
      <TextInput
        style={[styles.input, isInvalid && styles.inputInvalid, inputStyle]}
        {...textInputProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    marginBottom: 4,
  },
  labelInvalid: {
    color: Colors.error500,
  },
  input: {
    paddingVertical: 14,
    paddingHorizontal: 12,
    backgroundColor: Colors.primary100,
    borderRadius: 4,
    fontSize: 16,
  },
  inputInvalid: {
    backgroundColor: Colors.error100,
  },
});

export default Input;
