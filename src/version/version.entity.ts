import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ProjectEntity } from '../project/project.entity';

@Entity('version')
export class VersionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({ type: 'varchar', nullable: false })
  code: string;

  @Column({ type: 'varchar', nullable: false })
  description: string;

  @Column({ name: 'date_start', type: 'date', nullable: false })
  startDate: Date;

  @Column({ name: 'date_release', type: 'date', nullable: false })
  releaseDate: Date;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'updated_at' })
  updatedAt: Date;

  @Column({ name: 'is_deleted', type: 'varchar', default: 0 })
  isDeleted: number;

  @Column({ name: 'project_id', nullable: true })
  projectId: number;

  @ManyToOne(() => ProjectEntity, (project) => project.versions)
  @JoinColumn({ name: 'project_id' })
  project: ProjectEntity;
}
