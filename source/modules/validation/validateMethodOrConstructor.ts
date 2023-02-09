export const METHOD_SIGNATURE_REGEX =
    /^\s*(?<returnType>[\w.]+(\[])*)\s+(?<identifier>\w+)\s*\(\s*(?<parameters>(\s*[\w.]+(\[])*\s+\w+\s*,?)*)\)\s*;?\s*$/;
export const CONSTRUCTOR_SIGNATURE_REGEX =
    /^\s*(?<identifier>\w+)\s*\(\s*(?<parameters>(\s*[\w.]+(\[])*\s+\w+\s*,?)*)\)\s*;?\s*$/;

/**
 * Validates a method signature
 * @param signature The method signature to validate
 * @returns True if the signature is valid, false otherwise
 */
export function validateMethodSignature(signature: string): boolean {
    return METHOD_SIGNATURE_REGEX.test(signature);
}

/**
 * Validates a constructor signature
 * @param signature The constructor signature to validate
 * @returns True if the signature is valid, false otherwise
 */
export function validateConstructorSignature(signature: string): boolean {
    return CONSTRUCTOR_SIGNATURE_REGEX.test(signature);
}
