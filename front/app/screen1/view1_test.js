'use strict';

describe('myApp.screen1 module', function() {

  beforeEach(module('myApp.screen1'));

  describe('screen1 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('screen1');
      expect(view1Ctrl).toBeDefined();
    }));

  });
});