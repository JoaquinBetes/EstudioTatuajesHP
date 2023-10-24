import { Recorrido } from '../entity/Categoria';
import { RecorridoRepository } from '../repositories/Recorrido.repository';

export class RecorridoService{
    constructor(private repo: RecorridoRepository){
        // this.getAll = this.getAll.bind(this);
        // this.getOne = this.getOne.bind(this);
        // this.create = this.create.bind(this);
        // this.update = this.update.bind(this);
        // this.delete = this.delete.bind(this);        
    }

    GetAll = async (): Promise<Recorrido[]> => {
        return await this.repo.GetAll();

    }

    GetById = async (id: any): Promise<Recorrido> => {
        return await this.repo.GetOne(id);        
    }

    Create = async (body: Recorrido): Promise<Recorrido> => {
        return await this.repo.Create(body);

    }

    Update = async (body: Recorrido): Promise<Recorrido> => {
        return await this.repo.Update(body);

    }

    Delete = async (id: any): Promise<void> => {
        return await this.repo.Delete(id);
    }

}