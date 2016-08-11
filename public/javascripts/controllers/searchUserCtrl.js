	  angular.module('savingsBankApp',[])
	  	.controller('searchUserCtrl',['$scope','$http',function($scope,$http){
 
		  $http.get('master_data.json')
						.then(function(response){
					
			  			$scope.employee=response.data;
					});
	
	  }]);