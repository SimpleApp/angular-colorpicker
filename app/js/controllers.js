'use strict';

/* Controllers */


function Controller($scope) {
    $scope.mycolor = 'FF0000';
    $scope.coloroptions = {
			parts: 'full',
			showOn: 'both',
			buttonColorize: true,
			showNoneButton: false,
			alpha: false
		};
    $scope.onClick = function()
    {
        console.log("click me :");
        console.log($scope.mycolor);
    }
    
    $scope.resetToGreen = function()
    {
        $scope.mycolor = '00FF00';
    }
}
