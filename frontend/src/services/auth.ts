import api from "./api";

interface Response {
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

async function signIn(userData: userData) {

  const { data } = await api.post<Response>('/usuarios/authLogin', userData)

  return data;
}

export { signIn }
