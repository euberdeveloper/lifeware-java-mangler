import { expect } from 'chai';

import { mangleConstructor, mangleMethod } from '@src/modules/mangleMethodOrConstructor.js';

export default function testMangleMethodOrConstructor(): void {
    describe('Test @/modules/mangleMethodOrConstructor', function () {
        describe('Methods', function () {
            it(`Should mangle "void print();"`, function () {
                const expected = 'j_m_Vprint_C';
                const result = mangleMethod('void print();');

                expect(result).to.equal(expected);
            });

            it(`Should mangle "     void     print(    )  ;      "`, function () {
                const expected = 'j_m_Vprint_C';
                const result = mangleMethod('     void     print(    )  ;      ');

                expect(result).to.equal(expected);
            });

            it(`Should mangle "boolean isEmpty();"`, function () {
                const expected = 'j_m_ZisEmpty_C';
                const result = mangleMethod('boolean isEmpty();');

                expect(result).to.equal(expected);
            });

            it(`Should mangle " boolean isEmpty(         )"`, function () {
                const expected = 'j_m_ZisEmpty_C';
                const result = mangleMethod(' boolean isEmpty(         )');
                expect(result).to.equal(expected);
            });

            it(`Should mangle "int count()"`, function () {
                const expected = 'j_m_Icount_C';
                const result = mangleMethod('int count()');

                expect(result).to.equal(expected);
            });

            it(`Should mangle " int count(         )"   `, function () {
                const expected = 'j_m_Icount_C';
                const result = mangleMethod(' int count(         )');
                expect(result).to.equal(expected);
            });

            it(`Should mangle " java.lang.String getName ();"`, function () {
                const expected = 'j_m_Ljava_Slang_SString_MgetName_C';
                const result = mangleMethod(' java.lang.String getName ();');

                expect(result).to.equal(expected);
            });
        });

        describe('Constructors', function () {});
    });
}
