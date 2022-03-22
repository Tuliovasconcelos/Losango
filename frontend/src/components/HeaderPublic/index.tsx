import React from 'react';
import { View, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../../styles/colors';
import { useNavigation } from '@react-navigation/core';



import { styles } from './styles';

export function Header() {
  const navigator = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <TouchableOpacity onPress={() => navigator.goBack()}>
          <Icon name='arrow-left' size={30} color={colors.primary} />
        </TouchableOpacity>
      </View>
      {/* <Image source={require('../../assets/logo.png')} /> */}
      <></>
    </View>
  );
}