/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from 'express';
import knex from '../database/connection';

class MedicamentosController {

    //mostrando todas
    async index(request: Request, response: Response) {
        try {
            const medicamentos = await knex('medicamentos').select('medicamentos.*');

            medicamentos ? response.json(medicamentos) : response.json(false);

            return response;
        } catch (error) {
            return console.error(error);
        }
    }

    //buscando pelo id
    async show(request: Request, response: Response) {
        try {
            const { id } = request.params;

            const selectedMedicamento = await knex('medicamentos').where('id', id).first();

            selectedMedicamento ? response.json(selectedMedicamento) : response.json(false);

            return response;
        } catch (error) {
            return console.error(error);
        }
    }


    //buscando pelo id do aluno
    async showUnicUser(request: Request, response: Response) {
        try {
            const { id_aluno } = request.query;

            const selectedMedicamentos = await knex('medicamentos').where('id_aluno', Number(id_aluno)).select('medicamentos.*');

            selectedMedicamentos ? response.json(selectedMedicamentos) : response.json(false);

            return response;
        } catch (error) {
            return console.error(error);
        }
    }

    //cadastro de medicamentos
    async create(request: Request, response: Response) {
        try {
            //pegando todos os dados da rota
            const {
                descricao,
                quantidade,
                periodo,
                horarios,
                foto_receita,
                id_aluno,
                status = 1
            } = request.body;


            //montando objeto com os dados
            const medicamentoData = {
                descricao,
                quantidade,
                periodo,
                horarios,
                foto_receita,
                id_aluno,
                status
            };

            //inserindo na tabela com knex
            const insertedMedicamento = await knex('medicamentos').insert(medicamentoData);

            //verificando se houve resultado
            insertedMedicamento ? response.json(insertedMedicamento) : response.json(false);

            return response;
        } catch (error) {
            return console.error(error);
        }

    }

    //exclusão de medicamentos
    async delete(request: Request, response: Response) {
        try {
            //pegando id da rota
            const { id } = request.params;

            //deletando via knex passando id
            const deletedMedicamento = await knex('medicamentos').where('id', id).delete();

            //verificando se houve exclusão
            deletedMedicamento ? response.json(true) : response.json(false);

            return response;
        } catch (error) {
            return console.error(error);
        }
    }
}

export default MedicamentosController