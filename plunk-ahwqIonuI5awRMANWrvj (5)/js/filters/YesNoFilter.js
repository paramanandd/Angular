
























(function() {
  'use strict';
  
  angular
    .module('testApp')
    .filter('YesNo', function() {
      return function (input,fullform) {
        
        if(fullform==true && input==true)
          return "yes";
          
        if(fullform==true && input==false)
          return "No";
            
        if(fullform==true && input==true)
          return "yes";
            
        if(fullform==false && input==true)
          return "y";
            
        if(fullform==false && input==false)
          return "n";
     //   return fullform ? 'Y' : 'N';
        
      }
    });
}());