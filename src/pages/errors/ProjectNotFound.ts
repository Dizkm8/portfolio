/**
 * Error thrown when a project is not found
 */
export class ProjectNotFoundException extends Error {
    constructor(message: string = 'Project not found') {
        super(message);
        Object.setPrototypeOf(this, ProjectNotFoundException.prototype);
        this.name = this.constructor.name;
    }
}
