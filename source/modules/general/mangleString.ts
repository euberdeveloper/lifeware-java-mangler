/* eslint-disable @typescript-eslint/naming-convention */
const MAPPER = {
    '_': '__',
    '/': '_S',
    ';': '_M',
    ':': '_C',
    '[': '_B',
    '$': '_D'
};
/* eslint-enable @typescript-eslint/naming-convention */

/**
 * Checks if the character is a single character. If it is not, an error is thrown.
 * @param character The character to check
 */
function checkSingleCharacter(character: string): void {
    /* c8 ignore start */
    if (character.length !== 1) {
        throw new Error(`Invalid character: ${character}`);
    }
    /* c8 ignore end */
}

/**
 * Mangles a special character
 * @param character The character to mangle
 * @returns The mangled character or null if the character is not special
 */
function mangleSpecialCharacter(character: string): string | null {
    return MAPPER[character] ?? null;
}

/**
 * Mangles a normal or unicode character
 * @param character The character to mangle
 * @returns The mangled character or null if the character is not normal or unicode
 */
function mangleNormalOrUnicodeCharacter(character: string): string | null {
    return /^[\d$A-Za-z]$/.test(character)
        ? null
        : `_X${character.codePointAt(0)!.toString(16).padStart(4, '0').toUpperCase()}X`;
}

/**
 * Mangles a character
 * @param character The character to mangle
 * @returns The mangled character
 */
function mangleCharacter(character: string): string {
    checkSingleCharacter(character);
    return mangleSpecialCharacter(character) ?? mangleNormalOrUnicodeCharacter(character) ?? character;
}

/**
 * Mangles a string
 * @param str The string to mangle
 * @returns The mangled string
 */
export function mangleString(str: string): string {
    return [...str].map(element => mangleCharacter(element)).join('');
}
