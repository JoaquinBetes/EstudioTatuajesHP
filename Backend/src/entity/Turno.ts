import { Entity, PrimaryGeneratedColumn, BaseEntity, Column, ManyToOne, Timestamp, PrimaryColumn } from 'typeorm';
import { Cliente } from './Cliente';
import { Tatuador } from './Tatuador';
import { Disenio } from './Disenio';

@Entity()
export class Turno extends BaseEntity{

    @ManyToOne(type => Cliente, cliente => cliente.Dni, {nullable: false})
    cliente: Cliente;

    @PrimaryColumn()
    @ManyToOne(type => Tatuador, tatuador => tatuador.Dni, {nullable: false})
    tatuador: Tatuador;

    @ManyToOne(type => Disenio, disenio => disenio.Id, {nullable: false})
    disenio: Disenio;

    @PrimaryColumn()
    @Column({
        type: 'double',        
        nullable: false,        
    })
    HoraInicio: number;

    @PrimaryColumn()
    @Column({
        type: 'double',        
        nullable: false,        
    })
    HoraFin: number;
    
    @PrimaryColumn()
    @Column({
        type: 'date',        
        nullable: false,        
    })
    FechaTurno: Timestamp;

    @Column({
        type: 'varchar',
        length: 1,
        nullable: false,        
    })
    Estado: string;

}