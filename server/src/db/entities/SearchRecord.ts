import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class SearchRecord {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    query: string

    @Column({ type: 'timestamp' })
    date: Date;

}
