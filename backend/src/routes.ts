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
import { storeGaleriaValidator } from './validators/GaleriaValidator';
import { storeFotoValidator } from './validators/FotoValidator';
import { storeMedicamentoValidator } from './validators/MedicamentoValidator';
import { storeNoticiaValidator } from './validators/NoticiaValidator';
import { storeNotificacaoValidator } from './validators/NotificacaoValidator';

//controllers
import AlunosController from './controllers/AlunosController';
import UsuariosController from './controllers/UsuariosController';
import AuthController from './controllers/AuthController';
import ProfessoresController from './controllers/ProfessoresController';
import AtividadesController from './controllers/AtividadesController';
import CalendariosController from './controllers/CalendariosController';
import EvacuacoesController from './controllers/EvacuacoesController';
import EventosController from './controllers/EventosController';
import GaleriasController from './controllers/GaleriasController';
import FotosController from './controllers/FotosController';
import MedicamentosController from './controllers/MedicamentosController';
import NoticiasController from './controllers/NoticiasController';
import NotificacoesController from './controllers/NotificacoesController';

//instanciando
const alunosController = new AlunosController();
const usuariosController = new UsuariosController();
const authController = new AuthController();
const professoresController = new ProfessoresController();
const atividadesController = new AtividadesController();
const calendariosController = new CalendariosController();
const evacuacoesController = new EvacuacoesController();
const eventosController = new EventosController();
const galeriasController = new GaleriasController();
const fotosController = new FotosController();
const medicamentosController = new MedicamentosController();
const noticiasController = new NoticiasController();
const notificacoesController = new NotificacoesController();


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
routes.post('/evacuacoes/cadastrar', storeEvacuacaoValidator, evacuacoesController.create)
routes.get('/evacuacoes', evacuacoesController.index);
routes.get('/evacuacoes/:id', evacuacoesController.show);
routes.delete('/evacuacoes/deletar/:id', evacuacoesController.delete);

//Rotas evento
routes.post('/eventos/cadastrar', storeEventoValidator, eventosController.create)
routes.get('/eventos', eventosController.index);
routes.get('/eventos/:id', eventosController.show);
routes.delete('/eventos/deletar/:id', eventosController.delete);

//Rotas galerias
routes.post('/galerias/cadastrar', storeGaleriaValidator, galeriasController.create)
routes.get('/galerias', galeriasController.index);
routes.get('/galerias/:id', galeriasController.show);
routes.delete('/galerias/deletar/:id', galeriasController.delete);

//Rotas fotos
routes.post('/fotos/cadastrar', storeFotoValidator, fotosController.create)
routes.get('/fotos', fotosController.index);
routes.get('/fotos/:id', fotosController.show);
routes.delete('/fotos/deletar/:id', fotosController.delete);

//Rotas medicamentos
routes.post('/medicamentos/cadastrar', storeMedicamentoValidator, medicamentosController.create)
routes.get('/medicamentos', medicamentosController.index);
routes.get('/medicamentos/:id', medicamentosController.show);
routes.delete('/medicamentos/deletar/:id', medicamentosController.delete);

//Rotas noticias
routes.post('/noticias/cadastrar', storeNoticiaValidator, noticiasController.create)
routes.get('/noticias', noticiasController.index);
routes.get('/noticias/:id', noticiasController.show);
routes.delete('/noticias/deletar/:id', noticiasController.delete);

//Rotas notificacoes
routes.post('/notificacoes/cadastrar', storeNotificacaoValidator, notificacoesController.create)
routes.get('/notificacoes', notificacoesController.index);
routes.get('/notificacoes/:id', notificacoesController.show);
routes.get('/notificacoes', notificacoesController.showUnicUser)
routes.delete('/notificacoes/deletar/:id', notificacoesController.delete);


export default routes;
