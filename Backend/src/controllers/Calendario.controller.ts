import {NextFunction, Router, Request, Response } from 'express'
import { CalendarioService } from '../services/Calendario.service';

export class CalendarioController{
    constructor(private calendarioService: CalendarioService) { }

    GetAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const response = await this.calendarioService.GetAll();
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
            const response = await this.calendarioService.GetById(req.params.cuit);
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
            const response = await this.calendarioService.Create(req.body);

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
            const response = await this.calendarioService.Update(req.body);

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
            const cal = await this.calendarioService.Delete(req.params.cuit);
            return res.status(200).json(cal);
        } catch (error) {
            return next(error);
        }
    }
}