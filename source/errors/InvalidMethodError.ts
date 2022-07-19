import { LifewareJavaManglerError } from '@/errors/LifewareJavaManglerError.js';

/**
 * The [[LifewareJavaManglerError]] that happens because the method to mangle is not valid
 */
export class InvalidMethodError extends LifewareJavaManglerError {
    private static readonly DEFAULT_MESSAGE = 'Error on parsing method';
    /**
     * The method definition that triggered the problem
     */
    public definition: string | null;

    constructor(message?: string, definition?: string) {
        super(message ?? InvalidMethodError.DEFAULT_MESSAGE);
        this.name = 'InvalidMethodError';
        this.definition = definition ?? null;
    }
}
