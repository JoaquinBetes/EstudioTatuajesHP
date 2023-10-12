import { LineaColectivo } from '../entity/LineaColectivo';
import { LineaColectivoRepository } from '../repositories/LineaColectivo.repository';

export class LineaColectivoService{
    constructor(private repo: LineaColectivoRepository){
        // this.getAll = this.getAll.bind(this);
        // this.getOne = this.getOne.bind(this);
        // this.create = this.create.bind(this);
        // this.update = this.update.bind(this);
        // this.delete = this.delete.bind(this);        
    }

    GetAll = async (): Promise<LineaColectivo[]> => {
        return await this.repo.GetAll();
    }

    GetById = async (id: any): Promise<LineaColectivo> => {
        const result = await this.repo.GetOne(id);
        if(result === undefined){
            throw { status: 404, message: 'LineaColectivo not found' };
        }
        return result;
    }

    Create = async (body: LineaColectivo): Promise<LineaColectivo> => {
        const result = await this.repo.GetOne(body.idLineaColectivo);

        if(result != undefined || result != null){
            throw { status: 400, message: 'IdLineaColectivo cannot be duplicated' };
        }

        return await this.repo.Create(body);
        // if(result != undefined || result != null){
        //     throw { status: 400, message: 'Cuit cannot be duplicated' };
        // }

    }

    Update = async (body: LineaColectivo): Promise<LineaColectivo> => {
        try {
            return await this.repo.Update(body);    
        } catch (error) {
            throw error;
        }
    }

    Delete = async (id: any) => {
        return await this.repo.Delete(id);
    }

}