import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import Colors from '../../theme/colors';

interface Props {
  children: React.ReactNode;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  type?: 'primary' | 'outline';
}

const Button: React.FC<Props> = ({
  children,
  onPress,
  style,
  disabled,
  type = 'primary',
}) => {
  return (
    <Pressable
      disabled={disabled}
      style={({pressed}) => [
        styles.button,
        pressed && styles.pressed,
        disabled && styles.disabled,
        type === 'primary' && styles.buttonPrimary,
        type === 'outline' && styles.buttonOutline,
        style,
      ]}
      onPress={onPress}>
      <View>
        <Text
          style={[
            styles.buttonText,
            type === 'primary' && styles.buttonTextPrimary,
            type === 'outline' && styles.buttonTextOutline,
          ]}>
          {children}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    paddingVertical: 14,
    paddingHorizontal: 12,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },

  buttonPrimary: {
    backgroundColor: Colors.primary500,
  },

  buttonOutline: {
    borderWidth: 1,
    borderColor: Colors.primary500,
    backgroundColor: 'transparent',
  },

  pressed: {
    opacity: 0.7,
  },
  disabled: {
    opacity: 0.7,
  },

  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },

  buttonTextPrimary: {
    color: 'white',
  },

  buttonTextOutline: {
    color: Colors.primary500,
  },
});

export default Button;
