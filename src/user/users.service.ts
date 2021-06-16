import {
  Injectable,
  HttpStatus,
  HttpException,
  HttpService,
  UnauthorizedException,
  Param,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { AddUserDTO } from './dto/add-user.dto';
import * as bcrypt from 'bcrypt';
import axios from 'axios';
import { LoginUserDTO } from './dto/login-user.dto';
import { TokenUserDTO } from './dto/token-user.dto';
import { BadRequestException } from '@nestjs/common';
import { AddUsersRO } from '../user/ro/add-user.ro';
import { EditUserDTO } from './dto/edit-user.dto';
import { GetUserRO } from '../user/ro/get-user.ro';
import { JoinGroupRO } from '../group/ro/join-group.ro';
import { GetListUserRO } from '../user/ro/get-list-user.ro';
import { GetAllGroupRO } from '../group/ro/get-all-group.ro';
import { UserRepository } from '../user/user.repository';
import { GroupRepository } from '../group/group.repository';
import { UsersEntity } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly httpService: HttpService,
    private readonly groupRepo: GroupRepository,
  ) {}

  async getOneById(id: number) {
    return await this.userRepo.getById(id);
  }

  async dataTransfer(dto: UsersEntity) {
    const userRO = new GetUserRO();
    userRO.name = dto.name;
    userRO.email = dto.email;
    userRO.groups = dto.groups;
    userRO.tasks = dto.tasks;
    return userRO;
  }
  async getOneByIdOrFail(id: number) {
    const response = await this.getOneById(id);
    if (!response) {
      throw new NotFoundException('ID Incorrect');
    }
    return response;
  }

  async getUserByEmail(email: string) {
    return await this.userRepo.getByEmail(email);
  }

  async getUserByEmailOrFail(email) {
    const response = await this.getUserByEmail(email);
    if (!response) {
      throw new NotFoundException('ID Incorrect');
    }
    return await this.dataTransfer(response);
  }

  async getAllUser(): Promise<GetListUserRO[]> {
    return await this.userRepo.getAllUser();
  }

  async getAllGroupOfUser(idUser: number) {
    const user = await this.userRepo.getById(idUser);
    if (user === undefined) {
      throw new NotFoundException('ID Incorrect');
    } else {
      const response = new GetAllGroupRO();
      response.email = user.email;
      response.name = user.name;
      response.groups = user.groups;
      return response;
    }
  }

  async getListUserAndVerifyToken(access_token: TokenUserDTO) {
    const apiUrl = 'http://localhost:5001';
    const authAxios = axios.create({
      baseURL: apiUrl,
      headers: {
        Authorization: `Bearer ${access_token.token}`,
      },
    });
    const result = authAxios.get(`${apiUrl}/users`);
    if (!authAxios) {
      throw new UnauthorizedException('Unauthorized!');
    } else {
      if (!result) {
        throw new BadRequestException('Bad Request');
      } else {
        return (await result).data;
      }
    }
  }

  async getAllTaskByIdUser(@Param('idUser') idUser: number) {
    return await this.userRepo.getAllTask(idUser);
  }

  async loginApi(user: LoginUserDTO) {
    const response = await this.httpService
      .post('http://localhost:5001/auth/login', {
        email: user.email,
        password: user.password,
      })
      .toPromise();
    if (!response) {
      throw new BadRequestException(
        'Bad Request ! Check My Email And Password !',
      );
    } else {
      return response.data;
    }
  }

  async create(user: AddUserDTO): Promise<AddUsersRO> {
    try {
      user.password = await bcrypt.hash(user.password, 12);
      await this.userRepo.create(user);
      return await this.userRepo.save(user);
    } catch (e) {
      throw new InternalServerErrorException('Sorry, Server is being problem');
    }
  }

  async userJoinGroup(idUser: number, idGroup: number) {
    const group = await this.groupRepo.getById(idGroup);
    const user = await this.userRepo.getById(idUser);
    if (group == undefined) {
      throw new HttpException('Group Not Found', HttpStatus.NOT_FOUND);
    } else {
      if (user == undefined) {
        throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);
      } else {
        group.users = [user];
        await this.groupRepo.save(group);
        const groupRO = new JoinGroupRO();
        groupRO.id = group.id;
        groupRO.nameGroup = group.nameGroup;
        return groupRO;
      }
    }
  }

  /*---Task----*/
  // async addTask(idUser: number, codeId: number) {
  //   const newTask = await this.taskRepo.getByCodeId(codeId);
  //   const user = await this.userRepo.getById(idUser);
  //   user.tasks.push(newTask);
  //   await this.userRepo.save(user);
  //   return new HttpException('Add Task Success', HttpStatus.OK);
  // }

  async update(id: number, dto: EditUserDTO) {
    const user = this.getOneByIdOrFail(id);
    (await dto).password = await bcrypt.hash((await dto).password, 12);

    try {
      return await this.userRepo.update((await user).id, dto);
    } catch (e) {
      if ((await user).id == undefined) {
        throw new NotFoundException();
      } else {
        throw new InternalServerErrorException(
          'Sorry, Server is being problem',
        );
      }
    }
  }

  async destroy(id: number) {
    const user = this.getOneByIdOrFail(id);
    try {
      // return await this.userRepo.delete(await user);
      (await user).isDelete = (await user).id;
      return this.userRepo.save(await user);
    } catch (e) {
      if ((await user).id == undefined) {
        throw new NotFoundException();
      } else {
        throw new InternalServerErrorException(
          'Sorry, Server is being problem',
        );
      }
    }
  }

  async groupJoinByUser(idUser: number, idGroup: number) {
    const group = await this.groupRepo.getById(idGroup);
    const user = await this.userRepo.getById(idUser);
    user.groups = [group];
    await this.userRepo.save(user);
    return user;
  }
}
