/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from 'express';
import knex from '../database/connection';

class RefeicoesController {

    //mostrando todas
    async index(request: Request, response: Response) {

        const refeicoes = await knex('refeicoes').select('refeicoes.*');

        refeicoes ? response.json(refeicoes) : response.json(false);

        return response
    }

    //buscando pelo id
    async show(request: Request, response: Response) {

        const { id } = request.params;

        const selectedRefeicao = await knex('refeicoes').where('id', id).first();

        selectedRefeicao ? response.json(selectedRefeicao) : response.json(false);

        return response
    }

    //cadastro de refeicoes
    async create(request: Request, response: Response) {

        //pegando todos os dados da rota
        const {
            descricao,
            status = 1
        } = request.body;


        //montando objeto com os dados
        const refeicaoData = {
            descricao,
            status
        };

        //inserindo na tabela com knex
        const insertedRefeicao = await knex('refeicoes').insert(refeicaoData);

        //verificando se houve resultado
        insertedRefeicao ? response.json(insertedRefeicao) : response.json(false);

        return response

    }

    //exclusão de refeicoes
    async delete(request: Request, response: Response) {

        //pegando id da rota
        const { id } = request.params;

        //deletando via knex passando id
        const deletedRefeicao = await knex('refeicoes').where('id', id).delete();

        //verificando se houve exclusão
        deletedRefeicao ? response.json(true) : response.json(false);

        return response
    }
}

export default RefeicoesController