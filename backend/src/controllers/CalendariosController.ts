/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from 'express';
import knex from '../database/connection';

class CalendariosController {

    //mostrando todas
    async index(request: Request, response: Response) {

        const calendarios = await knex('calendario').select('calendario.*');

        calendarios ? response.json(calendarios) : response.json(false);

        return response
    }

    //buscando pelo id
    async show(request: Request, response: Response) {

        const { id } = request.params;

        const selectedCalendario = await knex('calendario').where('id', id).first();

        selectedCalendario ? response.json(selectedCalendario) : response.json(false);

        return response
    }

    //cadastro de calendario
    async create(request: Request, response: Response) {

        //pegando todos os dados da rota
        const {
            descricao,
            status = 1
        } = request.body;


        //montando objeto com os dados
        const calendarioData = {
            descricao,
            status
        };

        //inserindo na tabela com knex
        const insertedCalendario = await knex('calendario').insert(calendarioData);

        //verificando se houve resultado
        insertedCalendario ? response.json(insertedCalendario) : response.json(false);

        return response

    }

    //exclusão de calendario
    async delete(request: Request, response: Response) {

        //pegando id da rota
        const { id } = request.params;

        //deletando via knex passando id
        const deletedCalendario = await knex('calendario').where('id', id).delete();

        //verificando se houve exclusão
        deletedCalendario ? response.json(true) : response.json(false);

        return response
    }
}

export default CalendariosController