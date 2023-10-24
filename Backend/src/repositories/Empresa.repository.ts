import { getRepository, Repository } from 'typeorm'
import { Empresa } from '../entity/Cliente'

export class EmpresaRepository{    

    constructor( ){ }
    
    GetAll = async (): Promise<Empresa[]> => {
        return await getRepository(Empresa).find();
        // .createQueryBuilder("user").getMany();
        // return await this.repository.find();
    };

    GetOne = async (cuit: any) => {
        return await getRepository(Empresa).findOne(cuit);
        // if(result === undefined){
        //     throw { status: 404, message: 'Empresa not found' };
        // }
        //return result;
    }

    Create = async (emp: Empresa) => {
        const empresa = await getRepository(Empresa).create(emp);
        const InsertedEmpresa = await getRepository(Empresa).save(empresa);
        if(InsertedEmpresa == undefined){
            throw { status: 404, message: 'Empresa not found' };
        }
        return InsertedEmpresa;
    }

    Update = async (emp: Empresa) => {
        const empresa = await getRepository(Empresa).findOne(emp.Cuit);
        
        if (empresa === undefined) {
            throw { status: 404, message: 'Empresa not found' };            
            
        }
        const entity = await getRepository(Empresa).merge(empresa, emp);
        return await getRepository(Empresa).save(entity);
    }

    Delete = async (cuit: any) => {
        const emp = await getRepository(Empresa).delete(cuit);
        if(emp.affected === null) {
            throw { status: 404, message: 'Empresa not found' };
        }

        return emp;
    }
}