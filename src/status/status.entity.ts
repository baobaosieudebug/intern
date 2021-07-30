import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ProjectEntity } from '../project/project.entity';

@Entity('status')
export class StatusEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({ type: 'varchar', nullable: false })
  code: string;

  @Column({ type: 'varchar', nullable: false })
  description: string;

  @Column({ name: 'is_deleted', type: 'varchar', default: 0 })
  isDeleted: number;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'updated_at' })
  updatedAt: Date;

  @Column({ name: 'project_id', nullable: true })
  projectId: number;

  @ManyToOne(() => ProjectEntity, (project) => project.statuses)
  @JoinColumn({ name: 'project_id' })
  project: ProjectEntity;
}
