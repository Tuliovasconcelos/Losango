/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from 'express';
import knex from '../database/connection';

class RecadosController {

    //mostrando todos os recados
    async indexRecado(request: Request, response: Response) {

        const recados = await knex('recados').select('recados.*');

        recados ? response.json(recados) : response.json(false);

        return response
    }

    //buscando pelo id do recado
    async showRecado(request: Request, response: Response) {

        const { id } = request.params;

        const selectedRecado = await knex('recados').where('id', id).first();

        selectedRecado ? response.json(selectedRecado) : response.json(false);

        return response
    }

    //buscando pelo id do usuario e professor
    async showUnicRecado(request: Request, response: Response) {

        const { id_usuario, id_professor } = request.query;

        const selectedRecados = await knex('recados').
            where('id_usuario', String(id_usuario)).
            where('id_professor', String(id_professor)).
            select('recados.*');

        selectedRecados ? response.json(selectedRecados) : response.json(false);

        return response;
    }

    //cadastro de recados
    async createRecado(request: Request, response: Response) {

        //pegando todos os dados da rota
        const {
            descricao,
            id_usuario,
            id_professor,
            status = 1
        } = request.body;


        //montando objeto com os dados
        const recadoData = {
            descricao,
            id_usuario,
            id_professor,
            status
        };

        //inserindo na tabela com knex
        const insertedRecado = await knex('recados').insert(recadoData);

        //verificando se houve resultado
        insertedRecado ? response.json(insertedRecado) : response.json(false);

        return response

    }

    //exclusão de recados
    async deleteRecado(request: Request, response: Response) {

        //pegando id da rota
        const { id } = request.params;

        //deletando via knex passando id
        const deletedRecado = await knex('recados').where('id', id).delete();

        //verificando se houve exclusão
        deletedRecado ? response.json(true) : response.json(false);

        return response
    }



    //################################# Respostas #################################
    //mostrando todas as respostas
    async indexResposta(request: Request, response: Response) {

        const recados_respostas = await knex('recados_respostas').select('recados_respostas.*');

        recados_respostas ? response.json(recados_respostas) : response.json(false);

        return response
    }

    //buscando pelo id da resposta
    async showResposta(request: Request, response: Response) {

        const { id } = request.params;

        const selectedRecadoResposta = await knex('recados_respostas').where('id', id).first();

        selectedRecadoResposta ? response.json(selectedRecadoResposta) : response.json(false);

        return response
    }

    //buscando pelo id do recado
    async showUnicResposta(request: Request, response: Response) {

        const { id_recado } = request.query;

        const selectedRecadoRespostas = await knex('recados_respostas').
            where('id_recado', Number(id_recado)).
            select('recados.*');

        selectedRecadoRespostas ? response.json(selectedRecadoRespostas) : response.json(false);

        return response;
    }

    //cadastro de respostas
    async createResposta(request: Request, response: Response) {

        //pegando todos os dados da rota
        const {
            descricao,
            id_recado,
            status = 1
        } = request.body;


        //montando objeto com os dados
        const respostaData = {
            descricao,
            id_recado,
            status
        };

        //inserindo na tabela com knex
        const insertedResposta = await knex('recados_respostas').insert(respostaData);

        //verificando se houve resultado
        insertedResposta ? response.json(insertedResposta) : response.json(false);

        return response

    }

    //exclusão de respostas
    async deleteResposta(request: Request, response: Response) {

        //pegando id da rota
        const { id } = request.params;

        //deletando via knex passando id
        const deletedResposta = await knex('recados_respostas').where('id', id).delete();

        //verificando se houve exclusão
        deletedResposta ? response.json(true) : response.json(false);

        return response
    }

}

export default RecadosController