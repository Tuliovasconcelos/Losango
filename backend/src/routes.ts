import express from 'express';
//validadores de campos
import { storeUsuarioValidator } from './validators/UsuarioValidator';
import { storeAlunoValidator } from './validators/AlunoValidator';
import { storeAuthValidator } from './validators/AuthValidator';
import { storeProfessorValidator } from './validators/ProfessorValidator';
import { storeAtividadeValidator } from './validators/AtividadeValidator';
import { storeCalendarioValidator } from './validators/CalendarioValidator';
import { storeEvacuacaoValidator } from './validators/EvacuacaoValidator';
import { storeEventoValidator } from './validators/EventoValidator';

import AlunosController from './controllers/AlunosController';
import UsuariosController from './controllers/UsuariosController';
import AuthController from './controllers/AuthController';
import ProfessoresController from './controllers/ProfessoresController';
import AtividadesController from './controllers/AtividadesController';
import CalendariosController from './controllers/CalendariosController';
import EvacuacoesController from './controllers/EvacuacoesController';
import EventosController from './controllers/EventosController';

//instanciando os alunos
const alunosController = new AlunosController();
const usuariosController = new UsuariosController();
const authController = new AuthController();
const professoresController = new ProfessoresController();
const atividadesController = new AtividadesController();
const calendariosController = new CalendariosController();
const evacuacaoController = new EvacuacoesController();
const eventosController = new EventosController();


const routes = express.Router();

//Rota Professores 
routes.post('/professores/cadastrar', storeProfessorValidator, professoresController.create)
routes.get('/professores', professoresController.index);
routes.get('/professores/:id', professoresController.show);
routes.delete('/professores/deletar/:id', professoresController.delete);

//Rotas Alunos
routes.post('/alunos/cadastrar', storeAlunoValidator, alunosController.create,);
routes.get('/alunos', alunosController.index);
routes.get('/alunos/:id', alunosController.show);
routes.delete('/alunos/:id', alunosController.delete);

//Rotas usuarios
routes.post('/usuarios/cadastrar', storeUsuarioValidator, usuariosController.create);
routes.get('/usuarios', usuariosController.index);
routes.get('/usuarios/:id', usuariosController.show);
routes.delete('/usuarios/deletar/:id', usuariosController.delete);

//Rota de autenticacao  
routes.post('/usuarios/authLogin', storeAuthValidator, authController.show);

//Rotas atividades
routes.post('/atividades/cadastrar', storeAtividadeValidator, atividadesController.create)
routes.get('/atividades', atividadesController.index);
routes.get('/atividades/:id', atividadesController.show);
routes.delete('/atividades/deletar/:id', atividadesController.delete);


//Rotas calendarios
routes.post('/calendarios/cadastrar', storeCalendarioValidator, calendariosController.create)
routes.get('/calendarios', calendariosController.index);
routes.get('/calendarios/:id', calendariosController.show);
routes.delete('/calendarios/deletar/:id', calendariosController.delete);

//Rotas evacuacao
routes.post('/evacuacoes/cadastrar', storeEvacuacaoValidator, evacuacaoController.create)
routes.get('/evacuacoes', evacuacaoController.index);
routes.get('/evacuacoes/:id', evacuacaoController.show);
routes.delete('/evacuacoes/deletar/:id', evacuacaoController.delete);

//Rotas evento
routes.post('/eventos/cadastrar', storeEventoValidator, eventosController.create)
routes.get('/eventos', eventosController.index);
routes.get('/eventos/:id', eventosController.show);
routes.delete('/eventos/deletar/:id', eventosController.delete);


export default routes;
