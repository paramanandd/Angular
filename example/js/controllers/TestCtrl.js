(function(){
	'use strict'
	angular
		.module('testApp')
		.controller('TestCtrl',['$scope',test]);
		
	function test(scope){
	scope.emps= [
      {id: 1, firstName: 'Ashish', lastName: 'Kumar',onBench:true},
      {id: 2, firstName: 'Parma', lastName: 'Dhuri',onBench:true},
      {id: 3, firstName: 'Kedar', lastName: 'Naik',onBench:false},
      {id: 4, firstName: 'Rahul', lastName: 'Pandey',onBench:true},
      {id: 5, firstName: 'Kundan', lastName: 'Shinde',onBench:false}
    ];
  }
}());