import testMangleString from '@test/suites/modules/mangleString.test.js';
import testMangleClassName from '@test/suites/modules/mangleClassName.test.js';
import testMangleTypes from '@test/suites/modules/mangleTypes.test.js';
import testMangleMethodOrConstructor from '@test/suites/modules/mangleMethodOrConstructor.test.js';

import testErrors from '@test/suites/errors/errors.test.js';

describe('euberlog tests', function () {
    describe('Modules', function () {
        testMangleString();
        testMangleClassName();
        testMangleTypes();
        testMangleMethodOrConstructor();
    });

    testErrors();
});
