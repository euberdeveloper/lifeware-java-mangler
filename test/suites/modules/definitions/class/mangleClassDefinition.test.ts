import { InvalidClassIdentifierError } from '@src/errors/index.js';
import { mangleClassDefinition } from '@src/modules/definitions/mangleClassDefinition.js';

import firstExpected from './expecteds/first.expected.js';
import secondExpected from './expecteds/second.expected.js';

describe('Test @/modules/definitions/mangleClassDefinition', function () {
    describe('Checks', function () {
        it(`Should mangle correctly a class definition "java.lang.MyClass" with default options`, function () {
            const expected = firstExpected;
            const result = mangleClassDefinition('java.lang.MyClass');

            expect(result).toEqual(expected);
        });

        it(`Should mangle correctly a class definition "java.lang.MyClass" with custom options`, function () {
            const expected = secondExpected;
            const result = mangleClassDefinition('java.lang.MyClass', {
                package: 'Burundu',
                superclass: 'java.lang.Burundi',
                superclassPackage: 'Burundas',
                istanceVariableNames: ['x', 'y', 'z'],
                classInstanceVariableNames: ['a', 'b', 'c'],
                category: 'Gabibbo'
            });

            expect(result).toEqual(expected);
        });
    });

    describe('Errors', function () {
        it(`Should throw an error for invalid class identifier"`, function () {
            expect(() => mangleClassDefinition('1Ciao')).toThrowError(InvalidClassIdentifierError);
        });
        it(`Should throw an error for invalid class identifier"`, function () {
            expect(() => mangleClassDefinition('ciao')).toThrowError(InvalidClassIdentifierError);
        });
        it(`Should throw an error for invalid class identifier"`, function () {
            expect(() => mangleClassDefinition('Ci@o')).toThrowError(InvalidClassIdentifierError);
        });
    });
});
