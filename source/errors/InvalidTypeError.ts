import { LifewareJavaManglerError } from './LifewareJavaManglerError.js';

/**
 * The [[InvalidTypeError]] that happens because the type to mangle is not valid
 */
export class InvalidTypeError extends LifewareJavaManglerError {
    private static readonly DEFAULT_MESSAGE = 'Error on parsing type';
    /**
     * The method definition that triggered the problem
     */
    public definition: string | null;

    constructor(message?: string, definition?: string) {
        super(message ?? InvalidTypeError.DEFAULT_MESSAGE);
        this.name = 'InvalidTypeError';
        this.definition = definition ?? null;
    }
}
