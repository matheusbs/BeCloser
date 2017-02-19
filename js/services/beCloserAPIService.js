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

	var _getInstituitions = function () {
		return $http.get(config.baseUrl + "/users");
	};

	var _getInstituition = function (instituition) {
		var inst = JSON.parse('{"cnpj" : "'+instituition+'"}');
		return $http.get(config.baseUrl + "/instituition", inst);
	};

	var _saveInstituition = function (instituition) {
		return $http.post(config.baseUrl + "/instituitions", instituition);
	};

	var _getEvents = function () {
		return $http.get(config.baseUrl + "/events");
	};

	var _saveEvent = function (instituition) {
		return $http.post(config.baseUrl + "/events", event);
	};


	return {
		getUsers: _getUsers,
		saveUser: _saveUser,
		getUser: _getUser,
		getInstituitions: _getInstituitions,
		saveInstituition: _saveInstituition,
		getInstituition: _getInstituition,
		getEvents: _getEvents,
		saveEvent: _saveEvent
	};
});