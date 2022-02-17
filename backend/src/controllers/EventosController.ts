/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from 'express';
import knex from '../database/connection';

class EventosController {

    //mostrando todas
    async index(request: Request, response: Response) {

        const eventos = await knex('eventos').select('eventos.*');

        eventos ? response.json(eventos) : response.json(false);

        return response
    }

    //buscando pelo id
    async show(request: Request, response: Response) {

        const { id } = request.params;

        const selectedEvento = await knex('eventos').where('id', id).first();

        selectedEvento ? response.json(selectedEvento) : response.json(false);

        return response
    }

    //cadastro de Eventos
    async create(request: Request, response: Response) {

        //pegando todos os dados da rota
        const {
            descricao,
            data_evento,
            id_calendario,
            status = 1
        } = request.body;


        //montando objeto com os dados
        const eventoData = {
            descricao,
            data_evento,
            id_calendario,
            status
        };

        //inserindo na tabela com knex
        const insertedEvento = await knex('eventos').insert(eventoData);

        //verificando se houve resultado
        insertedEvento ? response.json(insertedEvento) : response.json(false);

        return response

    }

    //exclusão de eventos
    async delete(request: Request, response: Response) {

        //pegando id da rota
        const { id } = request.params;

        //deletando via knex passando id
        const deletedEvento = await knex('eventos').where('id', id).delete();

        //verificando se houve exclusão
        deletedEvento ? response.json(true) : response.json(false);

        return response
    }
}

export default EventosController