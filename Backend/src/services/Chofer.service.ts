import { Chofer } from '../entity/Chofer';
import { ChoferRepository } from '../repositories/Chofer.repository';

export class ChoferService{
    constructor(private repo: ChoferRepository){
        // this.getAll = this.getAll.bind(this);
        // this.getOne = this.getOne.bind(this);
        // this.create = this.create.bind(this);
        // this.update = this.update.bind(this);
        // this.delete = this.delete.bind(this);        
    }

    GetAll = async (): Promise<Chofer[]> => {
        return await this.repo.GetAll();

    }

    GetById = async (id: any): Promise<Chofer> => {
        return await this.repo.GetOne(id);
    }

    Create = async (body: Chofer): Promise<Chofer> => {
        return await this.repo.Create(body);

    }

    Update = async (body: Chofer): Promise<Chofer> => {
        return await this.repo.Update(body);

    }

    Delete = async (id: any): Promise<void> =>{
        return await this.repo.Delete(id);
    }

}