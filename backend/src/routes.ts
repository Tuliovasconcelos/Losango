import express from 'express';
//validadores de campos
import { storeUsuarioValidator } from './validators/UsuarioValidator';
import { storeAlunoValidator } from './validators/AlunoValidator';
import { storeAuthValidator } from './validators/AuthValidator';
import { storeProfessoresValidator } from './validators/ProfessoresController';

import AlunosController from './controllers/AlunosController';
import UsuariosController from './controllers/UsuariosController';
import AuthController from './controllers/AuthController';
import ProfessoresController from './controllers/ProfessoresController';

//instanciando os alunos
const alunosController = new AlunosController();
const usuariosController = new UsuariosController();
const authController = new AuthController();
const professoresController = new ProfessoresController();


const routes = express.Router();

//Rota Professores 
routes.post('/professores/cadastrar', storeProfessoresValidator, professoresController.create)
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


export default routes;
