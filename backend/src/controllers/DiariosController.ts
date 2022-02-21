/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from 'express';
import knex from '../database/connection';

class DiariosController {
    //############################## Diários ##############################
    //mostrando todas
    async index(request: Request, response: Response) {

        const diarios = await knex('diarios').select('diarios.*');

        diarios ? response.json(diarios) : response.json(false);

        return response
    }

    //buscando pelo id
    async show(request: Request, response: Response) {

        const { id } = request.params;

        const selectedDiario = await knex('diarios').where('id', id).first();

        selectedDiario ? response.json(selectedDiario) : response.json(false);

        return response
    }

    //buscando pelo id
    async showUnicDiario(request: Request, response: Response) {

        const { id_aluno, id_professor } = request.query;

        const selectedDiario = await knex('diarios').
            where('id_aluno', Number(id_aluno)).
            where('id_professor', Number(id_professor)).
            select('diarios.*');

        selectedDiario ? response.json(selectedDiario) : response.json(false);

        return response;
    }

    //cadastro de diarios
    async create(request: Request, response: Response) {

        //pegando todos os dados da rota
        const {
            descricao,
            id_aluno,
            id_professor,
            status = 1
        } = request.body;


        //montando objeto com os dados
        const diarioData = {
            descricao,
            id_aluno,
            id_professor,
            status
        };

        //inserindo na tabela com knex
        const insertedDiario = await knex('diarios').insert(diarioData);

        //verificando se houve resultado
        insertedDiario ? response.json(insertedDiario) : response.json(false);

        return response

    }

    //exclusão de diarios
    async delete(request: Request, response: Response) {

        //pegando id da rota
        const { id } = request.params;

        //deletando via knex passando id
        const deletedDiario = await knex('diarios').where('id', id).delete();

        //verificando se houve exclusão
        deletedDiario ? response.json(true) : response.json(false);

        return response
    }



    //############################## Atividades diário aluno ##############################

    async indexAtividades(request: Request, response: Response) {

        const atividades = await knex('atividades_diario_aluno').select('atividades_diario_aluno.*');

        atividades ? response.json(atividades) : response.json(false);

        return response
    }

    //buscando pelo id
    async showAtividade(request: Request, response: Response) {

        const { id } = request.params;

        const selectedAtividade = await knex('atividades').where('id', id).first();

        selectedAtividade ? response.json(selectedAtividade) : response.json(false);

        return response
    }

    //buscando pelo id
    async showUnicAtividade(request: Request, response: Response) {

        const { id_atividades, id_aluno, id_diario } = request.query;

        const selectedAtividade = await knex('atividades_diario_aluno').
            where('id_atividades', Number(id_atividades)).
            where('id_aluno', Number(id_aluno)).
            where('id_diario', Number(id_diario)).
            select('atividades_diario_aluno.*');

        selectedAtividade ? response.json(selectedAtividade) : response.json(false);

        return response;
    }

    //cadastro de atividades
    async createAtividades(request: Request, response: Response) {

        //pegando todos os dados da rota
        const {
            id_atividades,
            id_aluno,
            id_diario,
            participacao,
            status = 1
        } = request.body;


        //montando objeto com os dados
        const atividadeData = {
            id_atividades,
            id_aluno,
            id_diario,
            participacao,
            status
        };

        //inserindo na tabela com knex
        const insertedAtividade = await knex('atividades_diario_aluno').insert(atividadeData);

        //verificando se houve resultado
        insertedAtividade ? response.json(insertedAtividade) : response.json(false);

        return response

    }

    //exclusão de atividades
    async deleteAtividade(request: Request, response: Response) {
        //pegando id da rota
        const { id } = request.params;

        //deletando via knex passando id
        const deletedAtividade = await knex('atividades_diario_aluno').where('id', id).delete();

        //verificando se houve exclusão
        deletedAtividade ? response.json(true) : response.json(false);

        return response
    }


    //############################## Evacuacao diário aluno ##############################
    async indexEvacuacoes(request: Request, response: Response) {

        const evacuacoes = await knex('evacuacao_diario_aluno').select('evacuacao_diario_aluno.*');

        evacuacoes ? response.json(evacuacoes) : response.json(false);

        return response
    }

    //buscando pelo id
    async showEvacuacao(request: Request, response: Response) {

        const { id } = request.params;

        const selectedEvacuacao = await knex('evacuacao_diario_aluno').where('id', id).first();

        selectedEvacuacao ? response.json(selectedEvacuacao) : response.json(false);

        return response
    }

