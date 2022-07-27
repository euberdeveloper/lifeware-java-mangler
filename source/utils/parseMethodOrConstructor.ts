import { InvalidConstructorError, InvalidMethodError } from '../errors/index.js';
import { CONSTRUCTOR_SIGNATURE_REGEX, mangleType, METHOD_SIGNATURE_REGEX } from '../modules/index.js';

export interface SignatureParameterPart {
    type: string;
    identifier: string;
}

export interface MethodParts {
    returnType: string;
    identifier: string;
    parameters: SignatureParameterPart[];
}

export interface ConstructorParts {
    identifier: string;
    parameters: SignatureParameterPart[];
}

function getParameterParts(parameters: string): SignatureParameterPart[] {
    const parametersArray = parameters.split(',').filter(param => !!param);

    return parametersArray.map(parameter => {
        const regexResult = /^\s*(?<type>[\w.]+[[\]]*)\s+(?<identifier>\w+)\s*,?/.exec(parameter);
        return regexResult!.groups as unknown as SignatureParameterPart;
    });
}

export function getMethodParts(identifier: string): MethodParts {
    const regexResult = METHOD_SIGNATURE_REGEX.exec(identifier);

    if (!regexResult?.groups) {
        throw new InvalidMethodError(undefined, identifier);
    }

    return {
        returnType: regexResult.groups.returnType,
        identifier: regexResult.groups.identifier,
        parameters: getParameterParts(regexResult.groups.parameters)
    };
}

export function getConstructorParts(identifier: string): ConstructorParts {
    const regexResult = CONSTRUCTOR_SIGNATURE_REGEX.exec(identifier);

    if (!regexResult?.groups) {
        throw new InvalidConstructorError(undefined, identifier);
    }

    return {
        identifier: regexResult.groups.identifier,
        parameters: getParameterParts(regexResult.groups.parameters)
    };
}

export function mangleParameters(parameters: SignatureParameterPart[], withIdentifiers: boolean): string {
    return parameters
        .map(parameter => mangleType(parameter.type) + ':' + (withIdentifiers ? ` ${parameter.identifier}` : ''))
        .join('');
}
