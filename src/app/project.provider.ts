import { ProjectService } from './project/project.service';

export const configFactory = (projectService: ProjectService) => {
    return () => projectService.loadProjectConfig();
};
