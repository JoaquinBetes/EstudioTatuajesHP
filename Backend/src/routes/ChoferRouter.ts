import express from 'express'

import { ChoferController } from '../controllers/Chofer.controller'
import { ChoferService } from '../services/Chofer.service';
import { ChoferRepository } from '../repositories/Chofer.repository';
const choferRouter = express.Router();

const choferRepo = new ChoferRepository();
const choferService = new ChoferService(choferRepo);
const choferController = new ChoferController(choferService);

choferRouter
.get('/chofer', choferController.GetAll)
.get('/chofer/:cuil', choferController.GetById)
.post('/chofer', choferController.Create)
.put('/chofer/:cuil', choferController.Update)
.delete('/chofer/:cuil', choferController.Delete);

export { choferRouter };
