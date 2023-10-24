import { Entity, PrimaryGeneratedColumn, BaseEntity, Column, ManyToOne, OneToMany } from 'typeorm';
import { Tatuador } from './Tatuador';

@Entity()
export class Disenio extends BaseEntity {

    @PrimaryGeneratedColumn()
    Id: number;
    
    @ManyToOne(type => Tatuador, tatuador => tatuador.Dni, {nullable: false})
    tatuador: Tatuador;

    @Column({
        type: 'int',
        nullable: false
    })
    TamanioAproximado: number;

    @Column({
        type: 'varchar',
        length: 50
    })
    Imagen: string;

    @Column({
        type: 'decimal'
    })
    PrecioBase: number;

    @Column({
        type: 'decimal'
    })
    Descuento: number;

    @Column({
        type: 'decimal'
    })
    PrecioFinal: number;

    @Column({
        type: 'decimal'
    })
    Colores: number;

}