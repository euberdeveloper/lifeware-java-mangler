import { InvalidConstructorError, InvalidMethodError } from '../errors/index.js';
import { CONSTRUCTOR_SIGNATURE_REGEX, mangleType, METHOD_SIGNATURE_REGEX } from '../modules/index.js';

/**
 * The interface for the parts of a method/constructor signature parameter
 */
export interface SignatureParameterPart {
    /** The type of the parameter */
    type: string;
    /** The identifier of the parameter */
    identifier: string;
}

/**
 * The interface for the parts of a method signature
 */
export interface MethodParts {
    /** The return type of a method signature */
    returnType: string;
    /** The identifier of the method signature */
    identifier: string;
    /** The parameters of the method signature */
    parameters: SignatureParameterPart[];
}

/**
 * The interface for the parts of a constructor signature
 */
export interface ConstructorParts {
    /** The identifier of the constructor signature */
    identifier: string;
    /** The parameters of the constructor signature */
    parameters: SignatureParameterPart[];
}

/**
 * Get the parts of a method/constructor signature
 * @param parameters The parameters of the method/constructor
 * @returns The parts of the method/constructor signature
 */
function getParameterParts(parameters: string): SignatureParameterPart[] {
    const parametersArray = parameters.split(',').filter(param => !!param);

    return parametersArray.map(parameter => {
        const regexResult = /^\s*(?<type>[\w.]+[[\]]*)\s+(?<identifier>\w+)\s*,?/.exec(parameter);
        return regexResult!.groups as unknown as SignatureParameterPart;
    });
}

/**
 * Get the parts of a method signature
 * @param identifier The method signature
 * @returns The parts of the method signature
 */
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

/**
 * Get the parts of a constructor signature
 * @param identifier The constructor signature
 * @returns The parts of the constructor signature
 */
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

/**
 * Mangle the parameters of a method/constructor signature
 * @param parameters The parameters to mangle
 * @param withIdentifiers Whether to include the parameter identifiers
 * @returns The mangled parameters
 */
export function mangleParameters(parameters: SignatureParameterPart[], withIdentifiers: boolean): string {
    return parameters
        .map(parameter => mangleType(parameter.type) + ':' + (withIdentifiers ? ` ${parameter.identifier}` : ''))
        .join('');
}
