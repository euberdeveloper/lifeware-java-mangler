import { InvalidConstructorError, InvalidMethodError } from '@src/errors/index.js';
import {
    mangleConstructorSignature,
    mangleMethodSignature
} from '@src/modules/signatures/mangleMethodOrConstructor.js';

describe('Test @/modules/signatures/mangleMethodSignatureOrConstructor', function () {
    describe('Methods', function () {
        describe('Without parameters', function () {
            it(`Should mangle "void print();"`, function () {
                const expected = 'j_m_Vprint_C';
                const result = mangleMethodSignature('void print();');

                expect(result).toEqual(expected);
            });

            it(`Should mangle "     void     print(    )  ;      "`, function () {
                const expected = 'j_m_Vprint_C';
                const result = mangleMethodSignature('     void     print(    )  ;      ');

                expect(result).toEqual(expected);
            });

            it(`Should mangle "boolean isEmpty();"`, function () {
                const expected = 'j_m_ZisEmpty_C';
                const result = mangleMethodSignature('boolean isEmpty();');

                expect(result).toEqual(expected);
            });

            it(`Should mangle " boolean isEmpty(         )"`, function () {
                const expected = 'j_m_ZisEmpty_C';
                const result = mangleMethodSignature(' boolean isEmpty(         )');
                expect(result).toEqual(expected);
            });

            it(`Should mangle "int count()"`, function () {
                const expected = 'j_m_Icount_C';
                const result = mangleMethodSignature('int count()');

                expect(result).toEqual(expected);
            });

            it(`Should mangle " int count(         )"   `, function () {
                const expected = 'j_m_Icount_C';
                const result = mangleMethodSignature(' int count(         )');
                expect(result).toEqual(expected);
            });

            it(`Should mangle " java.lang.String getName ();"`, function () {
                const expected = 'j_m_Ljava_Slang_SString_MgetName_C';
                const result = mangleMethodSignature(' java.lang.String getName ();');

                expect(result).toEqual(expected);
            });

            it(`Should mangle " int _underscoredAndNumb3red ();"`, function () {
                const expected = 'j_m_I__underscoredAndNumb3red_C';
                const result = mangleMethodSignature(' int _underscoredAndNumb3red ();');

                expect(result).toEqual(expected);
            });
        });

        describe('With parameters', function () {
            it(`Should mangle "void print(boolean show);"`, function () {
                const expected = 'j_m_Vprint_CZ:';
                const result = mangleMethodSignature('void print(boolean show);');

                expect(result).toEqual(expected);
            });

            it(`Should mangle " void print(     boolean     show     );"`, function () {
                const expected = 'j_m_Vprint_CZ:';
                const result = mangleMethodSignature(' void print(     boolean     show     );');

                expect(result).toEqual(expected);
            });

            it(`Should mangle "void print(boolean show, int bobbo, float coccoB3ll_o);"`, function () {
                const expected = 'j_m_Vprint_CZ:I:F:';
                const result = mangleMethodSignature('void print(boolean show, int bobbo, float coccoB3ll_o);');

                expect(result).toEqual(expected);
            });

            it(`Should mangle "void print(boolean show, java.lang.Pippo.Pluto.Paperino bobbo, float coccoB3ll_o);"`, function () {
                const expected = 'j_m_Vprint_CZ:Ljava_Slang_SPippo_DPluto_DPaperino_M:F:';
                const result = mangleMethodSignature(
                    'void print(boolean show, java.lang.Pippo.Pluto.Paperino bobbo, float coccoB3ll_o);'
                );

                expect(result).toEqual(expected);
            });

            it(`Should mangle "String some_method_name(int index, java.lang.String[] options)"`, function () {
                const expected = 'j_m_Ljava_Slang_SString_Msome__method__name_CI:_BLjava_Slang_SString_M:';
                const result = mangleMethodSignature(
                    'java.lang.String some_method_name(int index, java.lang.String[] options)'
                );

                expect(result).toEqual(expected);
            });

            it(`Should mangle "String some_method_name(int index, java.lang.String[][] options)"`, function () {
                const expected = 'j_m_Ljava_Slang_SString_Msome__method__name_CI:_B_BLjava_Slang_SString_M:';
                const result = mangleMethodSignature(
                    'java.lang.String some_method_name(int index, java.lang.String[][] options)'
                );

                expect(result).toEqual(expected);
            });
        });
    });

    describe('Constructors', function () {
        it(`Should mangle "String();"`, function () {
            const expected = 'j_c__C';
            const result = mangleConstructorSignature('String();');

            expect(result).toEqual(expected);
        });

        it(`Should mangle "     Gabibbo  (       ) ; "`, function () {
            const expected = 'j_c__C';
            const result = mangleConstructorSignature('     Gabibbo  (       ) ; ');

            expect(result).toEqual(expected);
        });

        it(`Should mangle "     Gabibbo  (       )  "`, function () {
            const expected = 'j_c__C';
            const result = mangleConstructorSignature('     Gabibbo  (       )  ');

            expect(result).toEqual(expected);
        });

        it(`Should mangle "URL(java.lang.String string)"`, function () {
            const expected = 'j_c__CLjava_Slang_SString_M:';
            const result = mangleConstructorSignature('URL(java.lang.String string)');

            expect(result).toEqual(expected);
        });

        it(`Should mangle "MyClass(int index, java.lang.String[][] options)"`, function () {
            const expected = 'j_c__CI:_B_BLjava_Slang_SString_M:';
            const result = mangleConstructorSignature('MyClass(int index, java.lang.String[][] options)');

            expect(result).toEqual(expected);
        });

        it(`Should mangle "Caccu(boolean show, java.lang.Pippo.Pluto.Paperino bobbo, float coccoB3ll_o);"`, function () {
            const expected = 'j_c__CZ:Ljava_Slang_SPippo_DPluto_DPaperino_M:F:';
            const result = mangleConstructorSignature(
                'Caccu(boolean show, java.lang.Pippo.Pluto.Paperino bobbo, float coccoB3ll_o);'
            );

            expect(result).toEqual(expected);
        });
    });

    describe('Errors', function () {
        it(`Should throw an error for invalid method"`, function () {
            expect(() => mangleMethodSignature('Bocia')).toThrowError(InvalidMethodError);
        });
        it(`Should throw an error for invalid constructor"`, function () {
            expect(() => mangleConstructorSignature('Bocia')).toThrowError(InvalidConstructorError);
        });
    });
});
