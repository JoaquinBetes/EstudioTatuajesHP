import 'reflect-metadata';

import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import { createConnection } from 'typeorm'

import { CalendarRouter } from './routes/CalendarRouter';
import { choferRouter } from './routes/ChoferRouter';
import { lineaCRouter } from './routes/LineaColectivoRouter';
import { paradaCRouter } from './routes/ParadaColectivoRouter';
import { recorridoRouter } from './routes/RecorridoRouter';
import { empresaRouter } from './routes/EmpresaRouter';


createConnection();

const app = express()

//middlewars
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(empresaRouter,
    CalendarRouter,
    choferRouter,
    lineaCRouter,
    paradaCRouter,
    recorridoRouter);

app.listen(3000, () => {
    console.log('Server on port', 3000);
});
