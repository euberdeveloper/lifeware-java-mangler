import { InvalidClassIdentifierError } from '../../errors/index.js';
import { mangleString, validateClassIdentifier } from '../index.js';

export function mangleObjectIdentifier(identifier: string): string {
    const parts = identifier.split('.');
    const dividerIndex = parts.findIndex(part => /[A-Z]/.exec(part.charAt(0)));

    const packageParts = parts.slice(0, dividerIndex);
    const packageString = packageParts.join('/');

    const classParts = parts.slice(dividerIndex);
    const classString = classParts.join('$');

    return (packageString ? packageString + '/' : '') + classString;
}

export function mangleClassIdentifier(identifier: string): string {
    if (!validateClassIdentifier(identifier)) {
        throw new InvalidClassIdentifierError(undefined, identifier);
    }

    return 'JC_' + mangleString(mangleObjectIdentifier(identifier));
}
