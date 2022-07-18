import { mangleString, mangleType } from '.';

interface MethodParameterPart {
    type: string;
    identifier: string;
}

interface MethodParts {
    returnType: string;
    identifier: string;
    parameters: MethodParameterPart[];
}

function getParameterParts(parameters: string): MethodParameterPart[] {
    const parametersArray = parameters.split(',');

    return parametersArray.map(parameter => {
        const regexResult = /^\s*(?<type>\w+)\s+(?<identifier>\w+)\s*,?/.exec(parameter);
        return regexResult!.groups as unknown as MethodParameterPart;
    });
}

function getMethodParts(identifier: string): MethodParts | null {
    const regexResult =
        /^\s*(?<returnType>\w+)\s+(?<identifier>\w+)\s*\((?<parameters>(\s*\w+\s+\w+\s*,?)*)\)\s*;\s*$/.exec(
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

export function mangleMethod(identifier: string): string {
    const parts = getMethodParts(identifier);

    if (!parts) {
        throw new Error(`Could not parse method ${identifier}`);
    }

    return (
        'j_m_' +
        mangleType(parts.returnType) +
        mangleString(`${parts.identifier}:`) +
        parts.parameters
            .map(parameter => mangleType(parameter.type) + mangleString(`${parameter.identifier}:`))
            .join(' ')
    );
}

export function mangleConstructor(identifier: string): string {
    const parts = getMethodParts(identifier);

    if (!parts) {
        throw new Error(`Could not parse method ${identifier}`);
    }

    return (
        'j_c_' +
        mangleString(':') +
        parts.parameters
            .map(parameter => mangleType(parameter.type) + mangleString(`${parameter.identifier}:`))
            .join(' ')
    );
}
