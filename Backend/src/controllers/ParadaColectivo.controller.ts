import {NextFunction, Router, Request, Response } from 'express'
import { ParadaColectivoService } from '../services/ParadaColectivo.service';

export class ParadaColectivoController{
    constructor(private paradaColectivoService: ParadaColectivoService) { }

    GetAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const response = await this.paradaColectivoService.GetAll();
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
            const response = await this.paradaColectivoService.GetById(req.params.idLineaColectivo);
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
            const response = await this.paradaColectivoService.Create(req.body);

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
            const response = await this.paradaColectivoService.Update(req.body);

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
            const response = await this.paradaColectivoService.Delete(req.params.idLineaColectivo);
            return res.status(200).json(response);
        } catch (error) {
            return next(error);
        }
    }
}