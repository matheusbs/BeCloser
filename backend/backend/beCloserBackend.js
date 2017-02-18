var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.bodyParser());

var users = [
	{name: "User 1", email: "user1@email.com", cardName: "USER 1", card: "4444-4444-4444-4444", monthExpire: "10", yearExpire: "2020", verify: "443", 
		programs: ["Terceira Idade","Crianças","Animais", "Reflorestamento"]},
	{name: "User 2", email: "user2@email.com", cardName: "USER 2", card: "4444-4444-4444-4443", monthExpire: "10", yearExpire: "2021", verify: "442", programs: ["Terceira Idade"]},
	{name: "User 3", email: "user3@email.com", cardName: "USER 3", card: "4444-4444-4444-4441", monthExpire: "10", yearExpire: "2022", verify: "440", programs: ["Crianças"]}
];

var programs = [
	{name: "Terceira Idade"},
	{name: "Crianças"},
	{name: "Animais"},
	{name: "Reflorestamento"}
]

// date: dd-mm-aaaa hh:mm - 24hr
var events = [
	{name: "Tarde no Asilo", date: "31-01-2017 14:00", description: "Venha visitar aqueles que precisam de atenção...", program: "Terceira Idade", total: 30, local: "Asilo A, Rua B, Bairro C, João Pesso - PB"},
	{name: "Volta as aulas do Orfanato", date: "05-02-2017 14:00", description: "Visita ao orfanato para dar boas vindas às crianças e incentivar no novo ano que inicia...", program: "Crianças", total: 25, local: "Orfanato D, Rua E, Bairro F, Recife - PE"},
	{name: "Feira de Adoção", date: "07-02-2017 09:00", description: "Feira de adoção de animais recolhidos no abrigo de animais, venha conhecer os animais que você ajudou...", program: "Animais", total: 20, local: "Praça K, Rua L, Bairro M, João Pessoa - PB"},
	{name: "Reflorestamento", date: "15-02-2017 14:00", description: "Ajude-nos a plantar as mudas que você colaborou para criar...", program: "Reflorestamento", total: 150, local: "Praça J, Bairro Q, Campina Grande - PB"}
]

app.listen(process.env.PORT || 3412);

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/users', function(req, res) {
  res.json(users);
});

app.post('/users', function(req, res) {
  users.push(req.body);
  res.json(true);
});

app.get('/programs', function(req, res) {
  res.json(programs);
});

app.get('/events', function(req, res) {
  res.json(events);
});