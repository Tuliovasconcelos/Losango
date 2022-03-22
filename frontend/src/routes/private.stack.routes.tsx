import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../styles/colors';
import Dashboard from '../pages/Dashboard';

const StackRoutes = createStackNavigator();

export const PrivateRoutes = () => (
  <StackRoutes.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.white
      }
    }}
  >
    <StackRoutes.Screen
      name="Dashboard"
      component={Dashboard}
    />
  </StackRoutes.Navigator>
)