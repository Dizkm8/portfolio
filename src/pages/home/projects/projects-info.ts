import { Project } from '../../../models/project';

const cubi12: Project = {
    title: 'Cubi12',
    slug: 'cubi12',
    image: 'cubi12.webp',
    description: 'Cubi12 description',
    frontendRepo: 'https://github.com/Dizkm8/cubi12-front.git',
    backendRepo: 'https://github.com/Dizkm8/cubi12-api.git',
    techStack: [
        {
            category: 'frontend',
            title: 'React 18',
            imageName: 'react.webp',
        },
        {
            category: 'backend',
            title: '.NET 7.0',
            imageName: 'dotnet.webp',
        },
        {
            category: 'db',
            title: 'MS SQL Server',
            imageName: 'mssqlserver.webp',
        },
    ],
};

const dankoArayaPortfolio: Project = {
    title: 'Danko Araya Portfolio',
    slug: 'danko-araya-portfolio',
    image: 'danko-araya-portfolio.webp',
    description: 'Danko Araya Portfolio description',
    demoLink: 'https://dankoaraya.cl/',
    techStack: [
        {
            category: 'frontend',
            title: 'HTML',
            imageName: 'react.webp',
        },
        {
            category: 'uiLibrary',
            title: 'Bootstrap 5',
            imageName: 'bootstrap.webp',
        },
        {
            category: 'jsLibrary',
            title: 'jQuery',
            imageName: 'jquery.webp',
        },
    ],
};

const psicoapp: Project = {
    title: 'PsicoApp',
    slug: 'psicoapp',
    image: 'psicoapp.webp',
    description: 'Psicoapp description',
    frontendRepo: 'https://github.com/Dizkm8/psicoapp-frontend',
    backendRepo: 'https://github.com/Dizkm8/psicoapp-backend',
    techStack: [
        {
            category: 'frontend',
            title: 'React 18',
            imageName: 'react.webp',
        },
        {
            category: 'backend',
            title: '.NET 7.0',
            imageName: 'dotnet.webp',
        },
        {
            category: 'db',
            title: 'mariaDB',
            imageName: 'mariadb.webp',
        },
    ],
};

const nessfit: Project = {
    title: 'NessFit',
    slug: 'nessfit',
    image: 'nessfit.webp',
    description: 'Nessfit description',
    fullstackRepo: 'https://github.com/Dizkm8/NESSFIT',
    techStack: [
        {
            category: 'frontend',
            title: 'Thymeleaf',
            imageName: 'thymeleaf.webp',
        },
        {
            category: 'backend',
            title: 'Spring Boot 2',
            imageName: 'spring.webp',
        },
        {
            category: 'db',
            title: 'mySQL',
            imageName: 'mysql.webp',
        },
    ],
};

export const projects: Project[] = [
    cubi12,
    dankoArayaPortfolio,
    psicoapp,
    nessfit,
];
