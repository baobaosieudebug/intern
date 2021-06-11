import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseFilters,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { AddUserDTO } from '../dto/add-user.dto';
import { NotFoundExceptionFilter } from 'src/auth/exception filter/not-found.filter';
import { ParseDataToIntPipe } from 'src/auth/pipe/parse-to-int.pipe';
import { TokenUserDTO } from '../dto/token-user.dto';
import { Public } from 'src/decorators/public.decorator';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { EditUserDTO } from 'src/dto/edit-user.dto';

//Proeject mới
@ApiTags('User')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  /*---------------------------------------Get Method--------------------------------------- */

  @ApiOkResponse({ description: 'Get User Success' })
  @ApiNotFoundResponse({ description: 'User Not Found, Check Your ID' })
  @Get(':id')
  async getUser(@Param('id') id: number) {
    return await this.usersService.getOneByIdOrFail(id);
  }

  @Get('email/:email')
  async getUserByEmail(@Param('email') email: string) {
    return await this.usersService.getUserByEmailOrFail(email);
  }

  @Get()
  async getAllUsers() {
    return await this.usersService.getAllUser();
  }

  @ApiOkResponse({ description: 'Verify Token Success' })
  @Get('getAListUserAndVerifyToken')
  async getListUserAndVerifyToken(
    @Body() token: TokenUserDTO,
  ): Promise<unknown> {
    return await this.usersService.getListUserAndVerifyToken(token);
  }

  /*---------------------------------------Post Method--------------------------------------- */

  @Public()
  @Post()
  @UsePipes(ValidationPipe)
  @ApiCreatedResponse({ description: 'Create user success' })
  @ApiUnauthorizedResponse({ description: 'You are Unauthorized' })
  @ApiInternalServerErrorResponse({ description: 'The server is having error' })
  @ApiBadRequestResponse({ description: 'One Of Params is Incorrect or Empty' })
  async createUsers(@Body() user: AddUserDTO) {
    return await this.usersService.create(user);
  }

  @ApiCreatedResponse({ description: 'User join group success' })
  @ApiNotFoundResponse({ description: 'User or Group not found' })
  @ApiUnauthorizedResponse({ description: 'You are Unauthorized' })
  @Post(':idUser/userJoinGroup/:idGroup')
  async userJoinGroup(
    @Param('idUser') idUser: number,
    @Param('idGroup') idGroup: number,
  ) {
    return await this.usersService.userJoinGroup(idUser, idGroup);
  }

  /*----Task--*/
  @Get(':idUser/getTaskByUser')
  async getTaskByUser(@Param('idUser') idUser: number) {
    return await this.usersService.getAllTaskByIdUser(idUser);
  }
  @Post(':idUser/addTaskByUser/:codeId')
  async addTaskByUser(
    @Param('idUser') idUser: number,
    @Param('codeId') codeId: number,
  ) {
    return await this.usersService.addTask(idUser, codeId);
  }
  /*---------------------------------------Put Method--------------------------------------- */

  @Put(':id')
  @ApiOkResponse({ description: 'Update information of user success' })
  @ApiUnauthorizedResponse({ description: 'You are Unauthorized' })
  @ApiNotFoundResponse({ description: 'Your request is Empty or ID incorrect' })
  @ApiInternalServerErrorResponse({ description: 'The server is having error' })
  async update(@Body() user: EditUserDTO, @Param('id') id: number) {
    return await this.usersService.update(id, user);
  }

  /*---------------------------------------Delete Method--------------------------------------- */

  @ApiOkResponse({ description: 'Delete user success' })
  @ApiUnauthorizedResponse({ description: 'You are Unauthorized' })
  @ApiNotFoundResponse({ description: 'Your ID Incorrect' })
  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    return await this.usersService.destroy(id);
  }

  @ApiOkResponse({ description: 'Get A List User In Group Success' })
  @ApiNotFoundResponse({ description: 'User Not Found, Check Your ID' })
  @Get(':idUser/getAllGroup')
  @UseFilters(new NotFoundExceptionFilter())
  async getAllGroup(@Param('idUser', ParseDataToIntPipe) idUser: number) {
    return await this.usersService.getAllGroupOfUser(idUser);
  }

  // @ApiCreatedResponse({ description: 'Joined the group' })
  // @ApiNotFoundResponse({ description: 'User or Group not found' })
  // @ApiUnauthorizedResponse({ description: 'You are Unauthorized' })
  // @Post(':idUser/groupJoinByUser/:idGroup')
  // async groupJoinByUser(
  //   @Param('idUser') idUser: number,
  //   @Param('idGroup') idGroup: number,
  // ) {
  //   return await this.usersService.groupJoinByUser(idUser, idGroup);
  // }
}
