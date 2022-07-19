import testMangleString from '@test/suites/mangleString.test.js';
import testMangleClassName from '@test/suites/mangleClassName.test.js';
import testMangleTypes from '@test/suites/mangleTypes.test.js';

describe('euberlog tests', function () {
    testMangleString();
    testMangleClassName();
    testMangleTypes();
});
