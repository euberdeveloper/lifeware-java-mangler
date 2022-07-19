/**
 * The class of the errors of the module lifeware-java-mangler.
 */
export class LifewareJavaManglerError extends Error {
    constructor(message?: string) {
        super(message);
        this.name = 'LifewareJavaManglerError';
    }
}
