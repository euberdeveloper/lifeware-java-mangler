import { expect } from 'chai';

import { mangleClassName } from '@src/modules/mangleClassName.js';

export default function testMangleClassName(): void {
    describe('Test @/modules/mangleClassName', function () {
        it(`Should mangle correctly a class name without package`, function () {
            const expected = 'JC_MyClass';
            const result = mangleClassName('MyClass');

            expect(result).to.equal(expected);
        });
    });
}
