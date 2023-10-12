import { Parada } from '../entity/Parada';
import { ParadaColectivoRepository } from '../repositories/ParadaColectivo.repository';

export class ParadaColectivoService{
    constructor(private repo: ParadaColectivoRepository){
        // this.getAll = this.getAll.bind(this);
        // this.getOne = this.getOne.bind(this);
        // this.create = this.create.bind(this);
        // this.update = this.update.bind(this);
        // this.delete = this.delete.bind(this);        
    }

    GetAll = async (): Promise<Parada[]> => {
        return await this.repo.GetAll();

    }

    GetById = async (id: any): Promise<Parada> => {
        return await this.repo.GetOne(id);
    }

    Create = async (body: Parada): Promise<Parada> => {
        return await this.repo.Create(body);

    }

    Update = async (body: Parada): Promise<Parada> => {
        return await this.repo.Update(body);

    }

    Delete = async (id: any): Promise<void> => {
        return await this.repo.Delete(id);
    }

}