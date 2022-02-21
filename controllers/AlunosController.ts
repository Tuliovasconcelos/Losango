/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from 'express';
import knex from '../database/connection';

class AlunosController {

  async index(request: Request, response: Response) {

    const alunos = await knex('alunos').select('alunos.*');

    alunos ? response.json(alunos) : response.json(false);

    return response
  }


  //Buscar aluno específico pelo ID
  async show(request: Request, response: Response) {
    const { id } = request.params;

    const selectedaluno = await knex('alunos').where('id', id).first();

    //verifando se houve resultado e retornando o aluno
    selectedaluno ? response.json(selectedaluno) : response.json(false);

    return response
  }


  //cadastro de alunos
  async create(request: Request, response: Response) {

    //pegando todos os dados da rota
    const {
      nome,
      cpf,
      data_nasc,
      nome_mae,
      cpf_mae,
      nome_pai,
      cpf_pai,
      id_turma,
      status = 1
    } = request.body;

    //montando objeto com os dados
    const alunoData = {
      nome,
      cpf,
      data_nasc,
      nome_mae,
      cpf_mae,
      nome_pai,
      cpf_pai,
      id_turma,
      status
    };

    //inserindo na tabela com knex
    const insertedaluno = await knex('alunos').insert(alunoData);

    //verificando se houve resultado
    insertedaluno ? response.json(insertedaluno) : response.json(false);

    return response

  }

  //exclusão de aluno
  async delete(request: Request, response: Response) {

    //pegando id da rota
    const { id } = request.params;

    //deletando via knex passando id
    const deletedaluno = await knex('alunos').where('id', id).delete();

    //verificando se houve exclusão
    deletedaluno ? response.json(true) : response.json(false);

    return response
  }

}

export default AlunosController;
