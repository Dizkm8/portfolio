import { Project } from '../../../models/project';

const cubi12: Project = {
    title: 'Cubi12',
    image: 'cubi12.webp',
    description: 'Cubi12 description',
    frontendRepo: 'https://github.com/Dizkm8/cubi12-front.git',
    backendRepo: 'https://github.com/Dizkm8/cubi12-api.git',
};

const psicoapp: Project = {
    title: 'PsicoApp',
    image: 'psicoapp.webp',
    description: 'Psicoapp description',
    frontendRepo: 'https://github.com/Dizkm8/psicoapp-frontend',
    backendRepo: 'https://github.com/Dizkm8/psicoapp-backend',
};

const nessfit: Project = {
    title: 'NessFit',
    image: 'nessfit.webp',
    description: 'Nessfit description',
    fullstackRepo: 'https://github.com/Dizkm8/NESSFIT',
};

const dankoArayaPortfolio: Project = {
    title: 'Danko Araya Portfolio',
    image: 'danko-araya-portfolio.webp',
    description: 'Danko Araya Portfolio description',
    demoLink: 'https://dankoaraya.cl/',
};

export const projects: Project[] = [
    cubi12,
    psicoapp,
    nessfit,
    dankoArayaPortfolio,
];
