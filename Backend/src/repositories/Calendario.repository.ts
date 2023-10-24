import { Repository } from 'typeorm'
import { Calendario } from '../entity/Politica'

export class CalendarioRepository{
    // private repositorys: Repository<Calendario>;

    // constructor(
    //     private repository: Repository<Calendario>
    // ){
    //     //this.repositorys = repository;
    //     this.getCalendarios = this.getCalendarios.bind(this);
    //     this.getCalendario = this.getCalendario.bind(this);
    //     this.createCalendario = this.createCalendario.bind(this);
    //     this.updateCalendario = this.updateCalendario.bind(this);
    //     this.deleteCalendario = this.deleteCalendario.bind(this);
    //  }

     constructor(){}

     GetAll = async (): Promise<Calendario[]> => {
        return await Calendario.find();
    };

    GetOne = async (cuit: any) => {
        return await Calendario.findOne(cuit);
        // if(result === undefined){
        //     throw { status: 404, message: 'Calendario not found' };
        // }
        // return result;
    }

    Create = async (cal: Calendario) => {
        const calendario = await Calendario.create(cal);
        const InsertedCalendar = await Calendario.save(calendario);
        if(InsertedCalendar == undefined){
            throw { status: 404, message: 'Calendario not found' };
        }
        return InsertedCalendar;
    }

    Update = async (cal: Calendario) => {
        const calendario = await Calendario.findOne(cal.IdCalendario);
        
        if (calendario === undefined) {
            throw { status: 404, message: 'Calendario not found' };            
            
        }
        const entity = await Calendario.merge(calendario, cal);
        const result = await Calendario.save(entity);
        return result;
    }

    Delete = async (id: any) => {
        const cal = await Calendario.delete(id);
        if(cal.affected === null) {
            throw { status: 404, message: 'Calendario not found' };
        }
    }
}