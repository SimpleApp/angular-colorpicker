'use strict';

/* Directives */
angular.module('myApp.directives', [])
  .directive('saColorpicker', function () {
    'use strict';
    var options;
    options = {};
    return {
      require:'?ngModel',
      link:function (scope, element, attrs, controller) {
          var getOptions = function () {
                  return angular.extend({}, scope.$eval(attrs.saColorpicker));
            };
        var initDateWidget = function () {
          var opts = getOptions();

          // If we have a controller (i.e. ngModelController) then wire it up
          if (controller) {
            var updateModel = function () {
                if(!scope.$$phase) {
                  //$digest or $apply
                  scope.$apply(function () {
                    var color = element.val();
                    controller.$setViewValue(color);
                  });
                }
            };
            if (opts.select) {
              // Caller has specified onSelect, so call this as well as updating the model
              var userHandler = opts.select;
              opts.select = function (value, picker) {
                updateModel();
                scope.$apply(function() {
                  userHandler(value, picker);
                });
              };
            } else {
              // No onSelect already specified so just update the model
              opts.select = updateModel;
            }
            // In case the user changes the text directly in the input box
            element.bind('change', updateModel);

            // Update the color picker when the model changes
            controller.$render = function () {
              var color = controller.$viewValue;
              /*
              if ( angular.isDefined(date) && date !== null && !angular.isDate(date) ) {
                throw new Error('ng-Model value must be a Date object - currently it is a ' + typeof date + ' - use ui-date-format to convert it from a string');
              }
              */
              element.colorpicker("setColor", color);
            };
          }
          // If we don't destroy the old one it doesn't update properly when the config changes
          element.colorpicker('destroy');
          // Create the new datepicker widget
          element.colorpicker(opts);
          // Force a render to override whatever is in the input text box
          controller.$render();
        };
        // Watch for changes to the directives options
        scope.$watch(getOptions, initDateWidget, true);
      }
    };
  }
  );
