import {View, StyleSheet} from 'react-native';
import React from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import {validateEmail, validatePassword} from '../../utils/validators';
import Colors from '../../theme/colors';

interface Props {
  onSubmit: (email: string, password: string) => void;
}

const AuthForm: React.FC<Props> = ({onSubmit}) => {
  const [formValues, setFormValues] = React.useState({
    email: {value: '', isValid: true},
    password: {value: '', isValid: true},
  });

  const handleFormChange = (
    inputName: keyof typeof formValues,
    value: string,
  ) => {
    setFormValues(prev => ({...prev, [inputName]: {value, isValid: true}}));
  };

  const handleSubmit = () => {
    const isEmailValid = validateEmail(formValues.email.value);
    const isPasswordValid = validatePassword(formValues.password.value);

    if (!isEmailValid || !isPasswordValid) {
      setFormValues(prev => ({
        email: {...prev.email, isValid: isEmailValid},
        password: {...prev.password, isValid: isPasswordValid},
      }));
      return;
    }

    onSubmit(formValues.email.value, formValues.password.value);
  };

  return (
    <View style={styles.container}>
      <Input
        label="Email"
        value={formValues.email.value}
        isInvalid={!formValues.email.isValid}
        onChangeText={handleFormChange.bind(this, 'email')}
        containerStyle={styles.input}
      />

      <Input
        label="Password"
        secureTextEntry
        value={formValues.password.value}
        isInvalid={!formValues.password.isValid}
        onChangeText={handleFormChange.bind(this, 'password')}
        containerStyle={styles.input}
      />

      <Button style={styles.button} onPress={handleSubmit}>
        Login
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 18,
    backgroundColor: Colors.gray50,
    padding: 20,
    borderRadius: 8,
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginTop: 12,
  },
});

export default AuthForm;
