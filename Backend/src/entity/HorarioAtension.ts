import { Entity, PrimaryGeneratedColumn, Column, BaseEntity,         
    ManyToOne,
    Timestamp} from 'typeorm';
import { Sucursal } from './Sucursal';

@Entity()
export class HorarioAtension extends BaseEntity{

@PrimaryGeneratedColumn()
Id: number;

@ManyToOne(type => Sucursal, Sucursal => Sucursal.Id, {nullable: false})
sucursal: Sucursal;

@Column({
   type: 'datetime',
   nullable: false
})
HoraApertura: Timestamp;

@Column({
   type: 'datetime',
   nullable: false,
})
HoraCierre: Timestamp;

@Column({
   type: 'varchar',        
   nullable: false,        
})
DiaSemana: string;

}