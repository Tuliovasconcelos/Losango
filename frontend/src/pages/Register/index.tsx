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
import { register } from '../../services/register';
import Icon from 'react-native-vector-icons/Feather';
import { Header } from '../../components/HeaderPublic';



export default function Register() {

  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [cpfFilho, setCpfFilho] = useState('');

  const [isFocusedNome, setIsFocusedNome] = useState(false);
  const [isFocusedCpf, setIsFocusedCpf] = useState(false);
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedTelefone, setIsFocusedTelefone] = useState(false);
  const [isFocusedUsuario, setIsFocusedUsuario] = useState(false);
  const [isFocusedSenha, setIsFocusedSenha] = useState(false);
  const [isFocusedCpfFilho, setIsFocusedCpfFilho] = useState(false);

  const [isFilledNome, setIsFilledNome] = useState(false);
  const [isFilledCpf, setIsFilledCpf] = useState(false);
  const [isFilledEmail, setIsFilledEmail] = useState(false);
  const [isFilledTelefone, setIsFilledTelefone] = useState(false);
  const [isFilledUsuario, setIsFilledUsuario] = useState(false);
  const [isFilledSenha, setIsFilledSenha] = useState(false);
  const [isFilledCpfFilho, setIsFilledCpfFilho] = useState(false);


  function handleInputNomeBlur() {
    setIsFocusedNome(false);
    setIsFilledNome(!!nome);
  }

  function handleInputNomeFocus() {
    setIsFocusedNome(true)
  }

  function handleInputNomeChange(value: string) {
    setIsFilledNome(!!value);
    setNome(value);
  }


  function handleInputCpfBlur() {
    setIsFocusedCpf(false);
    setIsFilledCpf(!!cpf);
  }

  function handleInputCpfFocus() {
    setIsFocusedCpf(true)
  }

  function handleInputCpfChange(value: string) {
    setIsFilledCpf(!!value);
    setCpf(value);
  }

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

  function handleInputTelefoneBlur() {
    setIsFocusedTelefone(false);
    setIsFilledTelefone(!!telefone);
  }

  function handleInputTelefoneFocus() {
    setIsFocusedTelefone(true)
  }

  function handleInputTelefoneChange(value: string) {
    setIsFilledTelefone(!!value);
    setTelefone(value);
  }

  function handleInputUsuarioBlur() {
    setIsFocusedUsuario(false);
    setIsFilledUsuario(!!usuario);
  }

  function handleInputUsuarioFocus() {
    setIsFocusedUsuario(true)
  }

  function handleInputUsuarioChange(value: string) {
    setIsFilledUsuario(!!value);
    setUsuario(value);
  }

  function handleInputSenhaBlur() {
    setIsFocusedSenha(false);
    setIsFilledSenha(!!senha);
  }

  function handleInputSenhaFocus() {
    setIsFocusedSenha(true)
  }

  function handleInputSenhaChange(value: string) {
    setIsFilledSenha(!!value);
    setSenha(value);
  }

  function handleInputCpfFilhoBlur() {
    setIsFocusedCpfFilho(false);
    setIsFilledCpfFilho(!!cpfFilho);
  }

  function handleInputCpfFilhoFocus() {
    setIsFocusedCpfFilho(true)
  }

  function handleInputCpfFilhoChange(value: string) {
    setIsFilledCpfFilho(!!value);
    setCpfFilho(value);
  }


  async function handleRegister() {
    if (!usuario || !senha) {
      return Alert.alert("Ops...", "Informe o usuário e senha de acesso!");
    }
    try {
      const registerData = {
        nome: nome,
        cpf: cpf,
        email: email,
        telefone: telefone,
        usuario: usuario,
        senha: senha,
        cpf_filho: cpfFilho
      }

      register(registerData);

      Alert.alert('Registrado com sucesso!');

    } catch (error) {
      Alert.alert("Ops...", "Não foi possível efetuar o cadastro.")
    }

  }
  function handleLogo() {
    if (isFocusedNome ||
      isFocusedCpf ||
      isFocusedEmail ||
      isFocusedTelefone ||
      isFocusedUsuario ||
      isFocusedSenha ||
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
            !isFocusedNome ||
            !isFocusedCpf ||
            !isFocusedEmail ||
            !isFocusedTelefone ||
            !isFocusedUsuario ||
            !isFocusedSenha ||
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
                        isFocusedNome || isFilledNome ?
                          colors.primary :
                          colors.secondary
                    }
                  ]}
                  placeholder="Digite o nome"
                  onBlur={handleInputNomeBlur}
                  onFocus={handleInputNomeFocus}
                  onChangeText={(value) => handleInputNomeChange(value)}
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
                        isFocusedCpf || isFilledCpf ?
                          colors.primary :
                          colors.secondary
                    }
                  ]}
                  placeholder="Digite o seu cpf"
                  onBlur={handleInputCpfBlur}
                  onFocus={handleInputCpfFocus}
                  onChangeText={(value) => handleInputCpfChange(value)}
                />

                <View style={styles.viewInput}>
                  <Icon name='mail' size={18} color={colors.primary} />
                  <Text style={styles.labelInput}>
                    Email:
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
                  placeholder="Digite o email"
                  onBlur={handleInputEmailBlur}
                  onFocus={handleInputEmailFocus}
                  onChangeText={(value) => handleInputEmailChange(value)}
                />

                <View style={styles.viewInput}>
                  <Icon name='phone' size={20} color={colors.primary} />
                  <Text style={styles.labelInput}>
                    Telefone:
                  </Text>
                </View>
                <TextInput
                  style={[
                    styles.input,
                    {
                      borderColor:
                        isFocusedTelefone || isFilledTelefone ?
                          colors.primary :
                          colors.secondary
                    }
                  ]}
                  placeholder="Digite o telefone"
                  onBlur={handleInputTelefoneBlur}
                  onFocus={handleInputTelefoneFocus}
                  onChangeText={(value) => handleInputTelefoneChange(value)}
                />

                <View style={styles.viewInput}>
                  <Icon name='user' size={20} color={colors.primary} />
                  <Text style={styles.labelInput}>
                    Usuário:
                  </Text>
                </View>
                <TextInput
                  style={[
                    styles.input,
                    {
                      borderColor:
                        isFocusedUsuario || isFilledUsuario ?
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
                  <Icon name='key' size={20} color={colors.primary} />
                  <Text style={styles.labelInput}>
                    Senha:
                  </Text>
                </View>
                <TextInput
                  style={[
                    styles.input,
                    {
                      borderColor:
                        isFocusedSenha || isFilledSenha ?
                          colors.primary :
                          colors.secondary
                    }
                  ]}
                  placeholder="Digite a senha"
                  onBlur={handleInputSenhaBlur}
                  onFocus={handleInputSenhaFocus}
                  onChangeText={(value) => handleInputSenhaChange(value)}
                />

                <View style={styles.viewInput}>
                  <Icon name='user' size={20} color={colors.primary} />
                  <Text style={styles.labelInput}>
                    Cpf Filho:
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
                  placeholder="Digite o cpf do filho"
                  onBlur={handleInputCpfFilhoBlur}
                  onFocus={handleInputCpfFilhoFocus}
                  onChangeText={(value) => handleInputCpfFilhoChange(value)}
                />

                <View style={styles.viewButton}>
                  <Button
                    disabled={!usuario || !senha}
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
