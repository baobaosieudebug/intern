import { ProjectEntity } from './project.entity';
import { EntityRepository, Repository } from 'typeorm';
import { UsersEntity } from '../user/users.entity';

@EntityRepository(ProjectEntity)
export class ProjectRepository extends Repository<ProjectEntity> {
  getById(id) {
    return this.findOne(
      { id },
      { relations: ['organization', 'users', 'tasks'] },
    );
  }

  getAllProject() {
    return this.find();
  }

  getByCode(code) {
    return this.findOne(
      { code },
      { relations: ['organization', 'users', 'tasks'] },
    );
  }
  getByIdWithDelete(id) {
    return this.count({ where: { id, isDeleted: id } });
  }

  async isProjectExistInOrg(orgID: number, code: string) {
    const entity = await this.count({
      where: { code, organizationID: orgID },
    });
    return entity > 0;
  }

  async isUserExistInProject(idUser: number) {
    return await this.createQueryBuilder('project')
      .leftJoinAndSelect('project.users', 'user')
      .where('user.id = :idUser', { idUser })
      .getCount();
  }

  async removeUserInProject(idUser: number, id: number) {
    return this.createQueryBuilder('project')
      .relation(UsersEntity, 'projects')
      .of(idUser)
      .remove(id);
  }
}
