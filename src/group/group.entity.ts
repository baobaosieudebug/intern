import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('group')
export class GroupsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name_group', type: 'varchar' })
  nameGroup: string;

  @Column({ name: 'is_deleted', type: 'varchar', default: 0 })
  isDeleted: number;
}
