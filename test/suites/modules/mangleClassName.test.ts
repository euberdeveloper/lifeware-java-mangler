import { expect } from 'chai';

import { mangleClassName } from '@src/modules/mangleClassName.js';

export default function testMangleClassName(): void {
    describe('Test @/modules/mangleClassName', function () {
        it(`Should mangle correctly a class name without package "MyClass"`, function () {
            const expected = 'JC_MyClass';
            const result = mangleClassName('MyClass');

            expect(result).to.equal(expected);
        });

        it(`Should mangle correctly a class name without package "EugenioBerretta"`, function () {
            const expected = 'JC_EugenioBerretta';
            const result = mangleClassName('EugenioBerretta');

            expect(result).to.equal(expected);
        });

        it(`Should mangle correctly a class name with a short package "java.lang.String"`, function () {
            const expected = 'JC_java_Slang_SString';
            const result = mangleClassName('java.lang.String');

            expect(result).to.equal(expected);
        });

        it(`Should mangle correctly a class name with a short package "java.util.ArrayList"`, function () {
            const expected = 'JC_java_Sutil_SArrayList';
            const result = mangleClassName('java.util.ArrayList');

            expect(result).to.equal(expected);
        });

        it(`Should mangle correctly a class name with a long package "uno.due.tre.quattro.cinque.sei.Stanco"`, function () {
            const expected = 'JC_uno_Sdue_Stre_Squattro_Scinque_Ssei_SStanco';
            const result = mangleClassName('uno.due.tre.quattro.cinque.sei.Stanco');

            expect(result).to.equal(expected);
        });

        it(`Should mangle correctly a class name with a long package "un.do.tri.quatro.sinque.sie.Straco"`, function () {
            const expected = 'JC_un_Sdo_Stri_Squatro_Ssinque_Ssie_SStraco';
            const result = mangleClassName('un.do.tri.quatro.sinque.sie.Straco');

            expect(result).to.equal(expected);
        });

        it(`Should mangle correctly a class name of a nested class without package "MyClass.MySubClass"`, function () {
            const expected = 'JC_MyClass_DMySubClass';
            const result = mangleClassName('MyClass.MySubClass');

            expect(result).to.equal(expected);
        });

        it(`Should mangle correctly a class name of a nested class with package "java.util.Base64.Decoder"`, function () {
            const expected = 'JC_java_Sutil_SBase64_DDecoder';
            const result = mangleClassName('java.util.Base64.Decoder');

            expect(result).to.equal(expected);
        });

        it(`Should mangle correctly a class name of a nested class with package and nested multiplely "java.util.Base64.Decoder.Mah"`, function () {
            const expected = 'JC_java_Sutil_SBase64_DDecoder_DMah';
            const result = mangleClassName('java.util.Base64.Decoder.Mah');

            expect(result).to.equal(expected);
        });
    });
}
