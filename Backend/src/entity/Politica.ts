import { Entity, PrimaryGeneratedColumn, BaseEntity, Column } from 'typeorm';

@Entity()
export class Politica extends BaseEntity{

    @PrimaryGeneratedColumn()
    Id: number;

    @Column({
        type : 'float',
        default: null
    })
    PrecioBaseMinimo: number;

    @Column({
        type : 'float',
        default: null
    })
    PrecioBaseMaximo: number;
    
    @Column({
        type : 'float',
        default: null
    })
    ComicionEstudio: number;
}