(function() {
  'use strict';
  
  describe('Filters', function() {
    describe('Yes No Filter', function() {
      var yesNo;
      beforeEach(module('testApp'));
      beforeEach(inject(function($filter) {
        yesNo = $filter('YesNo');
      }));
      
      it('for true value of input and fullform', function() {
        var result = yesNo(true, true);
        expect(result).toBe('yes');
      });
      
      it('for false value of input', function() {
        var result = yesNo(false,true);
        expect(result).toBe('No');
      });
      
       it('for false value of fullform', function() {
        var result = yesNo(true,false);
        expect(result).toBe('y');
      });
       it('for false value of fullform and input', function() {
        var result = yesNo(false,false);
        expect(result).toBe('n');
      });
      /*it('for undefined value', function() {
        var result = yesNo();
        expect(result).toBeUndefined();
      });*/
    });
  });
}());