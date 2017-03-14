const assert = require('assert')
const toRomans = require('../../../katas/kata-01-romanos/jose/index')

describe('arabic to romans', function () {

  it('1 returns I', () => assert.equal(toRomans(1), 'I'))
})
