import { Length } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('task')
export class TaskEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  @Length(10, 20)
  name: string;

  @ApiProperty()
  @Column()
  @Length(4, 20)
  userId: string;

  @ApiProperty()
  @Column()
  @Length(4, 20)
  groupId: string;

  @ApiProperty()
  @Column()
  @Length(4, 20)
  projectId: string;
}
