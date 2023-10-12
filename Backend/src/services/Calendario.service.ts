import { Calendario } from '../entity/Calendario';
import { CalendarioRepository } from '../repositories/Calendario.repository';

export class CalendarioService{
    constructor(private repo: CalendarioRepository){
        // this.getAll = this.getAll.bind(this);
        // this.getOne = this.getOne.bind(this);
        // this.create = this.create.bind(this);
        // this.update = this.update.bind(this);
        // this.delete = this.delete.bind(this);        
    }

    GetAll = async (): Promise<Calendario[]> => {        
        return await this.repo.GetAll();

    }

    GetById = async (id: any): Promise<Calendario[]> => {
        return await this.repo.GetOne(id);
    }

    Create = async (body: Calendario) => {
        return await this.repo.Create(body);

    }

    Update = async (body: Calendario) => {
        return await this.repo.Update(body);

    }

    Delete = async (id: any) => {
        return await this.repo.Delete(id);
    }

}