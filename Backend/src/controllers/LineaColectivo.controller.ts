import {NextFunction, Router, Request, Response } from 'express'
import { LineaColectivoService } from '../services/LineaColectivo.service';

export class LineaColectivoController{
    constructor(private lineaColectivoService: LineaColectivoService) { }

    GetAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const response = await this.lineaColectivoService.GetAll();
            if (!response) {
                throw res.status(404).json("No data found");
              }
        
              return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json(error);
            // return next(error);
        }
    }

    GetById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const response = await this.lineaColectivoService.GetById(req.params.id);
            if (!response) {
                throw res.status(404).json("No data found");
              }
        
              return res.status(200).json(response);

        } catch (error) {
            return res.status(500).json(error);
            // return next(error);
        }
    }

    Create = async(req: Request, res: Response, next: NextFunction) => {
        try {
            const response = await this.lineaColectivoService.Create(req.body);

            // if (response != null) {
            //     throw res.status(404).json("No data found");
            //   }
        
              return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json(error);
            // return next(error);
        }
    }

    Update = async (req: Request, res: Response, next: NextFunction) => {
        try {
            req.body.IdLineaColectivo = req.params.id;
            const response = await this.lineaColectivoService.Update(req.body);

            if (!response) {
                throw res.status(404).json("No data found");
              }
        
              return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json(error);
            //return next(error);
        }
    }

    Delete = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const response = await this.lineaColectivoService.Delete(req.params.id);
            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json(error);
            // return next(error);
        }
    }
}