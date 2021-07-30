import { OrganizationService } from './organization.service';
import { AddOrganizationDTO } from './dto/add-organization.dto';
import { EditOrganizationDTO } from './dto/edit-organization.dto';
import { OrganizationRO } from './ro/organization.ro';
import { UserRO } from '../user/ro/user.ro';
export declare class OrganizationController {
    private organizationService;
    constructor(organizationService: OrganizationService);
    getOne(payload: any, code: string): Promise<OrganizationRO>;
    getListUser(payload: any, domain: string): Promise<UserRO[]>;
    create(payload: any, dto: AddOrganizationDTO): Promise<OrganizationRO>;
    inviteOrg(payload: any, domain: string): Promise<any>;
    edit(payload: any, dto: EditOrganizationDTO): Promise<OrganizationRO>;
    delete(payload: any, code: string): Promise<number>;
    getListProject(payload: any, code: string): Promise<import("../project/ro/project.ro").ProjectRO[]>;
}
