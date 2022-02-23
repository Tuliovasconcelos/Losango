import { Request, Response } from 'express';
import knex from '../database/connection';


class ProfessoresController {

    //get todos os professores
    async index(request: Request, response: Response) {
        try {
            const professores = await knex('professores').select('professores.*');

            professores ? response.json(professores) : response.json(false);

            return response;
        } catch (error) {
            return console.error(error);
        }
    }

    //get professor específico pelo ID
    async show(request: Request, response: Response) {
        try {
            const { id } = request.params;

            const selectedProfessor = await knex('professores').where('id', id).first();

            //verifando se houve resultado e retornando o aluno
            selectedProfessor ? response.json(selectedProfessor) : response.json(false);

            return response;
        } catch (error) {
            return console.error(error);
        }
    }

    //create professores
    async create(request: Request, response: Response) {
        try {
            const {
                nome,
                cpf,
                email,
                status = 1
            } = request.body;

            //montando objeto com os dados
            const professor = {
                nome,
                cpf,
                email,
                status
            };

            const insertedProfessor = await knex('professores').insert(professor);

            insertedProfessor ? response.json(insertedProfessor) : response.json(false);

            return response;
        } catch (error) {
            return console.error(error);
        }
    }

    //delete professor específico pelo ID
    async delete(request: Request, response: Response) {
        try {
            const { id } = request.params;

            const deletedProfessor = await knex('professores').where('id', id).delete();

            deletedProfessor ? response.json(true) : response.json(false);

            return response;
        } catch (error) {
            return console.error(error);
        }
    }
}

export default ProfessoresController