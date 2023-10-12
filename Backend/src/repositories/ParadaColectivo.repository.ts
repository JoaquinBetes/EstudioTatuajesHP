import {Request, Response} from 'express'
import { getRepository, Repository } from 'typeorm'
import { Parada } from '../entity/Parada'

export class ParadaColectivoRepository{
    // private repositorys = new Repository<Parada>();

    // constructor(
    //     private repository: Repository<Parada>
    // ){
    //     //this.repositorys = repository;
    //     this.getParadas = this.getParadas.bind(this);
    //     this.getParada = this.getParada.bind(this);
    //     this.createParada = this.createParada.bind(this);
    //     this.updateParada = this.updateParada.bind(this);
    //     this.deleteParada = this.deleteParada.bind(this);
    // }
    constructor(){}

    GetAll = async (): Promise<Parada[]> => {
        return await Parada.find();
    };

    GetOne = async (id: any) => {
        return await Parada.findOne(id);
        // if(result === undefined){
        //     throw { status: 404, message: 'Parada not found' };
        // }
        // return result;
    }

    Create = async (parada: Parada) => {
        const paradaC = await Parada.create(parada);
        const InsertedParadaColectivo = await Parada.save(paradaC);
        if(InsertedParadaColectivo == undefined){
            throw { status: 404, message: 'ParadaColectivo not found' };
        }
        return InsertedParadaColectivo;
    }

    Update = async (paradaC: Parada) => {
        const lineaParada = await Parada.findOne(paradaC.NroParada);
        
        if (lineaParada === undefined) {
            throw { status: 404, message: 'ParadaColectivo not found' };            
            
        }
        const entity = await Parada.merge(lineaParada, paradaC);
        const result = await Parada.save(entity);
        return result;
    }

    Delete = async (id: any) => {
        const paradaC = await Parada.delete(id);
        if(paradaC.affected === null) {
            throw { status: 404, message: 'ParadaColectivo not found' };
        }
    }

}