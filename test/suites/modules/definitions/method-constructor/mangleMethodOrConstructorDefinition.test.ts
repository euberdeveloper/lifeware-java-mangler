import {
    mangleConstructorDefinition,
    mangleMethodDefinition
} from '@src/modules/definitions/mangleMethodOrConstructorDefinition.js';

import firstExpected from './expecteds/first.expected.js';
import secondExpected from './expecteds/second.expected.js';
import thirdExpected from './expecteds/third.expected.js';
import fourthExpected from './expecteds/fourth.expected.js';
import fifthExpected from './expecteds/fifth.expected.js';
import sixthExpected from './expecteds/sixth.expected.js';

describe('Test @/modules/definitions/mangleMethodOrConstructorDefinition', function () {
    describe('Constructor', function () {
        it(`Should mangle correctly the constructor "Caccu(boolean show, java.lang.Pippo.Pluto.Paperino bobbo, float coccoB3ll_o);"`, function () {
            const expected = firstExpected;
            const result = mangleConstructorDefinition(
                'Caccu(boolean show, java.lang.Pippo.Pluto.Paperino bobbo, float coccoB3ll_o);'
            );

            expect(result).toEqual(expected);
        });

        it(`Should mangle correctly the constructor "     Gabibbo  (       ) ; "`, function () {
            const expected = secondExpected;
            const result = mangleConstructorDefinition('     Gabibbo  (       ) ; ');

            expect(result).toEqual(expected);
        });
    });

    describe('Methods', function () {
        it(`Should mangle correctly the method " java.lang.String getName ();"`, function () {
            const expected = thirdExpected;
            const result = mangleMethodDefinition(' java.lang.String getName ();');

            expect(result).toEqual(expected);
        });

        it(`Should mangle correctly the method "String some_method_name(int index, String[][] options)"`, function () {
            const expected = fourthExpected;
            const result = mangleMethodDefinition('String some_method_name(int index, String[][] options)');

            expect(result).toEqual(expected);
        });

        it(`Should mangle correctly the method "void print() ;"`, function () {
            const expected = fifthExpected;
            const result = mangleMethodDefinition('void print() ;');

            expect(result).toEqual(expected);
        });

        it(`Should mangle correctly the method "int sum(int x, int y) ;"`, function () {
            const expected = sixthExpected;
            const result = mangleMethodDefinition('int sum(int x, int y) ;');

            expect(result).toEqual(expected);
        });
    });
});
