import {
    InvalidConstructorError,
    InvalidMethodError,
    LifewareJavaManglerError,
    InvalidTypeError
} from '@src/errors/index.js';

describe('Test: errors classes', function () {
    it(`Should properly create a default LifewareJavaManglerError`, function () {
        const error = new LifewareJavaManglerError();

        expect(error).toBeInstanceOf(Error);
        expect(error).toBeInstanceOf(LifewareJavaManglerError);
        expect(error.name).toEqual('LifewareJavaManglerError');
    });
    it(`Should properly create a custom InvalidMethodError`, function () {
        const error = new InvalidMethodError('MESSAGE');

        expect(error).toBeInstanceOf(Error);
        expect(error).toBeInstanceOf(InvalidMethodError);
        expect(error.name).toEqual('InvalidMethodError');
        expect(error.message).toEqual('MESSAGE');
    });
    it(`Should properly create a custom InvalidConstructorError`, function () {
        const error = new InvalidConstructorError('MESSAGE');

        expect(error).toBeInstanceOf(Error);
        expect(error).toBeInstanceOf(InvalidConstructorError);
        expect(error.name).toEqual('InvalidConstructorError');
        expect(error.message).toEqual('MESSAGE');
    });
    it(`Should properly create a custom with default message InvalidMethodError`, function () {
        const error = new InvalidMethodError();

        expect(error).toBeInstanceOf(Error);
        expect(error).toBeInstanceOf(InvalidMethodError);
        expect(error.name).toEqual('InvalidMethodError');
        expect(error.message).toEqual('Error on parsing method');
    });
    it(`Should properly create a custom with default message InvalidConstructorError`, function () {
        const error = new InvalidConstructorError();

        expect(error).toBeInstanceOf(Error);
        expect(error).toBeInstanceOf(InvalidConstructorError);
        expect(error.name).toEqual('InvalidConstructorError');
        expect(error.message).toEqual('Error on parsing constructor');
    });
    it(`Should properly create a custom InvalidMethodError with problematic definition`, function () {
        const error = new InvalidMethodError('MESSAGE', 'DEFINITION');

        expect(error).toBeInstanceOf(Error);
        expect(error).toBeInstanceOf(InvalidMethodError);
        expect(error.name).toEqual('InvalidMethodError');
        expect(error.message).toEqual('MESSAGE');
        expect(error.definition).toEqual('DEFINITION');
    });
    it(`Should properly create a custom InvalidConstructorError with problematic definition`, function () {
        const error = new InvalidConstructorError('MESSAGE', 'DEFINITION');

        expect(error).toBeInstanceOf(Error);
        expect(error).toBeInstanceOf(InvalidConstructorError);
        expect(error.name).toEqual('InvalidConstructorError');
        expect(error.message).toEqual('MESSAGE');
        expect(error.definition).toEqual('DEFINITION');
    });

    it(`Should properly create a custom InvalidTypeError`, function () {
        const error = new InvalidTypeError('MESSAGE');

        expect(error).toBeInstanceOf(Error);
        expect(error).toBeInstanceOf(InvalidTypeError);
        expect(error.name).toEqual('InvalidTypeError');
        expect(error.message).toEqual('MESSAGE');
    });

    it(`Should properly create a custom InvalidTypeError with problematic definition`, function () {
        const error = new InvalidTypeError('MESSAGE', 'TYPE');

        expect(error).toBeInstanceOf(Error);
        expect(error).toBeInstanceOf(InvalidTypeError);
        expect(error.name).toEqual('InvalidTypeError');
        expect(error.message).toEqual('MESSAGE');
        expect(error.definition).toEqual('TYPE');
    });
});
