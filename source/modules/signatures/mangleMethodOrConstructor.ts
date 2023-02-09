import { getConstructorParts, getMethodParts, mangleParameters } from '@/utils/parseMethodOrConstructor.js';

import { mangleString, mangleType } from '../index.js';
/**
 * Mangles a method signature
 * @param signature The method signature to mangle
 * @returns The mangled method signature
 */
export function mangleMethodSignature(signature: string): string {
    const parts = getMethodParts(signature);

    return (
        'j_m_' +
        mangleType(parts.returnType) +
        mangleString(`${parts.identifier}:`) +
        mangleParameters(parts.parameters, false)
    );
}

/**
 * Mangles a constructor signature
 * @param signature The constructor signature to mangle
 * @returns The mangled constructor signature
 */
export function mangleConstructorSignature(signature: string): string {
    const parts = getConstructorParts(signature);
    return 'j_c_' + mangleString(':') + mangleParameters(parts.parameters, false);
}
