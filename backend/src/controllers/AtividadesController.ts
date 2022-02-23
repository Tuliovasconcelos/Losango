/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from 'express';
import knex from '../database/connection';

class AtividadesController {

    //mostrando todas
    async index(request: Request, response: Response) {
        try {
            const atividades = await knex('atividades').select('atividades.*');

            atividades ? response.json(atividades) : response.json(false);

            return response
        } catch (error) {
            return console.error(error);
        }
    }

    //buscando pelo id
    async show(request: Request, response: Response) {
        try {
            const { id } = request.params;

            const selectedAtividade = await knex('atividades').where('id', id).first();

            selectedAtividade ? response.json(selectedAtividade) : response.json(false);

            return response
        } catch (error) {
            return console.error(error);
        }
    }

    //cadastro de atividades
    async create(request: Request, response: Response) {
        try {
            //pegando todos os dados da rota
            const {
                descricao,
                status = 1
            } = request.body;


            //montando objeto com os dados
            const atividadeData = {
                descricao,
                status
            };

            //inserindo na tabela com knex
            const insertedAtividade = await knex('atividades').insert(atividadeData);

            //verificando se houve resultado
            insertedAtividade ? response.json(insertedAtividade) : response.json(false);

            return response
        } catch (error) {
            return console.error(error);
        }

    }

    //exclusão de atividades
    async delete(request: Request, response: Response) {

        try {
            //pegando id da rota
            const { id } = request.params;

            //deletando via knex passando id
            const deletedAtividade = await knex('atividades').where('id', id).delete();

            //verificando se houve exclusão
            deletedAtividade ? response.json(true) : response.json(false);

            return response
        } catch (error) {
            return console.error(error);
        }
    }
}

export default AtividadesController