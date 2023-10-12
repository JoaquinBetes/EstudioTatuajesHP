import express from 'express'

import { EmpresaController } from '../controllers/Empresa.controller'
import { EmpresaService } from '../services/Empresa.service';
import { EmpresaRepository } from '../repositories/Empresa.repository';
const empresaRouter = express.Router();

const empresaRepo = new EmpresaRepository();
const empresaService = new EmpresaService(empresaRepo);
const empresaController = new EmpresaController(empresaService);

empresaRouter
.get('/empresa', empresaController.GetAll)
.get('/empresa/:cuit', empresaController.GetById)
.post('/empresa', empresaController.Create)
.put('/empresa/:cuit', empresaController.Update)
.delete('/empresa/:cuit', empresaController.Delete);

export { empresaRouter };
