import { Entity, Column, BaseEntity, PrimaryColumn, OneToMany} from 'typeorm';

@Entity()
export class Tatuador extends BaseEntity {

@PrimaryColumn({type: "bigint",
               unique: true,
               nullable: false})
Dni: number;

@Column({
   type: "varchar",
   length: 100,
   unique: true,
   nullable: false
})
NombreCompleto: string;

@Column({
   type: "varchar",
   length: 100, 
   nullable: false
})
Email: string;

@Column({
   type: "varchar",
   length: 100,  
   nullable: false
})
Telefono: string;

@Column({
   type: "varchar",
   length: 100
})
RedSocial: string;

}