import {NextFunction, Request, Response } from 'express'
import { RecorridoService } from '../services/Recorrido.service';

export class RecorridoController{
    constructor(private recorridoService: RecorridoService) { }

    GetAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const response = await this.recorridoService.GetAll();
            if (!response) {
                throw res.status(404).json("No data found");
              }
        
              return res.status(200).json(response);
        } catch (error) {
            return next(error);
        }
    }

    GetById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const response = await this.recorridoService.GetById(req.params.idLineaColectivo);
            if (!response) {
                throw res.status(404).json("No data found");
              }
        
              return res.status(200).json(response);

        } catch (error) {
            return next(error);
        }
    }

    Create = async(req: Request, res: Response, next: NextFunction) => {
        try {
            const response = await this.recorridoService.Create(req.body);

            if (!response) {
                throw res.status(404).json("No data found");
              }
        
              return res.status(200).json(response);
        } catch (error) {
            return next(error);
        }
    }

    Update = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const response = await this.recorridoService.Update(req.body);

            if (!response) {
                throw res.status(404).json("No data found");
              }
        
              return res.status(200).json(response);
        } catch (error) {
            return next(error);
        }
    }

    Delete = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const response = await this.recorridoService.Delete(req.params.idLineaColectivo);
            return res.status(200).json(response);
        } catch (error) {
            return next(error);
        }
    }
}