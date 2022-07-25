import { mangleString } from '@src/modules/general/mangleString.js';

describe('Test @/modules/mangleString', function () {
    describe('Special characters', function () {
        it(`Should mangle correctly an underscore`, function () {
            const expected = '__';
            const result = mangleString('_');

            expect(result).toEqual(expected);
        });

        it(`Should mangle correctly a slash`, function () {
            const expected = '_S';
            const result = mangleString('/');

            expect(result).toEqual(expected);
        });

        it(`Should mangle correctly a semicolon`, function () {
            const expected = '_M';
            const result = mangleString(';');

            expect(result).toEqual(expected);
        });

        it(`Should mangle correctly a colon`, function () {
            const expected = '_C';
            const result = mangleString(':');

            expect(result).toEqual(expected);
        });

        it(`Should mangle correctly a bracket`, function () {
            const expected = '_B';
            const result = mangleString('[');

            expect(result).toEqual(expected);
        });

        it(`Should mangle correctly a dollar`, function () {
            const expected = '_D';
            const result = mangleString('$');

            expect(result).toEqual(expected);
        });

        it(`Should mangle correctly all the special characters`, function () {
            const expected = '_S_M_C_B_D';
            const result = mangleString('/;:[$');

            expect(result).toEqual(expected);
        });
    });

    describe('Unicode characters', function () {
        it(`Should mangle correctly the unicode character 'µ'`, function () {
            const expected = '_X00B5X';
            const result = mangleString('µ');

            expect(result).toEqual(expected);
        });

        it(`Should mangle correctly the unicode character '€'`, function () {
            const expected = '_X20ACX';
            const result = mangleString('€');

            expect(result).toEqual(expected);
        });
    });

    describe('Strings in general', function () {
        it(`Should mangle correctly the string 'ciao'`, function () {
            const expected = 'ciao';
            const result = mangleString('ciao');

            expect(result).toEqual(expected);
        });

        it(`Should mangle correctly the string 'You are cold;'`, function () {
            const expected = 'You_X0020Xare_X0020Xcold_M';
            const result = mangleString('You are cold;');

            expect(result).toEqual(expected);
        });
    });
});