    //buscando pelo id
    async showUnicEvacuacao(request: Request, response: Response) {

        const { id_evacuacao, id_diario, id_aluno } = request.query;

        const selectedEvacuacao = await knex('evacuacao_diario_aluno').
            where('id_evacuacao', Number(id_evacuacao)).
            where('id_diario', Number(id_diario)).
            where('id_aluno', Number(id_aluno)).
            select('diarios.*');

        selectedEvacuacao ? response.json(selectedEvacuacao) : response.json(false);

        return response;
    }

    //cadastro de evacuacao
    async createEvacuacao(request: Request, response: Response) {

        //pegando todos os dados da rota
        const {
            id_evacuacao,
            id_diario,
            id_aluno,
            aparencia,
            status = 1
        } = request.body;


        //montando objeto com os dados
        const evacuacaoData = {
            id_evacuacao,
            id_diario,
            id_aluno,
            aparencia,
            status
        };

        //inserindo na tabela com knex
        const insertedEvacuacao = await knex('evacuacao_diario_aluno').insert(evacuacaoData);

        //verificando se houve resultado
        insertedEvacuacao ? response.json(insertedEvacuacao) : response.json(false);

        return response

    }

    //exclusão de evacuacao
    async deleteEvacuacao(request: Request, response: Response) {

        //pegando id da rota
        const { id } = request.params;

        //deletando via knex passando id
        const deletedEvacuacao = await knex('evacuacao_diario_aluno').where('id', id).delete();

        //verificando se houve exclusão
        deletedEvacuacao ? response.json(true) : response.json(false);

        return response
    }


    //############################## Informacoes casa diário aluno ##############################
    async indexInformacoes(request: Request, response: Response) {

        const informacoes = await knex('informacoes_casa_diario_aluno').select('informacoes_casa_diario_aluno.*');

        informacoes ? response.json(informacoes) : response.json(false);

        return response
    }

    //buscando pelo id
    async showInformacao(request: Request, response: Response) {

        const { id } = request.params;

        const selectedInformacao = await knex('informacoes_casa_diario_aluno').where('id', id).first();

        selectedInformacao ? response.json(selectedInformacao) : response.json(false);

        return response
    }

    //buscando pelo id
    async showUnicInformacao(request: Request, response: Response) {

        const { id_diario, id_aluno } = request.query;

        const selectedInformacao = await knex('informacoes_casa_diario_aluno').
            where('id_diario', Number(id_diario)).
            where('id_aluno', Number(id_aluno)).
            select('informacoes_casa_diario_aluno.*');

        selectedInformacao ? response.json(selectedInformacao) : response.json(false);

        return response;
    }

    //cadastro de evacuacao
    async createInformacao(request: Request, response: Response) {

        //pegando todos os dados da rota
        const {
            descricao,
            id_diario,
            id_aluno,
            status = 1
        } = request.body;

        //montando objeto com os dados
        const informacaoData = {
            descricao,
            id_diario,
            id_aluno,
            status
        };

        //inserindo na tabela com knex
        const insertedInformacao = await knex('informacoes_casa_diario_aluno').insert(informacaoData);

        //verificando se houve resultado
        insertedInformacao ? response.json(insertedInformacao) : response.json(false);

        return response

    }

    //exclusão de evacuacao
    async deleteInformacao(request: Request, response: Response) {

        //pegando id da rota
        const { id } = request.params;

        //deletando via knex passando id
        const deletedInformacao = await knex('informacoes_casa_diario_aluno').where('id', id).delete();

        //verificando se houve exclusão
        deletedInformacao ? response.json(true) : response.json(false);

        return response
    }

    //############################## Observações diário aluno ##############################
    async indexObservacoes(request: Request, response: Response) {

        const observacoes = await knex('observacoes_diario_aluno').select('observacoes_diario_aluno.*');

        observacoes ? response.json(observacoes) : response.json(false);

        return response
    }

    //buscando pelo id
    async showObservacao(request: Request, response: Response) {

        const { id } = request.params;

        const selectedObservacao = await knex('observacoes_diario_aluno').where('id', id).first();

        selectedObservacao ? response.json(selectedObservacao) : response.json(false);

        return response
    }

    //buscando pelo id
    async showUnicObservacao(request: Request, response: Response) {

        const { id_diario, id_aluno } = request.query;

        const selectedObservacao = await knex('observacoes_diario_aluno').
            where('id_aluno', Number(id_aluno)).
            where('id_diario', Number(id_diario)).
            select('observacoes_diario_aluno.*');

        selectedObservacao ? response.json(selectedObservacao) : response.json(false);

        return response;
    }

    //cadastro de evacuacao
    async createObservacao(request: Request, response: Response) {

        //pegando todos os dados da rota
        const {
            descricao,
            id_aluno,
            id_diario,
            status = 1
        } = request.body;

        //montando objeto com os dados
        const observacaoData = {
            descricao,
            id_aluno,
            id_diario,
            status
        };

        //inserindo na tabela com knex
        const insertedObservacao = await knex('observacoes_diario_aluno').insert(observacaoData);

        //verificando se houve resultado
        insertedObservacao ? response.json(insertedObservacao) : response.json(false);

        return response

    }

