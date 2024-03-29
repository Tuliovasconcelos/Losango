import React, { createContext, useState, useEffect, useContext } from 'react';
import { AsyncStorage } from 'react-native';
import * as auth from '../services/auth';
import { Alert } from 'react-native';


interface User {
  id: number;
  usuario: string;
  cpf: string;
  email: string;
  telefone: string;
  senha: string;
  cpf_filho: string;
  data_cadastro: Date,
  status: boolean
}

interface userData {
  usuario: string,
  senha: string
}

interface AuthContextData {
  signed: boolean;
  user: User | null;
  loading: boolean;
  signIn(userData: userData): Promise<void>;
  signOut(): void;
}



const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem('@losango:User');

      if (storagedUser) {
        setUser(JSON.parse(storagedUser));
      }

      setLoading(false);
    }

    loadStorageData();
  });

  async function signIn(userData: userData) {

    try {
      const response = await auth.signIn(userData);

      if (response.id) {
        setUser({
          id: response.id,
          usuario: response.usuario,
          cpf: response.cpf,
          email: response.email,
          telefone: response.telefone,
          senha: response.senha,
          cpf_filho: response.cpf_filho,
          data_cadastro: response.data_cadastro,
          status: response.status
        });
        await AsyncStorage.setItem('@losango:User', JSON.stringify(response));

      } else {
        Alert.alert("Ops... Não foi possível acessar 😕!", String(response), undefined);
      }
    } catch (error) {
      console.error(error)
    }

  }

  async function signOut() {
    await AsyncStorage.clear();
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.');
  }

  return context;
}

export { AuthProvider, useAuth };