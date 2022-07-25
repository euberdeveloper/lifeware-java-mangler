import { InvalidConstructorError, InvalidMethodError } from '../../errors/index.js';
import { getConstructorParts, getMethodParts, mangleParameters } from '../../utils/parseMethodOrConstructor.js';

import { mangleString, mangleType } from '../index.js';

export function mangleMethodSignature(identifier: string): string {
    const parts = getMethodParts(identifier);

    if (!parts) {
        throw new InvalidMethodError(`Could not parse method ${identifier}`);
    }

    return (
        'j_m_' +
        mangleType(parts.returnType) +
        mangleString(`${parts.identifier}:`) +
        mangleParameters(parts.parameters, false)
    );
}

export function mangleConstructorSignature(identifier: string): string {
    const parts = getConstructorParts(identifier);

    if (!parts) {
        throw new InvalidConstructorError(`Could not parse constructor ${identifier}`);
    }

    return 'j_c_' + mangleString(':') + mangleParameters(parts.parameters, false);
}
