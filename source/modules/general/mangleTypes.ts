import { PrimitiveType } from '@/types/index.js';
import { InvalidTypeError } from '@/errors/index.js';
import { mangleObjectIdentifier, mangleString, validateType } from '../index.js';

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

export function manglePrimitiveType(str: string): string | null {
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
    if (!validateType(str)) {
        throw new InvalidTypeError(undefined, str);
    }

    const [arrayPart, typePart] = mangleArray(str);
    const mangledString = manglePrimitiveType(typePart) ?? mangleObjectType(typePart);
    return mangleString(arrayPart + mangledString);
}
