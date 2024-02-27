import { useEffect, useState } from 'react';
import { Project } from '../models/project';
import { projects as staticProjects } from '../pages/home/projects/projects-info';

const useProjects = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const data: Project[] = staticProjects;

            setProjects(data);
        };

        fetchProjects();
    }, []);

    return projects;
};

export default useProjects;
