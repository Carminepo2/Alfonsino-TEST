import {View, StyleSheet, Image, SafeAreaView} from 'react-native';
import React from 'react';
import AuthForm from '../components/Auth/AuthForm';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {login} from '../redux/slices/authSlice';

const LoginScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const isAuthenticating = useAppSelector(state => state.auth.isAuthenticating);

  const handleSubmit = (email: string, password: string) => {
    dispatch(login({email, password}));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../../assets/logo.png')} />
      </View>
      <AuthForm onSubmit={handleSubmit} />

      {isAuthenticating && (
        <View style={styles.loadingOverlayContainer}>
          <LoadingOverlay />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
  },
  loadingOverlayContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'white',
  },
  imageContainer: {
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 160,
    width: 160,
  },
});

export default LoginScreen;
