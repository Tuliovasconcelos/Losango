/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from 'express';
import knex from '../database/connection';

class SaudesController {

    //mostrando todas
    async index(request: Request, response: Response) {
        try {

            const saudes = await knex('saude').select('saude.*');

            saudes ? response.json(saudes) : response.json(false);

            return response;
        } catch (error) {
            return console.error(error);
        }
    }

    //buscando pelo id
    async show(request: Request, response: Response) {
        try {
            const { id } = request.params;

            const selectedSaude = await knex('saude').where('id', id).first();

            selectedSaude ? response.json(selectedSaude) : response.json(false);

            return response;
        } catch (error) {
            return console.error(error);
        }
    }

    //cadastro de saudes
    async create(request: Request, response: Response) {
        try {
            //pegando todos os dados da rota
            const {
                descricao,
                status = 1
            } = request.body;


            //montando objeto com os dados
            const saudeData = {
                descricao,
                status
            };

            //inserindo na tabela com knex
            const insertedSaude = await knex('saude').insert(saudeData);

            //verificando se houve resultado
            insertedSaude ? response.json(insertedSaude) : response.json(false);

            return response;
        } catch (error) {
            return console.error(error);
        }

    }

    //exclusão de saudes
    async delete(request: Request, response: Response) {
        try {
            //pegando id da rota
            const { id } = request.params;

            //deletando via knex passando id
            const deletedSaude = await knex('saude').where('id', id).delete();

            //verificando se houve exclusão
            deletedSaude ? response.json(true) : response.json(false);

            return response;
        } catch (error) {
            return console.error(error);
        }
    }
}

export default SaudesController