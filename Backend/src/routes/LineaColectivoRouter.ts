import express from 'express'

import { LineaColectivoController } from '../controllers/LineaColectivo.controller'
import { LineaColectivoService } from '../services/LineaColectivo.service';
import { LineaColectivoRepository } from '../repositories/LineaColectivo.repository';
const lineaCRouter = express.Router();

const lineaCRepo = new LineaColectivoRepository();
const lineaCService = new LineaColectivoService(lineaCRepo);
const lineaCController = new LineaColectivoController(lineaCService);

lineaCRouter
.get('/lineaColectivo', lineaCController.GetAll)
.get('/lineaColectivo/:id', lineaCController.GetById)
.post('/lineaColectivo', lineaCController.Create)
.put('/lineaColectivo/:id', lineaCController.Update)
.delete('/lineaColectivo/:id', lineaCController.Delete);

export { lineaCRouter };
