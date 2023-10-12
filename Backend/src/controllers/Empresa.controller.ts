import {NextFunction, Request, Response } from 'express'
import { EmpresaService } from '../services/Empresa.service';
export class EmpresaController{

constructor(private empresaS: EmpresaService) {
}

    GetAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const response = await this.empresaS.GetAll();
            
            if (response.length === 0) {
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
            const id  = req.params.cuit;
            const response = await this.empresaS.GetById(parseInt(id));            
      
            if (!response) {
                throw res.status(404).json("No data found");
            }
            return res.status(200).json(response);
          } catch (error) {
            return res.status(500).json(error);
            // return next(error);
          }
    }

    Create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const response = await this.empresaS.Create(req.body);
            
            // const validationError = await validate(test);
      
            // if (validationError.length > 0) {
            //   res.status(400).json(
            //     validationError.map((error) => {
            //       return {
            //         [error.property]: Object.values(error.constraints),
            //       };
            //     })
            //   );
            // }
      
            // return res.status(200).json(emp);
            // const response = await this._testServices.Create(new Test(req.body));
            return res.status(201).json(response);
          } catch (error) {
            return res.status(500).json(error);
            // return next(error);
          }
    }

    Update = async (req: Request, res: Response, next: NextFunction) => {
        try {
            req.body.cuit  = req.params.cuit;
            const response = await this.empresaS.Update(req.body);
            // const response = await this._testServices.Update(
            //   parseInt(id),
            //   new Test(req.body)
            // );
      
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
        const id = req.params.cuit;
            const response = await this.empresaS.Delete(parseInt(id));
            if (!response) {
              throw res.status(404).json("No data found");
            }
            return res.status(200).json(response);
      } catch (error) {
        return res.status(500).json(error);
        // return next(error);
      }       
    }
}