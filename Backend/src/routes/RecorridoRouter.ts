import express from 'express'

import { RecorridoController } from '../controllers/Recorrido.controller'
import { RecorridoService } from '../services/Recorrido.service';
import { RecorridoRepository } from '../repositories/Recorrido.repository';
const recorridoRouter = express.Router();

const recorridoRepo = new RecorridoRepository();
const recorridoService = new RecorridoService(recorridoRepo);
const recorridoController = new RecorridoController(recorridoService);

recorridoRouter
.get('/recorrido', recorridoController.GetAll)
.get('/recorrido/:id', recorridoController.GetById)
.post('/recorrido', recorridoController.Create)
.put('/recorrido/:id', recorridoController.Update)
.delete('/recorrido/:id', recorridoController.Delete);

export { recorridoRouter };
