import {Request, Response} from 'express'
import { getRepository, createQueryBuilder, Repository } from 'typeorm'
import { Recorrido } from '../entity/Recorrido'

export class RecorridoRepository{
    // private repositorys = new Repository<Recorrido>();

    // constructor(
    //     private repository: Repository<Recorrido>
    // ){
    //     // this.repositorys = repository;
    //     this.getRecorridos = this.getRecorridos.bind(this);
    //     this.getRecorrido = this.getRecorrido.bind(this);
    //     this.createRecorrido = this.createRecorrido.bind(this);
    //     this.updateRecorrido = this.updateRecorrido.bind(this);
    //     this.deleteRecorrido = this.deleteRecorrido.bind(this);
    // }
    constructor(){}

    GetAll = async (): Promise<Recorrido[]> => {
        return await Recorrido.find();
    };

    GetOne = async (id: any) => {
        return await Recorrido.findOne(id);
        // if(result === undefined){
        //     throw { status: 404, message: 'Recorrido not found' };
        // }
        // return result;
    }

    Create = async (rec: Recorrido) => {
        const recorrido = await Recorrido.create(rec);
        const RecorridoInserted = await Recorrido.save(recorrido);
        if(RecorridoInserted == undefined){
            throw { status: 404, message: 'Recorrido not found' };
        }
        return RecorridoInserted;
    }

    Update = async (rec: Recorrido) => {
        const recorrido = await Recorrido.findOne(rec.IdRecorrido);
        
        if (rec === undefined) {
            throw { status: 404, message: 'Recorrido not found' };            
            
        }
        const entity = await Recorrido.merge(rec, rec);
        const result = await Recorrido.save(entity);
        return result;
    }

    Delete = async (id: any) => {
        const paradaC = await Recorrido.delete(id);
        if(paradaC.affected === null) {
            throw { status: 404, message: 'Recorrido not found' };
        }
    }
}