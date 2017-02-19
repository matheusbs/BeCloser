angular.module("beCloser").controller("beCloserCtrl", function ($scope, beCloserAPI) {
	$scope.app = "be Closer";
	$scope.users = [];
	$scope.page = 'home';
	$scope.add = true;
	$scope.error = '';
	$scope.instituitions = [];
	$scope.programs = ['Crianças', 'Idosos', 'Animais', 'Reflorestamento'];
	$scope.events = [];

	var loadUsers = function () {
		beCloserAPI.getUsers().success(function (data) {
			$scope.users = data;
		}).error(function (data, status) {
			$scope.error = "Não foi possível carregar os dados!";
		});
	};

	$scope.login = function(user){
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

	var loadInstituitions = function () {
		beCloserAPI.getInstituitions().success(function (data) {
			$scope.instituitions = data;
		}).error(function (data, status) {
			$scope.error = "Não foi possível carregar os dados!";
		});
	};

	$scope.addInstituition = function (instituition) {
		beCloserAPI.saveInstituition(instituition).success(function (data) {
			delete $scope.instituition;

			add = data;
			if (data == false) {
				$scope.error = "Instituição já existe";
			}
		});
	};


	var loadEvents = function () {
		beCloserAPI.getEvents().success(function (data) {
			$scope.events = data;
		}).error(function (data, status) {
			$scope.error = "Não foi possível carregar os dados!";
		});
	};

	$scope.addEvent = function (event) {
		beCloserAPI.saveEvent(event).success(function (data) {
			delete $scope.event;

			add = data;
			if (data == false) {
				$scope.error = "Evento já existe";
			}
		});
	};
});