(function (window) {
	window.angular.module('TotoApp',[]);
	window.angular.module('TotoApp')
	.controller('MainController',['$scope',function($scope){
		$scope.text=''; 
		$scope.todoList=[{
			text:'学英语',
			done:false
		},{
			text:'学英语',
			done:false
		},{
			text:'学数学',
			done:false
		}];
	
		$scope.add =function(){
			var text = $scope.text.trim();
			if(text){				
				$scope.todoList.push({
						text:text,
					done:false
				})
				$scope.text = '';				
			}
		};


		$scope.delete = function (todo) {
			var index = $scope.todoList.indexOf(todo);
			$scope.todoList.splice(index,1);
		}

		$scope.doneCount = function () {
			var temp = $scope.todoList.filter(function (item) {
				return item.done;
			})
			return temp.length;
		}

	$scope.keydown = function ($event) {
                alert($event.keyCode);
            }

	}]);


})(window)