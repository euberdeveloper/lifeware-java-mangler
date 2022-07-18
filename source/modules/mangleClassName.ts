import { mangleString } from '.';

export function mangleObjectIdentifier(identifier: string): string {
    const parts = identifier.split('.');
    const dividerIndex = parts.findIndex(part => /[A-Z]/.exec(part.charAt(0)));

    const packageParts = parts.slice(0, dividerIndex);
    const packageString = packageParts.join('/');

    const classParts = parts.slice(dividerIndex);
    const classString = classParts.join('$');

    return mangleString(packageString) + '/' + mangleString(classString);
}

export function mangleClassName(identifier: string): string {
    return 'JC_' + mangleObjectIdentifier(identifier) + ';';
}
