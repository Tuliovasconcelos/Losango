import { useState } from 'react';
import React from 'react';
import {
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
  Alert,
  ScrollView,
  SafeAreaView,
  Image
} from 'react-native';
import colors from '../../styles/colors';
import { styles } from './styles';
import { Button } from '../../components/Button';
import { forgottenKey } from '../../services/forgottenKey';
import Icon from 'react-native-vector-icons/Feather';
import { Header } from '../../components/HeaderPublic';



export default function ForgottenKey() {

  const [email, setEmail] = useState('');
  const [cpfFilho, setCpfFilho] = useState('');

  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedCpfFilho, setIsFocusedCpfFilho] = useState(false);

  const [isFilledEmail, setIsFilledEmail] = useState(false);
  const [isFilledCpfFilho, setIsFilledCpfFilho] = useState(false);


  function handleInputEmailBlur() {
    setIsFocusedEmail(false);
    setIsFilledEmail(!!email);
  }

  function handleInputEmailFocus() {
    setIsFocusedEmail(true)
  }

  function handleInputEmailChange(value: string) {
    setIsFilledEmail(!!value);
    setEmail(value);
  }


  function handleInputCpfFilhoBlur() {
    setIsFocusedCpfFilho(false);
    setIsFilledCpfFilho(!!cpfFilho);
  }

  function handleInputCpfFilhoFocus() {
    setIsFocusedCpfFilho(true)
  }

  function handleInputCpfChange(value: string) {
    setIsFilledCpfFilho(!!value);
    setCpfFilho(value);
  }

  async function handleRegister() {
    if (!email || !cpfFilho) {
      return Alert.alert("Ops...", "Informe o usuário e senha de acesso!");
    }
    try {
      const registerData = {
        email: email,
        cpfFilho: cpfFilho
      }

      forgottenKey(registerData);

      Alert.alert('Registrado com sucesso!');

    } catch (error) {
      Alert.alert("Ops...", "Não foi possível efetuar o cadastro.")
    }

  }
  function handleLogo() {
    if (isFocusedEmail ||
      isFocusedCpfFilho) {
      return null
    } else {
      return <Image source={require('../../assets/logo.png')} resizeMode="contain" style={styles.image} />
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}

      >
        <TouchableWithoutFeedback
          disabled={
            !isFocusedEmail ||
            !isFocusedCpfFilho
          }

          onPress={Keyboard.dismiss}
        >
          <View style={styles.content}>
            <Header />
            <ScrollView>
              <View style={styles.form}>
                <View style={styles.viewImage}>
                  {handleLogo()}
                </View>
                <View style={styles.viewInput}>
                  <Icon name='user' size={18} color={colors.primary} />
                  <Text style={styles.labelInput}>
                    Nome:
                  </Text>
                </View>
                <TextInput
                  style={[
                    styles.input,
                    {
                      borderColor:
                        isFocusedEmail || isFilledEmail ?
                          colors.primary :
                          colors.secondary
                    }
                  ]}
                  placeholder="Digite o nome"
                  onBlur={handleInputEmailBlur}
                  onFocus={handleInputEmailFocus}
                  onChangeText={(value) => handleInputEmailChange(value)}
                />

                <View style={styles.viewInput}>
                  <Icon name='user' size={20} color={colors.primary} />
                  <Text style={styles.labelInput}>
                    Cpf:
                  </Text>
                </View>
                <TextInput
                  style={[
                    styles.input,
                    {
                      borderColor:
                        isFocusedCpfFilho || isFilledCpfFilho ?
                          colors.primary :
                          colors.secondary
                    }
                  ]}
                  placeholder="Digite o seu cpf"
                  onBlur={handleInputCpfFilhoBlur}
                  onFocus={handleInputCpfFilhoFocus}
                  onChangeText={(value) => handleInputCpfChange(value)}
                />
                <View style={styles.viewButton}>
                  <Button
                    disabled={!email || !cpfFilho}
                    onPress={handleRegister}
                  >
                    <Text style={styles.buttonText}>
                      Cadastrar
                    </Text>
                  </Button>
                </View>
              </View>
            </ScrollView>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
};
