/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from 'express';
import knex from '../database/connection';

class GaleriasController {

    //mostrando todas
    async index(request: Request, response: Response) {
        try {
            const galerias = await knex('galerias').select('galerias.*');

            galerias ? response.json(galerias) : response.json(false);

            return response;
        } catch (error) {
            return console.error(error);
        }
    }

    //buscando pelo id
    async show(request: Request, response: Response) {
        try {
            const { id } = request.params;

            const selectedGaleria = await knex('galerias').where('id', id).first();

            selectedGaleria ? response.json(selectedGaleria) : response.json(false);

            return response;
        } catch (error) {
            return console.error(error);
        }
    }

    //cadastro de galerias
    async create(request: Request, response: Response) {
        try {
            //pegando todos os dados da rota
            const {
                descricao,
                status = 1
            } = request.body;


            //montando objeto com os dados
            const galeriaData = {
                descricao,
                status
            };

            //inserindo na tabela com knex
            const insertedGaleria = await knex('galerias').insert(galeriaData);

            //verificando se houve resultado
            insertedGaleria ? response.json(insertedGaleria) : response.json(false);

            return response;
        } catch (error) {
            return console.error(error);
        }

    }

    //exclusão de galerias
    async delete(request: Request, response: Response) {
        try {
            //pegando id da rota
            const { id } = request.params;

            //deletando via knex passando id
            const deletedGaleria = await knex('galerias').where('id', id).delete();

            //verificando se houve exclusão
            deletedGaleria ? response.json(true) : response.json(false);

            return response;
        } catch (error) {
            return console.error(error);
        }
    }
}

export default GaleriasController