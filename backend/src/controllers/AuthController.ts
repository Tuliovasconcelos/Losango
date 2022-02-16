import { Request, Response } from 'express';
import knex from '../database/connection';
import criptografar from '../uteis/criptografia';

class AuthController {
    async show(request: Request, response: Response) {

        const {
            usuario,
            senha,
        } = request.body;

        const dadosUsuario = {
            usuario,
            senha
        }
        //verificando se existe o usuário cadastrado
        const usuarioValido = await knex('usuarios').where('usuario', String(dadosUsuario.usuario)).select('senha');

        //verifica usuário 
        if (!String(usuarioValido)) {
            response.status(400).send({ error: 'Nome de usuário e senha incorretos' })
        } else {
            //verifica senha
            if (usuarioValido[0].senha != criptografar(String(dadosUsuario.senha))) {
                response.status(400).send({ error: 'Senha incorreta' })
            } else {
                response.json(await knex('usuarios').where('usuario', String(dadosUsuario.usuario)))
            }
        }

        return response;
    }
}

export default AuthController