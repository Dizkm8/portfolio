import { Project } from '../../../models/project';

const cubi12: Project = {
    title: 'Cubi12',
    slug: 'cubi12',
    image: 'cubi12.webp',
    description: 'Cubi12 description',
    frontendRepo: 'https://github.com/Dizkm8/cubi12-front.git',
    backendRepo: 'https://github.com/Dizkm8/cubi12-api.git',
    carouselImages: {
        namespace: 'cubi12',
        desktopImages: [],
        mobileImages: [],
    },
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
    carouselImages: {
        namespace: 'danko-araya',
        desktopImages: [
            'danko-araya-carousel-1.webp',
            'danko-araya-carousel-2.webp',
            'danko-araya-carousel-3.webp',
        ],
        mobileImages: [
            'danko-araya-carousel-responsive-1.webp',
            'danko-araya-carousel-responsive-2.webp',
            'danko-araya-carousel-responsive-3.webp',
        ],
    },
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
    carouselImages: {
        namespace: 'psicoapp',
        desktopImages: [],
        mobileImages: [],
    },
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
    carouselImages: {
        namespace: 'nessfit',
        desktopImages: [],
        mobileImages: [],
    },
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
