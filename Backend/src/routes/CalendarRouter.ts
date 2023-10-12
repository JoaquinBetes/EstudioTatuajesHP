import express from 'express'

import { CalendarioController } from '../controllers/Calendario.controller'
import { CalendarioService } from '../services/Calendario.service';
import { CalendarioRepository } from '../repositories/Calendario.repository';
const calendarRouter = express.Router();

const calendarioRepo = new CalendarioRepository();
const calendarioService = new CalendarioService(calendarioRepo);
const calendarioController = new CalendarioController(calendarioService);

calendarRouter
.get('/calendario', calendarioController.GetAll)
.get('/calendario/:id', calendarioController.GetById)
.post('/calendario', calendarioController.Create)
.put('/calendario/:id', calendarioController.Update)
.delete('/calendario/:id', calendarioController.Delete);

export { calendarRouter as CalendarRouter };
