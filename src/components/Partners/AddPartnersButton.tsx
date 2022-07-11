import {View, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import Colors from '../../theme/colors';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  onPress: () => void;
}

const AddPartnersButton: React.FC<Props> = ({onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [styles.container, pressed && styles.pressed]}>
      <View>
        <Icon name="add" size={24} color="white" />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: Colors.primary500,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 40,
    right: 40,
  },

  pressed: {
    opacity: 0.7,
  },

  plus: {
    color: 'white',
  },
});

export default AddPartnersButton;
