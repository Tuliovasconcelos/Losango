/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from 'express';
import knex from '../database/connection';

class TurmasController {

    //mostrando todas
    async index(request: Request, response: Response) {

        const turmas = await knex('turmas').select('turmas.*');

        turmas ? response.json(turmas) : response.json(false);

        return response
    }

    //buscando pelo id
    async show(request: Request, response: Response) {

        const { id } = request.params;

        const selectedTurma = await knex('turmas').where('id', id).first();

        selectedTurma ? response.json(selectedTurma) : response.json(false);

        return response
    }

    //cadastro de turmas
    async create(request: Request, response: Response) {

        //pegando todos os dados da rota
        const {
            descricao,
            status = 1
        } = request.body;


        //montando objeto com os dados
        const turmaData = {
            descricao,
            status
        };

        //inserindo na tabela com knex
        const insertedTurma = await knex('turmas').insert(turmaData);

        //verificando se houve resultado
        insertedTurma ? response.json(insertedTurma) : response.json(false);

        return response

    }

    //exclusão de turmas
    async delete(request: Request, response: Response) {

        //pegando id da rota
        const { id } = request.params;

        //deletando via knex passando id
        const deletedTurma = await knex('turmas').where('id', id).delete();

        //verificando se houve exclusão
        deletedTurma ? response.json(true) : response.json(false);

        return response
    }
}

export default TurmasController