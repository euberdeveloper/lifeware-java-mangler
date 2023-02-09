import { InvalidClassIdentifierError } from '../../errors/index.js';
import { generateMergeOptions } from '../../utils/options.js';

import { mangleClassIdentifier, validateClassIdentifier } from '../index.js';

export interface MangleClassDefinitionOptionsInternal {
    /**
     * The package of the class
     */
    package: string;
    /**
     * The superclass of the class
     **/
    superclass: string;
    /**
     * The package of the superclass
     */
    superclassPackage: string;
    /**
     * The instance variable names of the class
     */
    istanceVariableNames: string[];
    /**
     * The class instance variable names of the class
     */
    classInstanceVariableNames: string[];
    /**
     * The category of the class
     */
    category: string;
}
/**
 * The options for [[mangleClassDefinition]]
 */
export type MangleClassDefinitionOptions = Partial<MangleClassDefinitionOptionsInternal>;

/**
 * The default options for [[mangleClassDefinition]]
 */
export const DEFAULT_MANGLE_CLASS_DEFINITION_OPTIONS: MangleClassDefinitionOptionsInternal = {
    package: 'Lifeware',
    superclass: 'java.lang.Object',
    superclassPackage: 'Lifeware',
    istanceVariableNames: [],
    classInstanceVariableNames: [],
    category: 'java-api'
};

const mergeOptions = generateMergeOptions<MangleClassDefinitionOptionsInternal, MangleClassDefinitionOptions>(
    DEFAULT_MANGLE_CLASS_DEFINITION_OPTIONS
);

/**
 * Mangles a class definition given its identifier
 * @param identifier The class identifier of the class to mangle
 * @param options The options to use
 * @returns The mangled class definition
 */
export function mangleClassDefinition(identifier: string, options: MangleClassDefinitionOptions = {}): string {
    if (!validateClassIdentifier(identifier)) {
        throw new InvalidClassIdentifierError(undefined, identifier);
    }

    const opts = mergeOptions(options);
    return `Smalltalk.${opts.package} defineClass: #${mangleClassIdentifier(identifier)}
	superclass: #{${opts.superclassPackage}.${mangleClassIdentifier(opts.superclass)}}
	indexedType: #none
	private: false
	instanceVariableNames: '${opts.istanceVariableNames.join(', ')}'
	classInstanceVariableNames: '${opts.classInstanceVariableNames.join(', ')}'
	imports: ''
	category: '${opts.category}'`;
}
