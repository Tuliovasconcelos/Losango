import React from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { styles } from './styles';


export default function Welcome() {
  const navigator = useNavigation();

  function handleStart() {
    navigator.navigate('SignIn');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Seja bem vindo(a)!!
        </Text>
        <Image source={require('../../assets/hello.png')} style={styles.image} resizeMode="contain" />

        <Text style={styles.subtitle}>
          Nós da rede Losango, criamos um APP exclusivo para você acompanhar o crescimento do seu filho(a).
        </Text>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={handleStart}
        >
          <Text style={styles.labelButton}>
            Começar!
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// SafeAreaView: IOS Only.