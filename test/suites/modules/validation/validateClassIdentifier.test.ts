import { validateClassIdentifier } from '@src/modules/validation/validateClassIdentifier.js';

describe('Test @/modules/validation/validateClassIdentifier', function () {
    it(`Should validate positively for some class types`, function () {
        expect(validateClassIdentifier('String')).toBeTruthy();
        expect(validateClassIdentifier('java.lang.String')).toBeTruthy();
        expect(validateClassIdentifier('java.lang.String.Str')).toBeTruthy();
        expect(validateClassIdentifier('String.Str')).toBeTruthy();
    });

    it(`Should validate positively for some non trimmed types`, function () {
        expect(validateClassIdentifier('  String     ')).toBeTruthy();
        expect(validateClassIdentifier('         java.lang.String   ')).toBeTruthy();
    });

    it(`Should validate negatively for some invalid types`, function () {
        expect(validateClassIdentifier('St ring')).toBeFalsy();
        expect(validateClassIdentifier('St@ring')).toBeFalsy();
        expect(validateClassIdentifier('java.lang..String')).toBeFalsy();
        expect(validateClassIdentifier('Java.lang.String')).toBeFalsy();
    });
});
