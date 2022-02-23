import api from "./api";

interface userData {
  usuario: string;
  senha: string;
}

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

export async function signIn(userData: userData): Promise<Response> {

  return await api.post('/usuarios/authLogin', userData);

}
