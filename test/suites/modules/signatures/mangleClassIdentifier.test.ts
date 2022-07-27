import { InvalidClassIdentifierError } from '@src/errors/index.js';
import { mangleClassIdentifier } from '@src/modules/signatures/mangleClassIdentifier.js';

describe('Test @/modules/signatures/mangleClassIdentifier', function () {
    describe('Checks', function () {
        it(`Should mangle correctly a class name without package "MyClass"`, function () {
            const expected = 'JC_MyClass';
            const result = mangleClassIdentifier('MyClass');

            expect(result).toEqual(expected);
        });

        it(`Should mangle correctly a class name without package "EugenioBerretta"`, function () {
            const expected = 'JC_EugenioBerretta';
            const result = mangleClassIdentifier('EugenioBerretta');

            expect(result).toEqual(expected);
        });

        it(`Should mangle correctly a class name with a short package "java.lang.String"`, function () {
            const expected = 'JC_java_Slang_SString';
            const result = mangleClassIdentifier('java.lang.String');

            expect(result).toEqual(expected);
        });

        it(`Should mangle correctly a class name with a short package "java.util.ArrayList"`, function () {
            const expected = 'JC_java_Sutil_SArrayList';
            const result = mangleClassIdentifier('java.util.ArrayList');

            expect(result).toEqual(expected);
        });

        it(`Should mangle correctly a class name with a long package "uno.due.tre.quattro.cinque.sei.Stanco"`, function () {
            const expected = 'JC_uno_Sdue_Stre_Squattro_Scinque_Ssei_SStanco';
            const result = mangleClassIdentifier('uno.due.tre.quattro.cinque.sei.Stanco');

            expect(result).toEqual(expected);
        });

        it(`Should mangle correctly a class name with a long package "un.do.tri.quatro.sinque.sie.Straco"`, function () {
            const expected = 'JC_un_Sdo_Stri_Squatro_Ssinque_Ssie_SStraco';
            const result = mangleClassIdentifier('un.do.tri.quatro.sinque.sie.Straco');

            expect(result).toEqual(expected);
        });

        it(`Should mangle correctly a class name of a nested class without package "MyClass.MySubClass"`, function () {
            const expected = 'JC_MyClass_DMySubClass';
            const result = mangleClassIdentifier('MyClass.MySubClass');

            expect(result).toEqual(expected);
        });

        it(`Should mangle correctly a class name of a nested class with package "java.util.Base64.Decoder"`, function () {
            const expected = 'JC_java_Sutil_SBase64_DDecoder';
            const result = mangleClassIdentifier('java.util.Base64.Decoder');

            expect(result).toEqual(expected);
        });

        it(`Should mangle correctly a class name of a nested class with package and nested multiplely "java.util.Base64.Decoder.Mah"`, function () {
            const expected = 'JC_java_Sutil_SBase64_DDecoder_DMah';
            const result = mangleClassIdentifier('java.util.Base64.Decoder.Mah');

            expect(result).toEqual(expected);
        });
    });

    describe('Errors', function () {
        it(`Should throw an error for invalid class identifier"`, function () {
            expect(() => mangleClassIdentifier('1Ciao')).toThrowError(InvalidClassIdentifierError);
        });
        it(`Should throw an error for invalid class identifier"`, function () {
            expect(() => mangleClassIdentifier('ciao')).toThrowError(InvalidClassIdentifierError);
        });
        it(`Should throw an error for invalid class identifier"`, function () {
            expect(() => mangleClassIdentifier('Ci@o')).toThrowError(InvalidClassIdentifierError);
        });
    });
});
