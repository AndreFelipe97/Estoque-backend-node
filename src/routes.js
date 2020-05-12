import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import ItemController from './app/controllers/ItemController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import WithdrawalsController from './app/controllers/WithdrawalsController';

import authMiddlewares from './app/middlewares/authMiddlewares';

const routes = new Router();
const upload = multer(multerConfig);

// Rotas de login
routes.post('/sessions', SessionController.store);

// Rotas de usuários
routes.post('/users', UserController.store);
routes.put('/users', authMiddlewares, UserController.update);

// Rotas de itens
routes.post('/items', authMiddlewares, ItemController.store);
routes.put('/items/:id', authMiddlewares, ItemController.update);
routes.get('/items', authMiddlewares, ItemController.listing);
routes.post('/files', authMiddlewares, upload.single('file'), FileController.store);

// Rotas de retiradas
routes.post('/withdrawals/:id', authMiddlewares, WithdrawalsController.store);
routes.get('/withdrawals', authMiddlewares, WithdrawalsController.listing);

export default routes;
