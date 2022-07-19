import { expect } from 'chai';

import { mangleConstructor, mangleMethod } from '@src/modules/mangleMethodOrConstructor.js';

export default function testMangleMethodOrConstructor(): void {
    describe('Test @/modules/mangleMethodOrConstructor', function () {
        describe('Methods', function () {
            describe('Without parameters', function () {
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

                it(`Should mangle " int _underscoredAndNumb3red ();"`, function () {
                    const expected = 'j_m_I__underscoredAndNumb3red_C';
                    const result = mangleMethod(' int _underscoredAndNumb3red ();');

                    expect(result).to.equal(expected);
                });
            });

            describe('With parameters', function () {
                it(`Should mangle "void print(boolean show);"`, function () {
                    const expected = 'j_m_Vprint_CZ:';
                    const result = mangleMethod('void print(boolean show);');

                    expect(result).to.equal(expected);
                });

                it(`Should mangle " void print(     boolean     show     );"`, function () {
                    const expected = 'j_m_Vprint_CZ:';
                    const result = mangleMethod(' void print(     boolean     show     );');

                    expect(result).to.equal(expected);
                });

                it(`Should mangle "void print(boolean show, int bobbo, float coccoB3ll_o);"`, function () {
                    const expected = 'j_m_Vprint_CZ:I:F:';
                    const result = mangleMethod('void print(boolean show, int bobbo, float coccoB3ll_o);');

                    expect(result).to.equal(expected);
                });

                it(`Should mangle "void print(boolean show, java.lang.Pippo.Pluto.Paperino bobbo, float coccoB3ll_o);"`, function () {
                    const expected = 'j_m_Vprint_CZ:Ljava_Slang_SPippo_DPluto_DPaperino_M:F:';
                    const result = mangleMethod(
                        'void print(boolean show, java.lang.Pippo.Pluto.Paperino bobbo, float coccoB3ll_o);'
                    );

                    expect(result).to.equal(expected);
                });

                it(`Should mangle "String some_method_name(int index, String[] options)"`, function () {
                    const expected = 'j_m_Ljava_Slang_SString_Msome__method__name_CI:_BLjava_Slang_SString_M:';
                    const result = mangleMethod(
                        'java.lang.String some_method_name(int index, java.lang.String[] options)'
                    );

                    expect(result).to.equal(expected);
                });

                it(`Should mangle "String some_method_name(int index, String[][] options)"`, function () {
                    const expected = 'j_m_Ljava_Slang_SString_Msome__method__name_CI:_B_BLjava_Slang_SString_M:';
                    const result = mangleMethod(
                        'java.lang.String some_method_name(int index, java.lang.String[][] options)'
                    );

                    expect(result).to.equal(expected);
                });
            });
        });

        describe('Constructors', function () {
            it(`Should mangle "String();"`, function () {
                const expected = 'j_c__C';
                const result = mangleConstructor('String();');

                expect(result).to.equal(expected);
            });

            it(`Should mangle "     Gaibbo  (       ) ; "`, function () {
                const expected = 'j_c__C';
                const result = mangleConstructor('     Gaibbo  (       ) ; ');

                expect(result).to.equal(expected);
            });

            it(`Should mangle "     Gaibbo  (       )  "`, function () {
                const expected = 'j_c__C';
                const result = mangleConstructor('     Gaibbo  (       )  ');

                expect(result).to.equal(expected);
            });

            it(`Should mangle "URL(java.lang.String string)"`, function () {
                const expected = 'j_c__CLjava_Slang_SString_M:';
                const result = mangleConstructor('URL(java.lang.String string)');

                expect(result).to.equal(expected);
            });

            it(`Should mangle "MyClass(int index, java.lang.String[][] options)"`, function () {
                const expected = 'j_c__CI:_B_BLjava_Slang_SString_M:';
                const result = mangleConstructor('MyClass(int index, java.lang.String[][] options)');

                expect(result).to.equal(expected);
            });

            it(`Should mangle "Caccu(boolean show, java.lang.Pippo.Pluto.Paperino bobbo, float coccoB3ll_o);"`, function () {
                const expected = 'j_c__CZ:Ljava_Slang_SPippo_DPluto_DPaperino_M:F:';
                const result = mangleConstructor(
                    'Caccu(boolean show, java.lang.Pippo.Pluto.Paperino bobbo, float coccoB3ll_o);'
                );

                expect(result).to.equal(expected);
            });
        });
    });
}
