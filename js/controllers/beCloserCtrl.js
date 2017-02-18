angular.module("beCloser").controller("beCloserCtrl", function ($scope, beCloserAPI) {
	$scope.app = "be Closer";
	$scope.users = [];
	$scope.page = 'home';
	$scope.add = true;
	$scope.error = '';
	$scope.programs = ['Crianças', 'Idosos', 'Animais', 'Reflorestamento'];

	var loadUsers = function () {
		beCloserAPI.getUsers().success(function (data) {
			$scope.users = data;
		}).error(function (data, status) {
			$scope.error = "Não foi possível carregar os dados!";
		});
	};

	$scope.login = function(user){
		console.log("teste" + user);
		beCloserAPI.getUser(user).success(function(data){
			console.log(data);
		});
	};

	$scope.changeView = function(newView){
		$scope.page = newView;
	};

	$scope.addUser = function (users) {
		beCloserAPI.saveUser(users).success(function (data) {
			delete $scope.user;

			add = data;
			if (data == false) {
				$scope.error = "Usuário já existe";
			}
		});
	};
});