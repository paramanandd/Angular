(function() {
  'use strict';
  
  angular
    .module('testApp')
    .service('EmpService', function() {
      var emps = [
        {id: 1, firstName: 'Ashish', lastName: 'Kumar', doj: new Date('20 Feb 2006'), onBench: true},
        {id: 2, firstName: 'Parma', lastName: 'Dhuri', doj: new Date('4 Apr 2016'), onBench: false},
        {id: 3, firstName: 'Kedar', lastName: 'Naik', doj: new Date('1 Jan 2015'), onBench: true},
        {id: 4, firstName: 'Rahul', lastName: 'Pandey', doj: new Date('14 May 2014'), onBench: false},
        {id: 5, firstName: 'Kundan', lastName: 'Shinde', doj: new Date('8 June 2016'), onBench: true}
      ];
      
      this.allEmps = function() {
        return emps;
      };
      
      this.getEmp = function(id) {
        var emp;
        emps.forEach(function(e) {
          if(e.id === id) {
            emp = e;
          }
        });
        
        return emp;
      };
      
      this.saveEmp = function(id, emp) {
        emps.forEach(function(e) {
          if(e.id === id) {
            e = emp;
          }
        });
      };
    });
}());