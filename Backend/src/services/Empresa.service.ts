import { Empresa } from '../entity/Empresa';
import  { EmpresaRepository } from '../repositories/Empresa.repository';
export class EmpresaService{

constructor(private repo: EmpresaRepository){}

    GetAll = async (): Promise<Empresa[]> => {
        return await this.repo.GetAll();
    }

    GetById = async (cuit: any): Promise<Empresa> => {
        const result = await this.repo.GetOne(cuit);
        if(result === undefined){
            throw { status: 404, message: 'Empresa not found' };
        }
        return result;
    }

    Create = async (body: Empresa): Promise<Empresa> => {
        const result = await this.repo.GetOne(body.Cuit);

        if(result != undefined || result != null){
            throw { status: 400, message: 'Cuit cannot be duplicated' };
        }

        return await this.repo.Create(body);
    }

    Update = async (body: Empresa): Promise<Empresa>=> {
        try {
            // const empresa = await this.repo.GetOne(body.Cuit);
            // if (empresa === undefined) {
            //     throw { status: 404, message: 'Empresa not found' };
            // }
            return await this.repo.Update(body);

        } catch (error) {
            throw error;
        }
    }

    Delete = async (cuit: any) => {
        return await this.repo.Delete(cuit);
    }
}