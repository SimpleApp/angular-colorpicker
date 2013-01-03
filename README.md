# jQuery.colorpicker v0.9.3 - as Angular-ui directive v0.0.1

angular-ui-colorpicker is Copyright (c) 2012 [Simple App](http://www.simpleapp.fr)
Licensed under the MIT.
 
original code from jQuery.colorpicker is Copyright (c) 2011-2012 Martijn W. van der Lee
Licensed under the MIT.

## What is it
This code is a first try of wrapping jQuery.colorpicker as a angularjs directive.
project structure is [angular-seed](https://github.com/angular/angular-seed)
port is heavily inspired by [angular-ui.datepicker](https://github.com/angular-ui/angular-ui/blob/master/modules/directives/date/date.js)

## How do you use it
This directive should probably be packaged in the angular-ui project. I don't have the time to package it properly for now (fork welcome). 
At the time, simply look at index.html and controller.js to see how you can configure the picker and bind it to the model.
The directive itself (which you will probably copy/paste in your code) is in app/js/directives.js

## Features
ngModel bindable
Full support for original colorpicker options (it's really just a wrapper).
Options for the picker are set in the controller's scope using a scope variable whose name is passed as a parameter for the directive.

## Example
See in app/index.html. Briefly : 

### index.html : 
    ...
    <input sa-colorpicker="coloroptions" ng-model="mycolor"></input>
    ...

### Controller.js
    ...
    $scope.mycolor = 'FF0000';
    $scope.coloroptions = {
    	parts: 'full',
    	showOn: 'both',
    	buttonColorize: true,
    	showNoneButton: false,
    	alpha: false
    };
    ...
  