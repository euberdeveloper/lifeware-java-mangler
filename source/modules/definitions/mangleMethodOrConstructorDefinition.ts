import { PrimitiveType } from '../../types/index.js';
import {
    getConstructorParts,
    getMethodParts,
    mangleParameters,
    SignatureParameterPart
} from '../../utils/parseMethodOrConstructor.js';
import { mangleClassIdentifier, manglePrimitiveType, mangleString, mangleType } from '../index.js';

const RETURN_TYPE_MAPPER: Record<PrimitiveType, string> = {
    byte: 'byteResult',
    short: 'shortResult',
    int: 'intResult',
    long: 'longResult',
    float: 'floatResult',
    double: 'doubleResult',
    boolean: 'booleanResult',
    char: 'charResult',
    void: ''
};

function mangleSmalltalkJVMArguments(parameters: SignatureParameterPart[]): string {
    const separator = '\n\t\t'.replace(/\t/g, '    ');
    return parameters.length
        ? separator +
              parameters
                  .map(parameter => {
                      const mangledType = manglePrimitiveType(parameter.type) ?? 'L';
                      return `arg${mangledType}: ${parameter.identifier}`;
                  })
                  .join(separator)
        : '';
}

function getHandleResult(type: string): string {
    return RETURN_TYPE_MAPPER[type] ?? `objectResultOn: ${mangleClassIdentifier(type)}`;
}

export function mangleMethodDefinition(identifier: string): string {
    const parts = getMethodParts(identifier);

    const signatureWithoutParameters = 'j_m_' + mangleType(parts.returnType) + mangleString(`${parts.identifier}:`);
    const smalltalkSignature = signatureWithoutParameters + mangleParameters(parts.parameters, true);
    const mangledMethodSignature = signatureWithoutParameters + mangleParameters(parts.parameters, false);
    const mangledJvmArguments = mangleSmalltalkJVMArguments(parts.parameters);
    const mangledCallMethod = '$' + (manglePrimitiveType(parts.returnType) ?? 'L').toLocaleLowerCase();
    const mangledHandledResult = getHandleResult(parts.returnType);
    const bodyWithoutReturn = `JVM_Bridge default
    callMethod: ${mangledCallMethod}
    jobj: self
    mangledName: #${mangledMethodSignature}${mangledJvmArguments}`;
    const bodyWithReturn =
        parts.returnType === 'void' ? bodyWithoutReturn : `^(${bodyWithoutReturn}) ${mangledHandledResult}`;
    return `${smalltalkSignature}
    ${bodyWithReturn}`;
}

export function mangleConstructorDefinition(identifier: string): string {
    const parts = getConstructorParts(identifier);

    const signatureWithoutParameters = 'j_c_' + mangleString(':');
    const smalltalkSignature = signatureWithoutParameters + mangleParameters(parts.parameters, true);
    const mangledConstructorSignature = signatureWithoutParameters + mangleParameters(parts.parameters, false);
    const mangledJvmArguments = mangleSmalltalkJVMArguments(parts.parameters);

    return `${smalltalkSignature}
    ^JVM_Bridge default
        callConstructor: self
        mangledName: #${mangledConstructorSignature}${mangledJvmArguments}`;
}
