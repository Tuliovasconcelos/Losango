/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from 'express';
import knex from '../database/connection';

class EvacuacoesController {

    //mostrando todas
    async index(request: Request, response: Response) {
        try {
            const evacuacoes = await knex('evacuacao').select('evacuacao.*');

            evacuacoes ? response.json(evacuacoes) : response.json(false);

            return response
        } catch (error) {
            return console.error(error);
        }
    }

    //buscando pelo id
    async show(request: Request, response: Response) {
        try {
            const { id } = request.params;

            const selectedEvacuacao = await knex('evacuacao').where('id', id).first();

            selectedEvacuacao ? response.json(selectedEvacuacao) : response.json(false);

            return response;
        } catch (error) {
            return console.error(error);
        }
    }

    //cadastro de alunos
    async create(request: Request, response: Response) {
        try {
            //pegando todos os dados da rota
            const {
                descricao,
                status = 1
            } = request.body;


            //montando objeto com os dados
            const evacuacaoData = {
                descricao,
                status
            };

            //inserindo na tabela com knex
            const insertedEvacuacao = await knex('evacuacao').insert(evacuacaoData);

            //verificando se houve resultado
            insertedEvacuacao ? response.json(insertedEvacuacao) : response.json(false);

            return response;
        } catch (error) {
            return console.error(error);
        }

    }

    //exclusão de evacuacoes
    async delete(request: Request, response: Response) {
        try {
            //pegando id da rota
            const { id } = request.params;

            //deletando via knex passando id
            const deletedEvacuacao = await knex('evacuacao').where('id', id).delete();

            //verificando se houve exclusão
            deletedEvacuacao ? response.json(true) : response.json(false);

            return response;
        } catch (error) {
            return console.error(error);
        }
    }
}

export default EvacuacoesController