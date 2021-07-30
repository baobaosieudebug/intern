import { OrganizationEntity } from './organization.entity';
import { ProjectService } from '../project/project.service';
import { UserService } from '../user/user.service';
import { OrganizationRepository } from './organization.repository';
import { AddOrganizationDTO } from './dto/add-organization.dto';
import { EditOrganizationDTO } from './dto/edit-organization.dto';
import { OrganizationRO } from './ro/organization.ro';
import { UserRO } from '../user/ro/user.ro';
import { ProjectRepository } from '../project/project.repository';
export declare class OrganizationService {
    private readonly repo;
    private readonly projectService;
    private readonly projectRepo;
    private readonly userService;
    private readonly logger;
    constructor(repo: OrganizationRepository, projectService: ProjectService, projectRepo: ProjectRepository, userService: UserService);
    mappingOrganizationRO(organization: OrganizationEntity): OrganizationRO;
    getOneByCode(code: string): Promise<OrganizationEntity>;
    getOneOrFail(payload: any, code: string): Promise<OrganizationEntity>;
    getListUser(payload: any, domain: string): Promise<UserRO[]>;
    isOwner(payload: any): Promise<void>;
    isOwnerDomain(payload: any, domain: string): Promise<void>;
    createCode(): Promise<string>;
    create(payload: any, dto: AddOrganizationDTO): Promise<OrganizationRO>;
    invite(payload: any, domain: string): Promise<any>;
    edit(payload: any, dto: EditOrganizationDTO): Promise<OrganizationRO>;
    delete(payload: any, code: string): Promise<number>;
    getListProject(payload: any, code: string): Promise<import("../project/ro/project.ro").ProjectRO[]>;
}
