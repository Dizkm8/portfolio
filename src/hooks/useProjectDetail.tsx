import { Project } from '../models/project';
import useProjects from './useProjects';
import { ProjectNotFoundException } from '../pages/errors/ProjectNotFound';

interface Props {
    projectSlug: string;
}

const useProjectDetail = (props: Props): Project => {
    const { projectSlug } = props;
    const project = useProjects().find((p) => p.slug === projectSlug);
    if (!project) throw new ProjectNotFoundException();

    return project;
};

export default useProjectDetail;
