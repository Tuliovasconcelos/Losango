import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../pages/Welcome';
import colors from '../styles/colors';
import SignIn from '../pages/SignIn';
import Register from '../pages/Register';
import ForgottenKey from '../pages/ForgottenKey';

const StackRoutes = createStackNavigator();

export const PublicRoutes = () => (
  <StackRoutes.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.white
      }
    }}
  >
    <StackRoutes.Screen
      name="Welcome"
      component={Welcome}
    />
    <StackRoutes.Screen
      name="SignIn"
      component={SignIn}
    />
    <StackRoutes.Screen
      name="Register"
      component={Register}
    />
    {/* <StackRoutes.Screen
      name="ForgottenKey"
      component={ForgottenKey}
    /> */}
  </StackRoutes.Navigator>
)