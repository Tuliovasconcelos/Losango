/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from 'express';
import knex from '../database/connection';

class ProblemasSaude {

  async index(request: Request, response: Response) {
    try {
      const problemasSaude = await knex('problemas_saude_aluno').select('problemas_saude_aluno.*');

      problemasSaude ? response.json(problemasSaude) : response.json(false);

      return response;
    } catch (error) {
      return console.error(error);
    }
  }

  //buscando pelo id
  async show(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const selectedProblemasSaude = await knex('problemas_saude_aluno').where('id', id).first();

      selectedProblemasSaude ? response.json(selectedProblemasSaude) : response.json(false);

      return response;
    } catch (error) {
      return console.error(error);
    }
  }

  //buscando pelo id
  async showUnicProblemaSaude(request: Request, response: Response) {
    try {
      const { id_aluno } = request.query;

      const selectedProblemasSaude = await knex('problemas_saude_aluno').
        where('id_aluno', Number(id_aluno)).
        select('problemas_saude_aluno.*');

      selectedProblemasSaude ? response.json(selectedProblemasSaude) : response.json(false);

      return response;
    } catch (error) {
      return console.error(error);
    }
  }

  //cadastro de evacuacao
  async create(request: Request, response: Response) {
    try {
      //pegando todos os dados da rota
      const {
        id_aluno,
        descricao,
        tratamento,
        status = 1
      } = request.body;

      //montando objeto com os dados
      const problemaSaudeData = {
        id_aluno,
        descricao,
        tratamento,
        status
      };

      //inserindo na tabela com knex
      const insertedProblemaSaude = await knex('problemas_saude_aluno').insert(problemaSaudeData);

      //verificando se houve resultado
      insertedProblemaSaude ? response.json(insertedProblemaSaude) : response.json(false);

      return response;
    } catch (error) {
      return console.error(error);
    }

  }

  //exclusão de evacuacao
  async delete(request: Request, response: Response) {
    try {
      //pegando id da rota
      const { id } = request.params;

      //deletando via knex passando id
      const deletedProblemaSaude = await knex('problemas_saude_aluno').where('id', id).delete();

      //verificando se houve exclusão
      deletedProblemaSaude ? response.json(true) : response.json(false);

      return response;
    } catch (error) {
      return console.error(error);
    }
  }

}

export default ProblemasSaude;
