import { generateMergeOptions } from '../../utils/options.js';

import { mangleClassName } from '../index.js';

export interface MangleClassDefinitionOptionsInternal {
    package: string;
    superclass: string;
    istanceVariableNames: string[];
    classInstanceVariableNames: string[];
    category: string;
}
export type MangleClassDefinitionOptions = Partial<MangleClassDefinitionOptionsInternal>;

export const DEFAULT_MANGLE_CLASS_DEFINITION_OPTIONS: MangleClassDefinitionOptionsInternal = {
    package: 'Lifeware',
    superclass: 'java.lang.Object',
    istanceVariableNames: [],
    classInstanceVariableNames: [],
    category: 'java-api'
};

const mergeOptions = generateMergeOptions<MangleClassDefinitionOptionsInternal, MangleClassDefinitionOptions>(
    DEFAULT_MANGLE_CLASS_DEFINITION_OPTIONS
);

export function mangleClassDefinition(identifier: string, options: MangleClassDefinitionOptions): string {
    const opts = mergeOptions(options);
    return `Smalltalk.${opts.package} defineClass: #${mangleClassName(identifier)}
	superclass: #{${opts.package}.${mangleClassName(opts.superclass)}}
	indexedType: #none
	private: false
	instanceVariableNames: '${opts.istanceVariableNames.join(', ')}'
	classInstanceVariableNames: '${opts.classInstanceVariableNames.join(', ')}'
	imports: ''
	category: '${opts.category}'`;
}
