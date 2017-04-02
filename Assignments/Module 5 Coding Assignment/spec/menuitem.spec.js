describe('MenuItemValidator', function () {
    var menuService;
    var userService;
    var $httpBackend;
    var $controller;
    var UserCtrl;
    var ApiPath;

    beforeEach(function () {

        module('common');
        module('public');

        inject(function ($injector, _$controller_) {
            $controller = _$controller_;
            menuService = $injector.get('MenuService');
            userService = $injector.get('UserService');
            $httpBackend = $injector.get('$httpBackend');
            ApiPath = $injector.get('ApiPath');

            UserCtrl = $controller('UserController', { UserService: userService, MenuService: menuService });
        });
    });

    it("should be able to detect the menu item is present in the list", function () {

        setUpMockForCheckIfMenuExists(true);
        CheckForValidMenu();
        expect(UserCtrl.IsValidItem).toEqual(true);


    });

    it("should be able to detect the menu item is not present in the list", function () {

        setUpMockForCheckIfMenuExists(false);
        CheckForValidMenu();
        expect(UserCtrl.IsValidItem).toEqual(false);


    });

    function CheckForValidMenu() {
        UserCtrl.UserInformation = {};
        UserCtrl.UserInformation.ShortName = 'L1'
        UserCtrl.CheckForValidMenu();
        $httpBackend.flush();
    }

    function setUpMockForCheckIfMenuExists(isValid) {
        var response = isValid ? 200 : 500;
        $httpBackend.whenGET(ApiPath + '/menu_items/L1.json').respond(response);

    }


})