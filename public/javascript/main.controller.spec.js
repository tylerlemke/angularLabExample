'use strict';

//=== Testing mainCtrl =============================================
describe('Testing controller: mainCtrl', function(){

    // load the controller's module
    beforeEach(module('mainApp'));

    var mainCtrl, scope;

    // Initialize the controller and mock scope.
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        mainCtrl = $controller('mainCtrl', {
            $scope: scope
        });
    }));

    it('dummy test should pass', function(){
        expect(true).toEqual(true);
    });

    describe("testing data functionality: ", function(){
        it("should contain some data by default", function(){
            expect(scope.data.length > 0).toEqual(true);
        });

        it("should be able to remove an item from the list", function(){
           var initialLength = scope.data.length;
           scope.removeData(1);
           expect(scope.data.length < initialLength).toEqual(true);
        });

        it("should be able to add an item to the list", function(){
            var initialLength = scope.data.length;
            scope.textField = "kittens";
            scope.addData();
            expect(scope.data.length > initialLength).toEqual(true);
        });
    });
});

//=== Testing navbarCtrl ===========================================
describe('Testing controller: navbarCtrl', function() {

    // load the controller's module
    beforeEach(module('mainApp'));

    var mainCtrl, scope;

    // Initialize the controller and mock scope.
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        mainCtrl = $controller('navbarCtrl', {
            $scope: scope
        });
    }));

    it('dummy test should pass', function () {
        expect(true).toEqual(true);
    });

    it('should contain pages', function () {
        expect(scope.pages.length > 0).toEqual(true);
    });
});

//=== Testing GPActrl ===========================================
    describe('Testing controller: GPActrl', function () {

        // load the controller's module
        beforeEach(module('mainApp'));

        var GPActrl, scope;

        // Initialize the controller and mock scope.
        beforeEach(inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();
            GPActrl = $controller('GPActrl', {
                $scope: scope
            });
        }));

        it('should return a number', function () {
            expect(scope.GradeNumber("A")).toEqual(4);
        })

        it('should return correct GPA', function () {
            expect(scope.transcript.TotalGPA()).toEqual(4);
        })
    });
