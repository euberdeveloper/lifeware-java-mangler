import { InvalidConstructorError, InvalidMethodError } from '../../errors/index.js';
import { getConstructorParts, getMethodParts, MethodParameterPart } from '../../utils/parseMethodOrConstructor.js';

import { mangleString, mangleType } from '../index.js';

function mangleParameters(parameters: MethodParameterPart[]): string {
    return parameters.map(parameter => mangleType(parameter.type) + ':').join('');
}

export function mangleMethod(identifier: string): string {
    const parts = getMethodParts(identifier);

    if (!parts) {
        throw new InvalidMethodError(`Could not parse method ${identifier}`);
    }

    return (
        'j_m_' +
        mangleType(parts.returnType) +
        mangleString(`${parts.identifier}:`) +
        mangleParameters(parts.parameters)
    );
}

export function mangleConstructor(identifier: string): string {
    const parts = getConstructorParts(identifier);

    if (!parts) {
        throw new InvalidConstructorError(`Could not parse constructor ${identifier}`);
    }

    return 'j_c_' + mangleString(':') + mangleParameters(parts.parameters);
}
