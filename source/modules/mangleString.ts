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

function checkSingleCharacter(character: string): void {
    if (character.length !== 1) {
        throw new Error(`Invalid character: ${character}`);
    }
}

function mangleSpecalCharacter(character: string): string | null {
    return MAPPER[character] ?? null;
}

function mangleNormalOrUnicodeCharacter(character: string): string | null {
    return /^[\d$A-Za-z]$/.test(character)
        ? null
        : `_X${character.codePointAt(0)!.toString(16).padStart(4, '0').toUpperCase()}X`;
}

function mangleCharacter(character: string): string {
    checkSingleCharacter(character);
    return mangleSpecalCharacter(character) ?? mangleNormalOrUnicodeCharacter(character) ?? character;
}

export function mangleString(str: string): string {
    return [...str].map(element => mangleCharacter(element)).join('');
}
