import {Request, Response} from 'express'
import { getRepository, createQueryBuilder, Repository } from 'typeorm'
import { LineaColectivo } from '../entity/HorarioAtension'

export class LineaColectivoRepository{
    //private repositorys = new Repository<LineaColectivo>();

    // constructor(
    //     private repository :Repository<LineaColectivo>
    // ){
    //     // this.repositorys = repository;
    //     this.getLineaColectivos = this.getLineaColectivos.bind(this);
    //     this.getLineaColectivo = this.getLineaColectivo.bind(this);
    //     this.createLineaColectivo = this.createLineaColectivo.bind(this);
    //     this.updateLineaColectivo = this.updateLineaColectivo.bind(this);
    //     this.deleteLineaColectivo = this.deleteLineaColectivo.bind(this);

    // }
    constructor(){}

    GetAll = async (): Promise<LineaColectivo[]> => {
        return await LineaColectivo.find();
    };

    GetOne = async (id: any) => {
        return await LineaColectivo.findOne(id);
        // if(result === undefined){
        //     throw { status: 404, message: 'LineaColectivo not found' };
        // }
        // return result;
    }

    Create = async (linea: LineaColectivo) => {
        const lineaC = await LineaColectivo.create(linea);
        const InsertedLineaColectivo = await LineaColectivo.save(lineaC);
        if(InsertedLineaColectivo == undefined){
            throw { status: 404, message: 'LineaColectivo not found' };
        }
        return InsertedLineaColectivo;
    }

    Update = async (lineaC: LineaColectivo) => {
        const lineaColectivo = await LineaColectivo.findOne(lineaC.idLineaColectivo);
        
        if (lineaColectivo === undefined) {
            throw { status: 404, message: 'LineaColectivo not found' };            
            
        }
        const entity = await LineaColectivo.merge(lineaColectivo, lineaC);
        const result = await LineaColectivo.save(entity);
        return result;
    }

    Delete = async (id: any) => {
        const lineaC = await LineaColectivo.delete(id);
        if(lineaC.affected === null) {
            throw { status: 404, message: 'LineaColectivo not found' };
        }
    }
}