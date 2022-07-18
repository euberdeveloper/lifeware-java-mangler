import { mangleObjectIdentifier, mangleString } from './index.js';

type PrimitiveType = 'byte' | 'short' | 'int' | 'long' | 'float' | 'double' | 'boolean' | 'char' | 'void';

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

function mangleArray(str: string): string {
    const count = /\[]/.exec(str)?.length ?? 0;
    return '['.repeat(count) + str;
}

export function mangleType(str: string): string {
    const arrayMangledString = mangleArray(str);
    const mangledString = manglePrimitiveType(arrayMangledString) ?? mangleObjectType(arrayMangledString);
    return mangleString(mangledString);
}
