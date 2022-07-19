import { InvalidConstructorError, InvalidMethodError } from '@/errors/index.js';
import { mangleString, mangleType } from '@/modules/index.js';

interface MethodParameterPart {
    type: string;
    identifier: string;
}

interface MethodParts {
    returnType: string;
    identifier: string;
    parameters: MethodParameterPart[];
}

interface ConstructorParts {
    identifier: string;
    parameters: MethodParameterPart[];
}

function getParameterParts(parameters: string): MethodParameterPart[] {
    const parametersArray = parameters.split(',').filter(param => !!param);

    return parametersArray.map(parameter => {
        const regexResult = /^\s*(?<type>[\w.]+[[\]]*)\s+(?<identifier>\w+)\s*,?/.exec(parameter);
        return regexResult!.groups as unknown as MethodParameterPart;
    });
}

function getMethodParts(identifier: string): MethodParts | null {
    const regexResult =
        /^\s*(?<returnType>[\w.]+(\[])*)\s+(?<identifier>\w+)\s*\(\s*(?<parameters>(\s*[\w.]+(\[])*\s+\w+\s*,?)*)\)\s*;?\s*$/.exec(
            identifier
        );

    if (!regexResult?.groups) {
        return null;
    }

    return {
        returnType: regexResult.groups.returnType,
        identifier: regexResult.groups.identifier,
        parameters: getParameterParts(regexResult.groups.parameters)
    };
}

function getConstructorParts(identifier: string): ConstructorParts | null {
    const regexResult = /^\s*(?<identifier>\w+)\s*\(\s*(?<parameters>(\s*[\w.]+(\[])*\s+\w+\s*,?)*)\)\s*;?\s*$/.exec(
        identifier
    );

    if (!regexResult?.groups) {
        return null;
    }

    return {
        identifier: regexResult.groups.identifier,
        parameters: getParameterParts(regexResult.groups.parameters)
    };
}

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
