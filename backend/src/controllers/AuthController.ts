import { Request, Response } from 'express';
import knex from '../database/connection';
import criptografar from '../uteis/criptografia';

class AuthController {
    async show(request: Request, response: Response) {
        try {
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
                response.send('Nome de usuário ou senha incorretos')
            } else {
                //verifica senha
                if (usuarioValido[0].senha != criptografar(String(dadosUsuario.senha))) {
                    response.send('Nome de usuário ou senha incorretos')
                } else {
                    response.json(await knex('usuarios').where('usuario', String(dadosUsuario.usuario)).first())
                }
            }

            return response;
        } catch (error: any) {
            return console.error(error);
        }
    }
}

export default AuthController