angular.module('mainApp',[])
	.controller('contactController', function($scope, $http){
		$scope.formData = {};
		$scope.proccessForm = function(){
			alert('Valid form!')
			$http({
				method: 'POST',
				url: 'process.php',
				data: $scope.formData,
				headers: {'Content-Type': ''}
			})
		}
	});