import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Hello {
  @PrimaryGeneratedColumn()
  _id?: number;

  @Column('int')
  a?: number;

  @Column()
  b?: string;
}

export default Hello;
