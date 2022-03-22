import api from "./api";

interface Response {
    id: Number,
    nome: String,
    cpf: String,
    email: String,
    telefone: String,
    usuario: String,
    senha: String,
    cpf_filho: String
    data_cadastro: Date,
    status: boolean
}

interface registerData {
    nome: String,
    cpf: String,
    email: String,
    telefone: String,
    usuario: String,
    senha: String,
    cpf_filho: String
}

export async function register(userData: registerData) {

    const { data } = await api.post<Response>('/usuarios/cadastrar', userData)

    return data;
}
