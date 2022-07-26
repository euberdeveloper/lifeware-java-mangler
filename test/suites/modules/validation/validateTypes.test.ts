import { validateType } from '@src/modules/validation/validateTypes.js';

describe('Test @/modules/validation/validateTypes', function () {
    describe('Primitive types', function () {
        it(`Should validate positively the type 'boolean'`, function () {
            const result = validateType('boolean');
            expect(result).toBeTruthy();
        });

        it(`Should validate positively the type 'byte'`, function () {
            const result = validateType('byte');
            expect(result).toBeTruthy();
        });

        it(`Should validate positively the type 'char'`, function () {
            const result = validateType('char');
            expect(result).toBeTruthy();
        });

        it(`Should validate positively the type 'double'`, function () {
            const result = validateType('double');
            expect(result).toBeTruthy();
        });

        it(`Should validate positively the type 'float'`, function () {
            const result = validateType('float');
            expect(result).toBeTruthy();
        });

        it(`Should validate positively the type 'int'`, function () {
            const result = validateType('int');
            expect(result).toBeTruthy();
        });

        it(`Should validate positively the type 'long'`, function () {
            const result = validateType('long');
            expect(result).toBeTruthy();
        });

        it(`Should validate positively the type 'short'`, function () {
            const result = validateType('short');
            expect(result).toBeTruthy();
        });

        it(`Should validate positively the type 'void'`, function () {
            const result = validateType('void');
            expect(result).toBeTruthy();
        });

        it(`Should validate negatively the type 'gabibbo'`, function () {
            const result = validateType('gabibbo');
            expect(result).toBeFalsy();
        });
    });

    describe('Class types', function () {
        it(`Should validate positively the class type without package "Ciao"`, function () {
            const result = validateType('Ciao');
            expect(result).toBeTruthy();
        });

        it(`Should validate positively the class type without package "CiaoComeVa"`, function () {
            const result = validateType('Ciao');
            expect(result).toBeTruthy();
        });

        it(`Should validate positively the class type without package "CiaoC0m3VA"`, function () {
            const result = validateType('Ciao');
            expect(result).toBeTruthy();
        });

        it(`Should validate negatively the class type without package "123Ciao"`, function () {
            const result = validateType('123Ciao');
            expect(result).toBeFalsy();
        });

        it(`Should validate positively the class type with package "java.lang.String"`, function () {
            const result = validateType('java.lang.String');
            expect(result).toBeTruthy();
        });

        it(`Should validate positively the class type with package "java.utils.Gabibbo"`, function () {
            const result = validateType('java.utils.Gabibbo');
            expect(result).toBeTruthy();
        });

        it(`Should validate negatively the class type with package "Java.utils.Gabibbo"`, function () {
            const result = validateType('Java.utils.Gabibbo');
            expect(result).toBeFalsy();
        });

        it(`Should validate negatively the class type with package "java..utils.Gabibbo"`, function () {
            const result = validateType('java..utils.Gabibbo');
            expect(result).toBeFalsy();
        });

        it(`Should validate positively the class type with package and nested classes "java.utils.Gabibbo.Burundu"`, function () {
            const result = validateType('java.utils.Gabibbo.Burundu');
            expect(result).toBeTruthy();
        });

        it(`Should validate positively the class type with package and nested classes "Prova.Test"`, function () {
            const result = validateType('Prova.Test');
            expect(result).toBeTruthy();
        });

        it(`Should validate negatively the class type with package and nested classes "java.utils.Gabibbo..Burundu"`, function () {
            const result = validateType('java.utils.Gabibbo..Burundu');
            expect(result).toBeFalsy();
        });
    });

    describe('Array types', function () {
        it(`Should validate positively the type 'float[]'`, function () {
            const result = validateType('float[]');
            expect(result).toBeTruthy();
        });

        it(`Should validate positively the type 'float[][]'`, function () {
            const result = validateType('float[][]');
            expect(result).toBeTruthy();
        });

        it(`Should validate positively the type 'float[][][][][]'`, function () {
            const result = validateType('float[][][][][]');
            expect(result).toBeTruthy();
        });

        it(`Should validate positively the type 'float[] [][]   [][   ]'`, function () {
            const result = validateType('float[] [][]   [][   ]');
            expect(result).toBeTruthy();
        });

        it(`Should validate positively the type 'java.lang.String.Mah[]'`, function () {
            const result = validateType('java.lang.String.Mah[]');
            expect(result).toBeTruthy();
        });

        it(`Should validate positively the type 'java.lang.String.Mah[] [][]   [][   ]'`, function () {
            const result = validateType('java.lang.String.Mah[] [][]   [][   ]');
            expect(result).toBeTruthy();
        });
    });

    describe('Strange characters', function () {
        it(`Should validate negatively the type with a @`, function () {
            const result = validateType('Pizz@a');
            expect(result).toBeFalsy();
        });

        it(`Should validate negatively the type with a &`, function () {
            const result = validateType('Pizz&a');
            expect(result).toBeFalsy();
        });
    });

    describe('Blank spaces', function () {
        it(`Should validate positively the type '   boolean   '`, function () {
            const result = validateType('   boolean   ');
            expect(result).toBeTruthy();
        });

        it(`Should validate positively the type '    java.lang.String   '`, function () {
            const result = validateType('    java.lang.String   ');
            expect(result).toBeTruthy();
        });
    });
});
