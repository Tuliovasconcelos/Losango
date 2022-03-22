import { useState } from 'react';
import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
  Alert,
  Image,
  Linking
} from 'react-native';

import { useAuth } from '../../contexts/auth';
import colors from '../../styles/colors';
import { styles } from './styles';
import { Button } from '../../components/Button';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/core';


export default function SignIn() {

  const navigator = useNavigation();

  const { signIn } = useAuth();

  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const [isFocusedUser, setIsFocusedUser] = useState(false);
  const [isFocusedPass, setIsFocusedPass] = useState(false);


  const [isFilledUser, setIsFilledUser] = useState(false);
  const [isFilledPass, setIsFilledPass] = useState(false);



  function handleLogo() {
    if (isFocusedUser || isFocusedPass) {
      return null
    } else {
      return <Image source={require('../../assets/logo.png')} resizeMode="contain" style={styles.image} />
    }
  }

  function handleImageSignIn() {
    if (isFocusedUser || isFocusedPass) {
      return null
    } else {
      return <Image source={require('../../assets/imageSignIn.png')} resizeMode="contain" style={styles.imageFooter} />
    }
  }

  function handleInputUsuarioBlur() {
    setIsFocusedUser(false);
    setIsFilledUser(!!usuario);
  }

  function handleInputSenhaBlur() {
    setIsFocusedPass(false);
    setIsFilledPass(!!senha);
  }

  function handleInputUsuarioChange(value: string) {
    setIsFilledUser(!!value);
    setUsuario(value);
  }

  function handleInputSenhaChange(value: string) {
    setIsFilledPass(!!value);
    setSenha(value);
  }

  function handleInputUsuarioFocus() {
    setIsFocusedUser(true)
  }
  function handleInputSenhaFocus() {
    setIsFocusedPass(true)
  }

  async function handleSign() {
    if (!usuario || !senha) {
      return Alert.alert("Ops...", "Informe o usuário e senha de acesso!");
    }
    try {
      const userData = {
        usuario: usuario,
        senha: senha
      }

      signIn(userData);

    } catch (error) {
      Alert.alert("Ops...", "Não foi possível acessar o APP.")
    }
  }

  function handleRegister() {
    navigator.navigate('Register');
  }

  function handleForgottenKey() {
    navigator.navigate('ForgottenKey');
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}

      >
        <TouchableWithoutFeedback
          disabled={!isFocusedUser || !isFocusedPass}
          onPress={Keyboard.dismiss}
        >

          <View style={styles.content}>
            <View style={styles.form}>
              {handleLogo()}
              <View>
                <Text style={styles.title}>
                  Entre com os dados:
                </Text>

                <View style={styles.viewInput}>
                  <Icon name='user' size={20} color={colors.primary} />
                  <Text style={{ paddingLeft: 5, paddingTop: 5 }}>
                    Usuário:
                  </Text>
                </View>

                <TextInput
                  style={[
                    styles.input,
                    {
                      borderColor:
                        isFocusedUser || isFilledUser ?
                          colors.primary :
                          colors.secondary
                    }
                  ]}
                  placeholder="Digite o usuário"
                  onBlur={handleInputUsuarioBlur}
                  onFocus={handleInputUsuarioFocus}
                  onChangeText={(value) => handleInputUsuarioChange(value)}
                />



                <View style={styles.viewInput}>
                  <Icon name='key' size={17} color={colors.primary} />
                  <Text style={{ paddingLeft: 5 }}>
                    Senha:
                  </Text>
                </View>

                <TextInput
                  secureTextEntry={true}
                  style={
                    [
                      styles.input,
                      {
                        borderColor:
                          isFocusedPass || isFilledPass ?
                            colors.primary :
                            colors.secondary
                      }
                    ]}
                  placeholder="Digite a senha"
                  onBlur={handleInputSenhaBlur}
                  onFocus={handleInputSenhaFocus}
                  onChangeText={(value) => handleInputSenhaChange(value)}
                />

                <Text style={styles.recuperarSenha}
                  onPress={() => handleForgottenKey()}>
                  Esqueci minha senha
                </Text>

                <View style={{ marginBottom: 15 }}>
                  <Button
                    disabled={!usuario || !senha}
                    onPress={handleSign}
                  >
                    <Text style={styles.buttonText}>
                      Entrar
                    </Text>
                  </Button>
                  <Button
                    onPress={handleRegister}
                  >
                    <Text style={styles.buttonText}>
                      Cadastrar
                    </Text>
                  </Button>
                </View>
              </View>
              {handleImageSignIn()}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
};

