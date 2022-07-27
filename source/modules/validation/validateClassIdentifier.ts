import { isClassType } from './validateTypes.js';

export function validateClassIdentifier(type: string): boolean {
    return isClassType(type);
}
