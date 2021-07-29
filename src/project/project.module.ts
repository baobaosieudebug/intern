import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModule } from '../task/task.module';
import { UserModule } from '../user/user.module';
import { ProjectRepository } from './project.repository';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';
import { JwtModule } from '@nestjs/jwt';
import { OrganizationModule } from '../organization/organization.module';
import { RoleRepository } from '../auth/repository/role.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProjectRepository, RoleRepository]),
    forwardRef(() => UserModule),
    forwardRef(() => TaskModule),
    forwardRef(() => OrganizationModule),
    JwtModule.register({
      secret: 'SECRET',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [ProjectService],
  controllers: [ProjectController],
  exports: [ProjectService, TypeOrmModule],
})
export class ProjectModule {}
