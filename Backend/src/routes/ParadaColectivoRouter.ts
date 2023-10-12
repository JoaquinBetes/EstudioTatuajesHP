import express from 'express'

import { ParadaColectivoController } from '../controllers/ParadaColectivo.controller'
import { ParadaColectivoService } from '../services/ParadaColectivo.service';
import { ParadaColectivoRepository } from '../repositories/ParadaColectivo.repository';
const paradaCRouter = express.Router();

const paradaCRepo = new ParadaColectivoRepository();
const paradaCService = new ParadaColectivoService(paradaCRepo);
const paradaCController = new ParadaColectivoController(paradaCService);

paradaCRouter
.get('/paradaColectivo', paradaCController.GetAll)
.get('/paradaColectivo/:cuit', paradaCController.GetById)
.post('/paradaColectivo', paradaCController.Create)
.put('/paradaColectivo/:cuit', paradaCController.Update)
.delete('/paradaColectivo/:cuit', paradaCController.Delete);

export { paradaCRouter };
