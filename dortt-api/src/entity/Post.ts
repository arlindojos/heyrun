import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, CreateDateColumn } from "typeorm";
import { pwdReset } from "./pwdReset";

@Entity()
export class User {

    @PrimaryGeneratedColumn('uuid')
    idUsr: number;

    @Column()
    name: string;

    @Column()
    surname: string;

    @Column()
    emailUsr: string;

    @Column()
    passwordUsr: string;

    @Column()
    websites: boolean;

    @Column()
    development: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @CreateDateColumn()
    updatedAt: Date;

    @ManyToMany(type => pwdReset, {
        cascade: true
    })
    @JoinTable()
    categories: pwdReset[];

}