/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from 'express';
import knex from '../database/connection';
import criptografar from '../uteis/criptografia';

class UsuariosController {

  async index(request: Request, response: Response) {

    const usuarios = await knex('usuarios').select('usuarios.*');

    usuarios ? response.json(usuarios) : response.json(false);

    return response

  }

  //Buscar usuario específico pelo ID
  async show(request: Request, response: Response) {
    const { id } = request.params;

    const selectedUsuario = await knex('usuarios').where('id', id).first();

    //verifando se houve resultado e retornando o usuario
    selectedUsuario ? response.json(selectedUsuario) : response.json(false);

  }

  //cadastro de usuarios
  async create(request: Request, response: Response) {
    //pegando todos os dados da rota
    const {
      nome,
      cpf,
      email,
      telefone,
      usuario,
      senha,
      cpf_filho,
      status = 1
    } = request.body;

    //montando objeto com os dados
    const usuarioData = {
      nome,
      cpf,
      email,
      telefone,
      usuario,
      senha,
      cpf_filho,
      status
    };

    //verificando se o filho está cadastrado na tabela de alunos
    const cadFilhoAluno = await knex('alunos').where('cpf', usuarioData.cpf_filho).first();

    //criptografando senha
    usuarioData.senha = criptografar(usuarioData.senha);

    console.log(usuarioData)

    if (cadFilhoAluno) {
      //inserindo na tabela com knex
      const insertedUsuario = await knex('usuarios').insert(usuarioData);
      //verificando se houve resultado
      insertedUsuario ? response.json(insertedUsuario) : response.json(false);
    }
    else {
      return response.status(400).json(false);

    }
  }

  //exclusão de usuario
  async delete(request: Request, response: Response) {

    //pegando id da rota
    const { id } = request.params;

    //deletando via knex passando id
    const deletedUsuario = await knex('usuarios').where('id', id).delete();

    //verificando se houve exclusão
    deletedUsuario ? response.json(deletedUsuario) : response.json(false);
  }

}

export default UsuariosController;
