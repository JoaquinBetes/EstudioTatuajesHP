import { Entity, PrimaryGeneratedColumn, BaseEntity, Column, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Sucursal extends BaseEntity {

    @PrimaryGeneratedColumn()
    Id: number;
    
    @Column({
        type: 'varchar',
        length: 50,
        nullable: false,
        unique: true
    })
    Pais: string;

    @Column({
        type: 'varchar',
        length: 50,
        nullable: false,
        unique: true
    })
    Localidad: string;

    @Column({
        type: 'varchar',
        length: 50,
        nullable: false
    })
    Direccion: string;

    @Column({
        type: 'varchar',
        length: 50,
        nullable: false
    })
    Departamento: string;

    @Column({
        type: 'varchar',
        length: 100,
        nullable: false,
        unique: false
    })
    Piso: number;   

}