    //exclusão de evacuacao
    async deleteObservacao(request: Request, response: Response) {

        //pegando id da rota
        const { id } = request.params;

        //deletando via knex passando id
        const deletedObservacao = await knex('observacoes_diario_aluno').where('id', id).delete();

        //verificando se houve exclusão
        deletedObservacao ? response.json(true) : response.json(false);

        return response
    }

    //############################## Refeições diário aluno ##############################
    async indexRefeicoes(request: Request, response: Response) {

        const refeicoes = await knex('refeicoes_diario_aluno').select('refeicoes_diario_aluno.*');

        refeicoes ? response.json(refeicoes) : response.json(false);

        return response
    }

    //buscando pelo id
    async showRefeicao(request: Request, response: Response) {

        const { id } = request.params;

        const selectedRefeicao = await knex('refeicoes_diario_aluno').where('id', id).first();

        selectedRefeicao ? response.json(selectedRefeicao) : response.json(false);

        return response
    }

    //buscando pelo id
    async showUnicRefeicao(request: Request, response: Response) {

        const { id_diario, id_aluno } = request.query;

        const selectedRefeicao = await knex('refeicoes_diario_aluno').
            where('id_refeicoes', Number(id_aluno)).
            where('id_diario', Number(id_diario)).
            where('id_aluno', Number(id_diario)).
            select('refeicoes_diario_aluno.*');

        selectedRefeicao ? response.json(selectedRefeicao) : response.json(false);

        return response;
    }

    //cadastro de evacuacao
    async createRefeicao(request: Request, response: Response) {

        //pegando todos os dados da rota
        const {
            id_refeicoes,
            id_diario,
            id_aluno,
            nota,
            status = 1
        } = request.body;

        //montando objeto com os dados
        const refeicaoData = {
            id_refeicoes,
            id_diario,
            id_aluno,
            nota,
            status
        };

        //inserindo na tabela com knex
        const insertedRefeicao = await knex('refeicoes_diario_aluno').insert(refeicaoData);

        //verificando se houve resultado
        insertedRefeicao ? response.json(insertedRefeicao) : response.json(false);

        return response

    }

    //exclusão de evacuacao
    async deleteRefeicao(request: Request, response: Response) {

        //pegando id da rota
        const { id } = request.params;

        //deletando via knex passando id
        const deletedRefeicao = await knex('refeicoes_diario_aluno').where('id', id).delete();

        //verificando se houve exclusão
        deletedRefeicao ? response.json(true) : response.json(false);

        return response
    }

    //############################## Saude diário aluno ##############################
    async indexSaudes(request: Request, response: Response) {

        const saudes = await knex('saude_diario_aluno').select('saude_diario_aluno.*');

        saudes ? response.json(saudes) : response.json(false);

        return response
    }

    //buscando pelo id
    async showSaude(request: Request, response: Response) {

        const { id } = request.params;

        const selectedSaude = await knex('saude_diario_aluno').where('id', id).first();

        selectedSaude ? response.json(selectedSaude) : response.json(false);

        return response
    }

    //buscando pelo id
    async showUnicSaude(request: Request, response: Response) {

        const { id_diario, id_aluno } = request.query;

        const selectedSaude = await knex('saude_diario_aluno').
            where('id_saude', Number(id_aluno)).
            where('id_aluno', Number(id_diario)).
            where('id_diario', Number(id_diario)).
            select('saude_diario_aluno.*');

        selectedSaude ? response.json(selectedSaude) : response.json(false);

        return response;
    }

    //cadastro de evacuacao
    async createSaude(request: Request, response: Response) {

        //pegando todos os dados da rota
        const {
            id_saude,
            id_aluno,
            id_diario,
            situacao,
            status = 1
        } = request.body;

        //montando objeto com os dados
        const saudeData = {
            id_saude,
            id_aluno,
            id_diario,
            situacao,
            status
        };

        //inserindo na tabela com knex
        const insertedSaude = await knex('saude_diario_aluno').insert(saudeData);

        //verificando se houve resultado
        insertedSaude ? response.json(insertedSaude) : response.json(false);

        return response

    }

    //exclusão de evacuacao
    async deleteSaude(request: Request, response: Response) {

        //pegando id da rota
        const { id } = request.params;

        //deletando via knex passando id
        const deletedSaude = await knex('saude_diario_aluno').where('id', id).delete();

        //verificando se houve exclusão
        deletedSaude ? response.json(true) : response.json(false);

        return response
    }

}

export default DiariosController