import { Project } from '../../../models/project';

const cubi12: Project = {
    title: 'Cubi12',
    image: 'cubi12.webp',
    description:
        'Cubi12 is an open source project to help students at UCN at Chile to understand all the subjects they can take and their progress in the career. It provides a interactive mesh and user progress',
    frontendRepo: 'https://github.com/Dizkm8/cubi12-front.git',
    backendRepo: 'https://github.com/Dizkm8/cubi12-api.git',
};

const psicoapp: Project = {
    title: 'PsicoApp',
    image: 'psicoapp.webp',
    description:
        'Using GPT-powered moderator, PsicoApp is a public blog to post and response about psychology and mental health topics. Also help psychologists to manage their patients and appointments It provides a calendar and a patient management system',
    frontendRepo: 'https://github.com/Dizkm8/psicoapp-frontend',
    backendRepo: 'https://github.com/Dizkm8/psicoapp-backend',
};

const nessfit: Project = {
    title: 'NessFit',
    image: 'nessfit.webp',
    description:
        'Nessfit is a web application to manage the rental of sport venues. It provides a calendar and a user management system.',
    frontendRepo: '',
    backendRepo: 'https://github.com/Dizkm8/NESSFIT',
};

export const projects: Project[] = [cubi12, psicoapp, nessfit];
