import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from './Button';

interface Props {
  message: string;
  onConfirm: () => void;
}

const ErrorOverlay: React.FC<Props> = ({message, onConfirm}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>Errore inaspettato!</Text>
      <Text style={styles.text}>{message}</Text>
      <Button onPress={onConfirm}>Okay</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 24,
  },
  text: {
    textAlign: 'center',
    margin: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ErrorOverlay;
