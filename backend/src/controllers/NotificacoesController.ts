/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from 'express';
import knex from '../database/connection';

class notificacoesController {

    //mostrando todas
    async index(request: Request, response: Response) {

        const notificacoes = await knex('notificacoes').select('notificacoes.*');

        notificacoes ? response.json(notificacoes) : response.json(false);

        return response
    }

    //buscando pelo id
    async show(request: Request, response: Response) {

        const { id } = request.params;

        const selectedNotificacao = await knex('notificacoes').where('id', id).first();

        selectedNotificacao ? response.json(selectedNotificacao) : response.json(false);

        return response
    }

    //buscando pelo id do usuario
    async showUnicUser(request: Request, response: Response) {

        const { id_usuario } = request.query;

        const selectedNotificacoes = await knex('notificacoes').where('id_usuario', Number(id_usuario)).select('notificacoes.*');

        selectedNotificacoes ? response.json(selectedNotificacoes) : response.json(false);

        return response;
    }


    //cadastro de notificacoes
    async create(request: Request, response: Response) {

        //pegando todos os dados da rota
        const {
            descricao,
            id_usuario,
            status = 1
        } = request.body;


        //montando objeto com os dados
        const galeriaData = {
            descricao,
            id_usuario,
            status
        };

        //inserindo na tabela com knex
        const insertedNotificacao = await knex('notificacoes').insert(galeriaData);

        //verificando se houve resultado
        insertedNotificacao ? response.json(insertedNotificacao) : response.json(false);

        return response

    }

    //exclusão de notificacoes
    async delete(request: Request, response: Response) {

        //pegando id da rota
        const { id } = request.params;

        //deletando via knex passando id
        const deletedNotificacao = await knex('notificacoes').where('id', id).delete();

        //verificando se houve exclusão
        deletedNotificacao ? response.json(true) : response.json(false);

        return response
    }
}

export default notificacoesController