var majesty = require('../dist')

var testes1 = function(describe, it, beforeEach, afterEach, expect, should, assert) {
  describe('1. Teste 1', function() {
    it('1.1 - XPTO', function() {
      expect(1).to.equal(1)
    })

    it('1.2 - XPTO', function() {
      expect(1).to.equal(1)
    })
  })
  describe('1a. Teste 2', function() {
    it('1a.1 - XPTO', function() {
      expect(1).to.equal(1)
    })

    it('1a.2 - XPTO', function() {
      expect(1).to.equal(1)
    })
  })
}

var testes2 = function(describe, it, beforeEach, afterEach, expect, should, assert) {
  describe('2. Teste 2', function() {
    it('2.1 - XPTO', function() {
      expect(1).to.equal(1)
    })

    it('2.2 - XPTO', function() {
      expect(1).to.equal(1)
    })

    it('2.3 - ERROR', function() {
      expect(1).to.equal(2)
    })
  })
}

var rs1 = majesty.run(testes1)
print('', rs1.success.length, ' scenarios executed with success and')
print('', rs1.failure.length, ' scenarios executed with failure.\n')

var rs2 = majesty.run(testes2)
print('', rs2.success.length, ' scenarios executed with success and')
print('', rs2.failure.length, ' scenarios executed with failure.\n')
