import { expect } from 'chai';

import { mangleType, PrimitiveType } from '@src/modules/mangleTypes.js';

export default function testMangleTypes(): void {
    describe('Test @/modules/mangleTypes', function () {
        it(`Should mangle correctly a boolean`, function () {
            const expected = 'Z';
            const result = mangleType('boolean' as PrimitiveType);

            expect(result).to.equal(expected);
        });

        it(`Should mangle correctly a byte`, function () {
            const expected = 'B';
            const result = mangleType('byte' as PrimitiveType);

            expect(result).to.equal(expected);
        });

        it(`Should mangle correctly a char`, function () {
            const expected = 'C';
            const result = mangleType('char' as PrimitiveType);

            expect(result).to.equal(expected);
        });
        it(`Should mangle correctly a double`, function () {
            const expected = 'D';
            const result = mangleType('double' as PrimitiveType);

            expect(result).to.equal(expected);
        });

        it(`Should mangle correctly a float`, function () {
            const expected = 'F';
            const result = mangleType('float' as PrimitiveType);

            expect(result).to.equal(expected);
        });

        it(`Should mangle correctly a int`, function () {
            const expected = 'I';
            const result = mangleType('int' as PrimitiveType);

            expect(result).to.equal(expected);
        });

        it(`Should mangle correctly a long`, function () {
            const expected = 'J';
            const result = mangleType('long' as PrimitiveType);

            expect(result).to.equal(expected);
        });

        it(`Should mangle correctly a short`, function () {
            const expected = 'S';
            const result = mangleType('short' as PrimitiveType);

            expect(result).to.equal(expected);
        });

        it(`Should mangle correctly a void`, function () {
            const expected = 'V';
            const result = mangleType('void' as PrimitiveType);

            expect(result).to.equal(expected);
        });

        it(`Should mangle correctly an array of boolean`, function () {
            const expected = '_BZ';
            const result = mangleType('boolean[]');

            expect(result).to.equal(expected);
        });

        it(`Should mangle correctly an array of byte`, function () {
            const expected = '_BB';
            const result = mangleType('byte[]');

            expect(result).to.equal(expected);
        });

        it(`Should mangle correctly an array of char`, function () {
            const expected = '_BC';
            const result = mangleType('char[]');

            expect(result).to.equal(expected);
        });
        it(`Should mangle correctly an array of double`, function () {
            const expected = '_BD';
            const result = mangleType('double[]');

            expect(result).to.equal(expected);
        });

        it(`Should mangle correctly an array of float`, function () {
            const expected = '_BF';
            const result = mangleType('float[]');

            expect(result).to.equal(expected);
        });

        it(`Should mangle correctly an array of int`, function () {
            const expected = '_BI';
            const result = mangleType('int[]');

            expect(result).to.equal(expected);
        });

        it(`Should mangle correctly an array of long`, function () {
            const expected = '_BJ';
            const result = mangleType('long[]');

            expect(result).to.equal(expected);
        });

        it(`Should mangle correctly an array of short`, function () {
            const expected = '_BS';
            const result = mangleType('short[]');

            expect(result).to.equal(expected);
        });

        it(`Should mangle correctly an array of void`, function () {
            const expected = '_BV';
            const result = mangleType('void[]');

            expect(result).to.equal(expected);
        });
    });
}
