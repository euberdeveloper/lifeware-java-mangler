import { mangleObjectIdentifier, mangleString } from '../index.js';

export type PrimitiveType = 'byte' | 'short' | 'int' | 'long' | 'float' | 'double' | 'boolean' | 'char' | 'void';

const TYPES_MAPPER: Record<PrimitiveType, string> = {
    byte: 'B',
    short: 'S',
    int: 'I',
    long: 'J',
    float: 'F',
    double: 'D',
    boolean: 'Z',
    char: 'C',
    void: 'V'
};

function manglePrimitiveType(str: string): string | null {
    return TYPES_MAPPER[str] ?? null;
}

function mangleObjectType(str: string): string {
    return 'L' + mangleObjectIdentifier(str) + ';';
}

function mangleArray(str: string): [string, string] {
    const count = str.match(/\[]/g)?.length ?? 0;
    const arrayPart = '['.repeat(count);
    const typePart = str.replaceAll('[]', '');
    return [arrayPart, typePart];
}

export function mangleType(str: string): string {
    const [arrayPart, typePart] = mangleArray(str);
    const mangledString = manglePrimitiveType(typePart) ?? mangleObjectType(typePart);
    return mangleString(arrayPart + mangledString);
}
