	  angular.module('savingsBankApp',[])
	  			.controller('savingsBankController',['$scope','$http',function($scope,$http){
					$scope.message="From controller";
					
					
					$http.get('savings_data.json')
						.then(function(response){
						console.log(response);
						$scope.userInfo=response;
						var currentItem=response.data[0];
						currentItem.index=0;
						$scope.nextItem=response.data[1];
						
						$scope.currentItem=currentItem;
						$scope.prevItem=$scope.currentItem;
					});
					
					
					
					$scope.loadNextItem=function(){

						var index=$scope.currentItem.index;
						var arrayBound=$scope.userInfo.data.length-1;
					
					
						if(index<arrayBound){
	
							$scope.prevItem=$scope.currentItem;
							index++;
							$scope.currentItem=$scope.userInfo.data[index];
							$scope.currentItem.index=index;
							
							if(index+1<=arrayBound)
							$scope.nextItem=$scope.userInfo.data[index+1];
						}
	
					}
					
					$scope.loadPrevItem=function(){	

						var index=$scope.currentItem.index;
						
						if(index>0)
						{
							$scope.nextItem=$scope.currentItem;
							index--;
							$scope.currentItem=$scope.userInfo.data[index];
							if(index-1>=0)
							$scope.prevItem=$scope.userInfo.data[index-1];
							
						}
					}
				}])
	  .controller('searchUserCtrl',['$scope','$http',function($scope,$http){
 
		  $http.get('master_data.json')
						.then(function(response){
					
			  			$scope.employee=response.data;
					});
	
	  }]);