import { InvalidClassIdentifierError } from '../../errors/index.js';
import { generateMergeOptions } from '../../utils/options.js';

import { mangleClassIdentifier, validateClassIdentifier } from '../index.js';

export interface MangleClassDefinitionOptionsInternal {
    package: string;
    superclass: string;
    superclassPackage: string;
    istanceVariableNames: string[];
    classInstanceVariableNames: string[];
    category: string;
}
export type MangleClassDefinitionOptions = Partial<MangleClassDefinitionOptionsInternal>;

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
