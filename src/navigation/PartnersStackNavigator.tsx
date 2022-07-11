import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PartnersScreen from '../screens/PartnersScreen';
import IconButton from '../components/ui/IconButton';
import Colors from '../theme/colors';
import {useAppDispatch} from '../redux/hooks';
import {logout} from '../redux/slices/authSlice';

const Stack = createNativeStackNavigator();

const PartnersStackNavigator: React.FC = () => {
  const dispatch = useAppDispatch();

  function handleLogout() {
    dispatch(logout());
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Partners"
        component={PartnersScreen}
        options={{
          headerRight: () => (
            <IconButton
              icon="log-out-outline"
              size={24}
              color={Colors.primary500}
              onPress={handleLogout}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default PartnersStackNavigator;
