import {
  View,
  Text,
  StyleSheet,
  Modal,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';

interface Props {
  isVisible: boolean;
  onCancel: () => void;
  onConfirm: (title: string) => void;
}

const PartnerModalForm: React.FC<Props> = ({
  isVisible,
  onConfirm,
  onCancel,
}) => {
  const [title, setTitle] = React.useState('');

  function handleTitleChange(text: string) {
    setTitle(text);
  }

  function handleSubmit() {
    onConfirm(title);
  }

  return (
    <Modal
      presentationStyle="formSheet"
      visible={isVisible}
      onRequestClose={onCancel}
      animationType="slide">
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Aggiungi Partner</Text>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View>
            <Input
              label="Title"
              value={title}
              onChangeText={handleTitleChange}
              autoFocus
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              style={[styles.button, styles.buttonLeft]}
              type="outline"
              onPress={onCancel}>
              Annulla
            </Button>
            <Button
              style={[styles.button, styles.buttonRight]}
              onPress={handleSubmit}>
              Aggiungi
            </Button>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginBottom: 120,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 28,
  },

  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },

  button: {
    flex: 1,
  },

  buttonRight: {
    marginLeft: 4,
  },

  buttonLeft: {
    marginRight: 4,
  },
});

export default PartnerModalForm;
