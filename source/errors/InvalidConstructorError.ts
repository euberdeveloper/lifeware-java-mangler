import { LifewareJavaManglerError } from './LifewareJavaManglerError.js';

/**
 * The [[InvalidConstructorError]] that happens because the constructor to mangle is not valid
 */
export class InvalidConstructorError extends LifewareJavaManglerError {
    private static readonly DEFAULT_MESSAGE = 'Error on parsing constructor';
    /**
     * The constructor definition that triggered the problem
     */
    public definition: string | null;

    constructor(message?: string, definition?: string) {
        super(message ?? InvalidConstructorError.DEFAULT_MESSAGE);
        this.name = 'InvalidConstructorError';
        this.definition = definition ?? null;
    }
}
