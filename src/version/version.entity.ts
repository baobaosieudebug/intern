import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ProjectEntity } from '../project/project.entity';

@Entity()
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

  @CreateDateColumn({ name: 'created_at', type: 'date', nullable: false })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'date', nullable: false })
  updatedAt: Date;

  @Column({ name: 'is_deleted', type: 'varchar', default: null })
  isDeleted: number;

  @Column({ name: 'project_id', nullable: true })
  projectId: number;

  @ManyToOne(() => ProjectEntity, (project) => project.versions)
  @JoinColumn({ name: 'project_id' })
  project: ProjectEntity;
}
