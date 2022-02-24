import api from "./api";

interface Response {
  user: {
    id: number;
    usuario: string;
    cpf: string;
    email: string;
    telefone: string;
    senha: string;
    cpf_filho: string;
    data_cadastro: Date,
    status: boolean
  };
}

interface userData {
  usuario: string,
  senha: string
}

async function signIn(userData: userData): Promise<Response> {

  const authData = await api.post('', userData);

  return authData.data;

}

export { signIn }
