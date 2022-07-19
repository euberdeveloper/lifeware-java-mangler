import { InvalidConstructorError, InvalidMethodError, LifewareJavaManglerError } from '@src/errors/index.js';

import { expect } from 'chai';

export default function (): void {
    describe('Test: errors classes', function () {
        it(`Should properly create a default LifewareJavaManglerError`, function () {
            const error = new LifewareJavaManglerError();

            expect(error).to.be.instanceOf(Error);
            expect(error).to.be.instanceOf(LifewareJavaManglerError);
            expect(error.name).to.equals('LifewareJavaManglerError');
        });
        it(`Should properly create a custom InvalidMethodError`, function () {
            const error = new InvalidMethodError('MESSAGE');

            expect(error).to.be.instanceOf(Error);
            expect(error).to.be.instanceOf(InvalidMethodError);
            expect(error.name).to.equals('InvalidMethodError');
            expect(error.message).to.equals('MESSAGE');
        });
        it(`Should properly create a custom InvalidConstructorError`, function () {
            const error = new InvalidConstructorError('MESSAGE');

            expect(error).to.be.instanceOf(Error);
            expect(error).to.be.instanceOf(InvalidConstructorError);
            expect(error.name).to.equals('InvalidConstructorError');
            expect(error.message).to.equals('MESSAGE');
        });
        it(`Should properly create a custom InvalidMethodError with problematic definition`, function () {
            const error = new InvalidMethodError('MESSAGE', 'DEFINITION');

            expect(error).to.be.instanceOf(Error);
            expect(error).to.be.instanceOf(InvalidMethodError);
            expect(error.name).to.equals('InvalidMethodError');
            expect(error.message).to.equals('MESSAGE');
            expect(error.definition).to.equals('DEFINITION');
        });
        it(`Should properly create a custom InvalidConstructorError with problematic definition`, function () {
            const error = new InvalidConstructorError('MESSAGE', 'DEFINITION');

            expect(error).to.be.instanceOf(Error);
            expect(error).to.be.instanceOf(InvalidConstructorError);
            expect(error.name).to.equals('InvalidConstructorError');
            expect(error.message).to.equals('MESSAGE');
            expect(error.definition).to.equals('DEFINITION');
        });
    });
}
