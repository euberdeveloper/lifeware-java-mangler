import { mangleConstructorDefinition } from '@src/modules/definitions/mangleMethodOrConstructorDefinition.js';

import firstExpected from './expecteds/first.expected.js';
import secondExpected from './expecteds/second.expected.js';

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

            console.log(`BBB${result}BBB`);

            expect(result).toEqual(expected);
        });
    });
});
