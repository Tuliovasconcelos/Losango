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
    email: String,
    cpfFilho: String
}

export async function forgottenKey(userData: registerData) {

    const { data } = await api.post<Response>('/usuarios/cadastrar', userData)

    return data;
}
