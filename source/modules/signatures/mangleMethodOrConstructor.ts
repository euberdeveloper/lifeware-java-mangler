import { getConstructorParts, getMethodParts, mangleParameters } from '../../utils/parseMethodOrConstructor.js';

import { mangleString, mangleType } from '../index.js';

export function mangleMethodSignature(identifier: string): string {
    const parts = getMethodParts(identifier);

    return (
        'j_m_' +
        mangleType(parts.returnType) +
        mangleString(`${parts.identifier}:`) +
        mangleParameters(parts.parameters, false)
    );
}

export function mangleConstructorSignature(identifier: string): string {
    const parts = getConstructorParts(identifier);
    return 'j_c_' + mangleString(':') + mangleParameters(parts.parameters, false);
}
