import { PrimitiveType } from '@/types/index.js';

const primitiveTypeRegex = /^(boolean|byte|char|double|float|int|long|short|void)$/;
const classTypeRegex =
    /^(?<packages>[a-z]+\.)*(?<firstClass>([A-Z][\dA-Za-z]*))(?<classes>\.([A-Z][\dA-Za-z]*))*\s*(\[\s*]\s*)*$/;
const typeRegex =
    /^(boolean|byte|char|double|float|int|long|short|void|((?<packages>[a-z]+\.)*(?<firstClass>([A-Z][\dA-Za-z]*))(?<classes>\.([A-Z][\dA-Za-z]*))*))\s*(\[\s*]\s*)*$/;

export function isPrimitiveType(type: any): type is PrimitiveType {
    return typeof type === 'string' && primitiveTypeRegex.test(type.trim());
}

export function isClassType(type: any): boolean {
    return typeof type === 'string' && classTypeRegex.test(type.trim());
}

export function validateType(type: string): boolean {
    return typeRegex.test(type.trim());
}
