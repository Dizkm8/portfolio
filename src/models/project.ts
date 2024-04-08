import { CarouselImages } from './carousel-images';
import { ProjectTech } from './project-tech';

export interface Project {
    title: string;

    slug: string;

    image: string;

    description: string;

    frontendRepo?: string;

    backendRepo?: string;

    fullstackRepo?: string;

    demoLink?: string;

    carouselImages: CarouselImages;

    techStack: ProjectTech[];
}
