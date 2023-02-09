import { isClassType } from './validateTypes.js';

/**
 * Validates if the identifier is a class type
 * @param identifier The identifier to validate
 * @returns True if the identifier is a class type
 */
export function validateClassIdentifier(identifier: string): boolean {
    return isClassType(identifier);
}
