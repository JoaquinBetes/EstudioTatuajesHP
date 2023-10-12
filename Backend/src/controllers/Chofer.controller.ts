import {NextFunction, Request, Response } from 'express'
import { ChoferService } from '../services/Chofer.service';

export class ChoferController{
    constructor(private choferService: ChoferService) { }

    GetAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const response = await this.choferService.GetAll();
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
            const response = await this.choferService.GetById(req.params.cuit);
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
            const response = await this.choferService.Create(req.body);

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
            const response = await this.choferService.Update(req.body);

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
            const cal = await this.choferService.Delete(req.params.cuit);
            return res.status(200).json(cal);
        } catch (error) {
            return next(error);
        }
    }
}