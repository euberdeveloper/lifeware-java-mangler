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
        });

        describe('Constructors', function () {});
    });
}
