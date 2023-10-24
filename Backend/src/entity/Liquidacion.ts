import { Entity, PrimaryGeneratedColumn, BaseEntity, Column, ManyToOne } from 'typeorm';
import { Tatuador } from './Tatuador';

@Entity()
export class Liquidacion extends BaseEntity{

    @PrimaryGeneratedColumn()
    Id: number;

    @ManyToOne(type => Tatuador, tatuador => tatuador.Dni, {nullable: false})
    tatuador: Tatuador;

    @Column({
        type: 'varchar',
        length: 50,
        nullable : false
    })
    FechaInicioLiquidacion: string;

    @Column({
        type: 'varchar',
        length: 50,
        nullable : false
    })
    FechaFinLiquidacion: string;

    @Column({
        type: 'decimal',
        length: 50,
        nullable : false
    })
    ValorTotal: number;
}