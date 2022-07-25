import { InvalidConstructorError /*, InvalidMethodError */ } from '../../errors/index.js';
import {
    getConstructorParts,
    // getMethodParts,
    mangleParameters,
    SignatureParameterPart
} from '../../utils/parseMethodOrConstructor.js';
import { manglePrimitiveType, mangleString } from '../index.js';

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

// export function mangleMethodDefinition(identifier: string): string {
//     const parts = getMethodParts(identifier);

//     if (!parts) {
//         throw new InvalidMethodError(`Could not parse method ${identifier}`);
//     }

//     const signature =
//         'j_m_' +
//         mangleType(parts.returnType) +
//         mangleString(`${parts.identifier}:`) +
//         mangleParameters(parts.parameters);
// }

export function mangleConstructorDefinition(identifier: string): string {
    const parts = getConstructorParts(identifier);

    if (!parts) {
        throw new InvalidConstructorError(`Could not parse constructor ${identifier}`);
    }

    const signatureWithoutParameters = 'j_c_' + mangleString(':');
    const smalltalkSignature = signatureWithoutParameters + mangleParameters(parts.parameters, true);
    const mangledMethodSignature = signatureWithoutParameters + mangleParameters(parts.parameters, false);
    const mangledJvmArguments = mangleSmalltalkJVMArguments(parts.parameters);

    return `${smalltalkSignature}
    ^JVM_Bridge default
        callConstructor: self
        mangledName: #${mangledMethodSignature}${mangledJvmArguments}`;
}
