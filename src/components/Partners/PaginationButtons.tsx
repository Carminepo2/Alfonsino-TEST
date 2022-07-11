import {View, StyleSheet, StyleProp, ViewStyle} from 'react-native';
import React from 'react';
import Button from '../ui/Button';

interface Props {
  onPreviousPress: () => void;
  onNextPress: () => void;

  isPreviousActive: boolean;
  isNextActive: boolean;

  style?: StyleProp<ViewStyle>;
}

const PaginationButtons: React.FC<Props> = ({
  onPreviousPress,
  onNextPress,
  isPreviousActive,
  isNextActive,
  style,
}) => {
  return (
    <View style={[styles.buttonContainter, style]}>
      <Button
        style={[styles.button, styles.left]}
        onPress={onPreviousPress}
        disabled={!isPreviousActive}>
        Precedente
      </Button>
      <Button
        style={[styles.button, styles.right]}
        onPress={onNextPress}
        disabled={!isNextActive}>
        Prossimo
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainter: {
    flexDirection: 'row',
  },

  button: {
    flex: 1,
  },

  right: {
    marginLeft: 6,
  },

  left: {
    marginRight: 6,
  },
});

export default PaginationButtons;
