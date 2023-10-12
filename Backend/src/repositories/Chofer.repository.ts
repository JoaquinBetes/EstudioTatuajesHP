import { getRepository, createQueryBuilder, Repository } from 'typeorm'
import { Chofer } from '../entity/Chofer'

export class ChoferRepository{
    // private repositorys: Repository<Chofer>;

    // constructor(
    //     private repository: Repository<Chofer>
    // ){
    //     //this.repositorys = repository;
    //     this.getChoferes = this.getChoferes.bind(this);
    //     this.getChofer = this.getChofer.bind(this);
    //     this.createChofer = this.createChofer.bind(this);
    //     this.updateChofer = this.updateChofer.bind(this);
    //     this.deleteChofer = this.deleteChofer.bind(this);
    // }

    constructor(){}

     GetAll = async (): Promise<Chofer[]> => {
        return await Chofer.find();
    };

    GetOne = async (cuil: any) => {
        return await Chofer.findOne(cuil);
        // if(result === undefined){
        //     throw { status: 404, message: 'Chofer not found' };
        // }
        // return result;
    }

    Create = async (cal: Chofer) => {
        const chofer = await Chofer.create(cal);
        const InsertedChofer = await Chofer.save(chofer);
        if(InsertedChofer == undefined){
            throw { status: 404, message: 'Chofer not found' };
        }
        return InsertedChofer;
    }

    Update = async (cal: Chofer) => {
        const chofer = await Chofer.findOne(cal.Cuil);
        
        if (chofer === undefined) {
            throw { status: 404, message: 'Chofer not found' };            
            
        }
        const entity = await Chofer.merge(chofer, cal);
        const result = await Chofer.save(entity);
        return result;
    }

    Delete = async (id: any) => {
        const cal = await Chofer.delete(id);
        if(cal.affected === null) {
            throw { status: 404, message: 'Chofer not found' };
        }
    }
}