import { TaskEntity } from './task.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(TaskEntity)
export class TaskRepository extends Repository<TaskEntity> {
  async getById(id) {
    return this.findOne({ id }, { relations: ['user', 'project'] });
  }

  getAll() {
    return this.find({ isDeleted: null });
  }

  getByCode(code) {
    return this.findOne({ code }, { relations: ['user', 'project'] });
  }

  async getByIdWithDelete(id) {
    const entity = await this.count({ where: { id, isDeleted: id } });
    return entity > 0;
  }

  async isTaskExistInProject(projectID: number, code: string) {
    return await this.count({
      where: { code, projectID: projectID },
    });
  }

  async isTaskExistInUser(userID: number, code: string) {
    return await this.count({
      where: { code, createUserId: null },
    });
  }

  async isAssignTask(userID: number, code: string) {
    return await this.count({
      where: { code, userAssign: null },
    });
  }

  getAllTaskByIDProject(idProject: number) {
    return this.find({ projectID: idProject });
  }
}
