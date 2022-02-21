/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from 'express';
import knex from '../database/connection';

class FotosController {

    //mostrando todas
    async index(request: Request, response: Response) {

        const fotos = await knex('fotos').select('fotos.*');

        fotos ? response.json(fotos) : response.json(false);

        return response
    }

    //buscando pelo id
    async show(request: Request, response: Response) {

        const { id } = request.params;

        const selectedFoto = await knex('fotos').where('id', id).first();

        selectedFoto ? response.json(selectedFoto) : response.json(false);

        return response
    }

    //buscando pelo id da galeria
    async showUnicFotos(request: Request, response: Response) {

        const { id_galeria } = request.query;

        const selectedFotos = await knex('fotos').where('id_galeria', Number(id_galeria)).select('fotos.*');

        selectedFotos ? response.json(selectedFotos) : response.json(false);

        return response;
    }


    //cadastro de Fotos
    async create(request: Request, response: Response) {

        //pegando todos os dados da rota
        const {
            imagem,
            id_galeria,
            status = 1
        } = request.body;


        //montando objeto com os dados
        const fotoData = {
            imagem,
            id_galeria,
            status
        };

        //inserindo na tabela com knex
        const insertedFoto = await knex('fotos').insert(fotoData);

        //verificando se houve resultado
        insertedFoto ? response.json(insertedFoto) : response.json(false);

        return response

    }

    //exclusão de Fotos
    async delete(request: Request, response: Response) {

        //pegando id da rota
        const { id } = request.params;

        //deletando via knex passando id
        const deletedFoto = await knex('fotos').where('id', id).delete();

        //verificando se houve exclusão
        deletedFoto ? response.json(true) : response.json(false);

        return response
    }
}

export default FotosController