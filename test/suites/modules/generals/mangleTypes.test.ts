import { InvalidTypeError } from '@src/errors/index.js';
import { PrimitiveType } from '@src/types/index.js';
import { mangleType } from '@src/modules/general/mangleTypes.js';

describe('Test @/modules/general/mangleTypes', function () {
    describe('Primitive types', function () {
        it(`Should mangle correctly a boolean`, function () {
            const expected = 'Z';
            const result = mangleType('boolean' as PrimitiveType);

            expect(result).toEqual(expected);
        });

        it(`Should mangle correctly a byte`, function () {
            const expected = 'B';
            const result = mangleType('byte' as PrimitiveType);

            expect(result).toEqual(expected);
        });

        it(`Should mangle correctly a char`, function () {
            const expected = 'C';
            const result = mangleType('char' as PrimitiveType);

            expect(result).toEqual(expected);
        });
        it(`Should mangle correctly a double`, function () {
            const expected = 'D';
            const result = mangleType('double' as PrimitiveType);

            expect(result).toEqual(expected);
        });

        it(`Should mangle correctly a float`, function () {
            const expected = 'F';
            const result = mangleType('float' as PrimitiveType);

            expect(result).toEqual(expected);
        });

        it(`Should mangle correctly a int`, function () {
            const expected = 'I';
            const result = mangleType('int' as PrimitiveType);

            expect(result).toEqual(expected);
        });

        it(`Should mangle correctly a long`, function () {
            const expected = 'J';
            const result = mangleType('long' as PrimitiveType);

            expect(result).toEqual(expected);
        });

        it(`Should mangle correctly a short`, function () {
            const expected = 'S';
            const result = mangleType('short' as PrimitiveType);

            expect(result).toEqual(expected);
        });

        it(`Should mangle correctly a void`, function () {
            const expected = 'V';
            const result = mangleType('void' as PrimitiveType);

            expect(result).toEqual(expected);
        });
    });

    describe('Object types', function () {
        it(`Should mangle correctly an object without package "String"`, function () {
            const expected = 'LString_M';
            const result = mangleType('String');

            expect(result).toEqual(expected);
        });

        it(`Should mangle correctly an object without package "BurunduBurundu"`, function () {
            const expected = 'LBurunduBurundu_M';
            const result = mangleType('BurunduBurundu');

            expect(result).toEqual(expected);
        });

        it(`Should mangle correctly an object with package "java.lang.String"`, function () {
            const expected = 'Ljava_Slang_SString_M';
            const result = mangleType('java.lang.String');

            expect(result).toEqual(expected);
        });

        it(`Should mangle correctly an object with package "java.burundi.Burundu"`, function () {
            const expected = 'Ljava_Sburundi_SBurundu_M';
            const result = mangleType('java.burundi.Burundu');

            expect(result).toEqual(expected);
        });

        it(`Should mangle correctly an object with package and nested class "java.burundi.Burundu.Gabibbo"`, function () {
            const expected = 'Ljava_Sburundi_SBurundu_DGabibbo_M';
            const result = mangleType('java.burundi.Burundu.Gabibbo');

            expect(result).toEqual(expected);
        });
    });

    describe('Array types', function () {
        describe('Primitive types', function () {
            it(`Should mangle correctly an array of boolean`, function () {
                const expected = '_BZ';
                const result = mangleType('boolean[]');

                expect(result).toEqual(expected);
            });

            it(`Should mangle correctly an array of byte`, function () {
                const expected = '_BB';
                const result = mangleType('byte[]');

                expect(result).toEqual(expected);
            });

            it(`Should mangle correctly an array of char`, function () {
                const expected = '_BC';
                const result = mangleType('char[]');

                expect(result).toEqual(expected);
            });
            it(`Should mangle correctly an array of double`, function () {
                const expected = '_BD';
                const result = mangleType('double[]');

                expect(result).toEqual(expected);
            });

            it(`Should mangle correctly an array of float`, function () {
                const expected = '_BF';
                const result = mangleType('float[]');

                expect(result).toEqual(expected);
            });

            it(`Should mangle correctly an array of int`, function () {
                const expected = '_BI';
                const result = mangleType('int[]');

                expect(result).toEqual(expected);
            });

            it(`Should mangle correctly an array of long`, function () {
                const expected = '_BJ';
                const result = mangleType('long[]');

                expect(result).toEqual(expected);
            });

            it(`Should mangle correctly an array of short`, function () {
                const expected = '_BS';
                const result = mangleType('short[]');

                expect(result).toEqual(expected);
            });

            it(`Should mangle correctly an array of void`, function () {
                const expected = '_BV';
                const result = mangleType('void[]');

                expect(result).toEqual(expected);
            });
        });

        describe('Object types', function () {
            it(`Should mangle correctly an array of objects without package "String"`, function () {
                const expected = '_BLString_M';
                const result = mangleType('String[]');

                expect(result).toEqual(expected);
            });

            it(`Should mangle correctly an array of objects without package "BurunduBurundu"`, function () {
                const expected = '_BLBurunduBurundu_M';
                const result = mangleType('BurunduBurundu[]');

                expect(result).toEqual(expected);
            });

            it(`Should mangle correctly an array of objects with package "java.lang.String"`, function () {
                const expected = '_BLjava_Slang_SString_M';
                const result = mangleType('java.lang.String[]');

                expect(result).toEqual(expected);
            });

            it(`Should mangle correctly an array of objects with package "java.burundi.Burundu"`, function () {
                const expected = '_BLjava_Sburundi_SBurundu_M';
                const result = mangleType('java.burundi.Burundu[]');

                expect(result).toEqual(expected);
            });

            it(`Should mangle correctly an array of objects with package and nested class "java.burundi.Burundu.Gabibbo"`, function () {
                const expected = '_BLjava_Sburundi_SBurundu_DGabibbo_M';
                const result = mangleType('java.burundi.Burundu.Gabibbo[]');

                expect(result).toEqual(expected);
            });
        });

        describe('Multidimension arrays', function () {
            it(`Should mangle correctly a matrices of bytes`, function () {
                const expected = '_B_BB';
                const result = mangleType('byte[][]');

                expect(result).toEqual(expected);
            });

            it(`Should mangle correctly a cube of bytes`, function () {
                const expected = '_B_B_BB';
                const result = mangleType('byte[][][]');

                expect(result).toEqual(expected);
            });

            it(`Should mangle correctly a 5x5 of bytes`, function () {
                const expected = '_B_B_B_B_BB';
                const result = mangleType('byte[][][][][]');

                expect(result).toEqual(expected);
            });

            it(`Should mangle correctly a 5x5 of Strings`, function () {
                const expected = '_B_B_B_B_BLjava_Slang_SString_M';
                const result = mangleType('java.lang.String[][][][][]');

                expect(result).toEqual(expected);
            });
        });
    });

    describe('Errors', function () {
        it(`Should throw an error for invalid type"`, function () {
            expect(() => mangleType('£$%&')).toThrowError(InvalidTypeError);
        });
    });
});
