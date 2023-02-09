import { PrimitiveType } from '@/types/index.js';

const primitiveTypeRegex = /^(boolean|byte|char|double|float|int|long|short|void)$/;
const classTypeRegex =
    /^(?<packages>[a-z]+\.)*(?<firstClass>([A-Z][\dA-Za-z]*))(?<classes>\.([A-Z][\dA-Za-z]*))*\s*(\[\s*]\s*)*$/;
const typeRegex =
    /^(boolean|byte|char|double|float|int|long|short|void|((?<packages>[a-z]+\.)*(?<firstClass>([A-Z][\dA-Za-z]*))(?<classes>\.([A-Z][\dA-Za-z]*))*))\s*(\[\s*]\s*)*$/;

/**
 * Returns true if the given type is a primitive type. (works as an instanceof in Typescript)
 * @param type The type to check
 * @returns True if the type is a primitive type.
 */
export function isPrimitiveType(type: any): type is PrimitiveType {
    return typeof type === 'string' && primitiveTypeRegex.test(type.trim());
}

/**
 * Returns if the given type is a valid class type.
 * @param type The type to check
 * @returns True if the type is a valid class type.
 */
export function isClassType(type: any): boolean {
    return typeof type === 'string' && classTypeRegex.test(type.trim());
}

/**
 * Returns if the given type is a valid type.
 * @param type The type to check
 * @returns True if the type is a valid type.
 */
export function validateType(type: string): boolean {
    return typeRegex.test(type.trim());
}
