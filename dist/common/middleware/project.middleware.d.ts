import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { ProjectService } from '../../project/project.service';
export declare class ProjectMiddleware implements NestMiddleware {
    private readonly projectService;
    constructor(projectService: ProjectService);
    use(req: Request, res: Response, next: NextFunction): Promise<void>;
}
