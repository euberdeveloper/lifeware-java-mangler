import { expect } from 'chai';

import { mangleString } from '@src/modules/mangleString';

export default function testMangleString(): void {
    describe('Test @/modules/mangleString', function () {
        it(`Should mangle an underscore '_'`, function () {
            const expected = '__';
            const result = mangleString('_');

            expect(result).to.equal(expected);
        });
    });
}
