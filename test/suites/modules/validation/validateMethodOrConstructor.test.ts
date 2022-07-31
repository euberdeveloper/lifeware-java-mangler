import {
    validateConstructorSignature,
    validateMethodSignature
} from '@src/modules/validation/validateMethodOrConstructor.js';

describe('Test @/modules/validation/validateMethodOrConstructor', function () {
    it(`Should validate constructors in the right way`, function () {
        expect(validateConstructorSignature('String(int x, bool[][] bo);')).toBeTruthy();
        expect(validateConstructorSignature('Pippo()   ;')).toBeTruthy();
        expect(validateConstructorSignature('int method();')).toBeFalsy();
        expect(validateConstructorSignature('asfsadf')).toBeFalsy();
    });

    it(`Should validate methods in the right way`, function () {
        expect(validateMethodSignature('int sum(int x, int y);')).toBeTruthy();
        expect(validateMethodSignature('java.lang.String getStr(int y, bool[][] b  ) ;')).toBeTruthy();
        expect(validateMethodSignature('java.lang.String.Str')).toBeFalsy();
        expect(validateMethodSignature('Pippo();')).toBeFalsy();
    });
});
