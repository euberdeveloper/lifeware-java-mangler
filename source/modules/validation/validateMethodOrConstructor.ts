export const METHOD_SIGNATURE_REGEX =
    /^\s*(?<returnType>[\w.]+(\[])*)\s+(?<identifier>\w+)\s*\(\s*(?<parameters>(\s*[\w.]+(\[])*\s+\w+\s*,?)*)\)\s*;?\s*$/;
export const CONSTRUCTOR_SIGNATURE_REGEX =
    /^\s*(?<identifier>\w+)\s*\(\s*(?<parameters>(\s*[\w.]+(\[])*\s+\w+\s*,?)*)\)\s*;?\s*$/;

export function validateMethodSignature(type: string): boolean {
    return METHOD_SIGNATURE_REGEX.test(type);
}

export function validateConstructorSignature(type: string): boolean {
    return CONSTRUCTOR_SIGNATURE_REGEX.test(type);
}
