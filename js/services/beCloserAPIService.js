angular.module("beCloser").factory("beCloserAPI", function ($http, config) {
	var _getUsers = function () {
		return $http.get(config.baseUrl + "/users");
	};

	var _getUser = function (user) {
		var card = JSON.parse('{"card" : "'+user+'"}');
		return $http.get(config.baseUrl + "/user", card);
	};

	var _saveUser = function (user) {
		return $http.post(config.baseUrl + "/users", user);
	};

	return {
		getUsers: _getUsers,
		saveUser: _saveUser,
		getUser: _getUser
	};
});