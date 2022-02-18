/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from 'express';
import knex from '../database/connection';

class NoticiasController {

    //mostrando todas
    async index(request: Request, response: Response) {

        const noticias = await knex('noticias').select('noticias.*');

        noticias ? response.json(noticias) : response.json(false);

        return response
    }

    //buscando pelo id
    async show(request: Request, response: Response) {

        const { id } = request.params;

        const selectedNoticia = await knex('noticias').where('id', id).first();

        selectedNoticia ? response.json(selectedNoticia) : response.json(false);

        return response
    }

    //cadastro de noticias
    async create(request: Request, response: Response) {

        //pegando todos os dados da rota
        const {
            descricao,
            imagem,
            status = 1
        } = request.body;


        //montando objeto com os dados
        const galeriaData = {
            descricao,
            imagem,
            status
        };

        //inserindo na tabela com knex
        const insertedNoticia = await knex('noticias').insert(galeriaData);

        //verificando se houve resultado
        insertedNoticia ? response.json(insertedNoticia) : response.json(false);

        return response

    }

    //exclusão de noticias
    async delete(request: Request, response: Response) {

        //pegando id da rota
        const { id } = request.params;

        //deletando via knex passando id
        const deletedNoticia = await knex('noticias').where('id', id).delete();

        //verificando se houve exclusão
        deletedNoticia ? response.json(true) : response.json(false);

        return response
    }
}

export default NoticiasController