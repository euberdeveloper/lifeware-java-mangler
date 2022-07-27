import { LifewareJavaManglerError } from './LifewareJavaManglerError.js';

/**
 * The [[LifewareJavaManglerError]] that happens because the identifier of a class is not valid
 */
export class InvalidClassIdentifierError extends LifewareJavaManglerError {
    private static readonly DEFAULT_MESSAGE = 'Error on parsing class identifier';
    /**
     * The method definition that triggered the problem
     */
    public definition: string | null;

    constructor(message?: string, definition?: string) {
        super(message ?? InvalidClassIdentifierError.DEFAULT_MESSAGE);
        this.name = 'InvalidClassIdentifierError';
        this.definition = definition ?? null;
    }
}
