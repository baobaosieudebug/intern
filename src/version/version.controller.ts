import { ApiTags } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { VersionService } from './version.service';
import { AddVersionDTO } from './dto/add-version.dto';
import { EditVersionDTO } from './dto/edit-version.dto';

@ApiTags('Version')
@Controller('projects/:id/versions')
export class VersionController {
  constructor(private versionService: VersionService) {}

  @Get()
  async getAll() {
    return await this.versionService.getAll();
  }

  @Get(':idVersion')
  async getVersionById(@Param('idVersion') id: number) {
    return await this.versionService.getOneByIdOrFail(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  async createVersion(@Body() dto: AddVersionDTO) {
    return await this.versionService.add(dto);
  }

  @Post(':idVersion')
  async addVersionInProject(
    @Param('idVersion') id: number,
    @Param('id') idProject: number,
  ) {
    return this.versionService.addVersionInProject(id, idProject);
  }

  @Put(':idVersion')
  @UsePipes(ValidationPipe)
  async editVersion(
    @Param('id') idProject: number,
    @Param('idVersion') id: number,
    @Body() dto: EditVersionDTO,
  ) {
    return await this.versionService.edit(id, idProject, dto);
  }

  @Delete(':idVersion')
  async removeVersion(
    @Param('id') idProject: number,
    @Param('idVersion') id: number,
  ) {
    return await this.versionService.remove(id, idProject);
  }
}
