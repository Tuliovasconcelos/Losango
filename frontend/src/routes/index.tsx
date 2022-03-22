import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import { useAuth } from '../contexts/auth';
import { PrivateRoutes } from './private.stack.routes';
import { PublicRoutes } from './public.stack.routes';



const Routes: React.FC = () => {
  const { signed, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#666" />
      </View>
    );
  }

  return signed ? <PrivateRoutes /> : <PublicRoutes />;
};

export default Routes;
