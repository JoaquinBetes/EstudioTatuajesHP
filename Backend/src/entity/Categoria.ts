import { Entity, PrimaryGeneratedColumn, BaseEntity, Column, ManyToOne, OneToMany } from 'typeorm';
import { Disenio } from './Disenio';

@Entity()
export class Sucursal extends BaseEntity{

    @PrimaryGeneratedColumn()
    Codigo: number;

    @ManyToOne(type => Disenio, Disenio => Disenio.Id, {nullable: false})
    disenio: Disenio;

    @Column({
        type: 'varchar',
        length: 50,
        nullable : false
    })
    IdDisenio: string;

    @Column({
        type: 'varchar',
        length: 50,
        nullable: false
    })
    Descripcion: string;
}