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
export class TypeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({ type: 'varchar', nullable: false })
  code: string;

  @Column({ type: 'varchar', nullable: false })
  description: string;

  @Column({ name: 'is_deleted', type: 'varchar', default: null })
  isDeleted: number;

  @CreateDateColumn({ name: 'created_at', type: 'date', nullable: false })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'date', nullable: false })
  updatedAt: Date;

  @Column({ name: 'project_id', nullable: true })
  projectId: number;

  @ManyToOne(() => ProjectEntity, (project) => project.types)
  @JoinColumn({ name: 'project_id' })
  project: ProjectEntity;
}
