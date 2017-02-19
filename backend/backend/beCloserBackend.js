var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.bodyParser());

var users = [
	{name: "User 1", email: "user1@email.com", cardName: "USER 1", card: "4444-4444-4444-4444", expire: "10-20", verify: "443", 
		programs: {
			elderly: true,
			child: true,
			animals: true,
			reforestation:true
		}
	},
	{name: "User 2", email: "user2@email.com", cardName: "USER 2", card: "4444-4444-4444-4443", expire: "10-21", verify: "442", 
		programs: {
			elderly: true,
			child: false,
			animals: true,
			reforestation:false
		}
	},
	{name: "User 3", email: "user3@email.com", cardName: "USER 3", card: "4444-4444-4444-4441", expire: "10-22", verify: "440", 
		programs: {
			elderly: true,
			child: true,
			animals: true,
			reforestation:false
		}
	}
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

var instituitions = [
	{name: "Asilo ABC", description: "Asilo que acolhe velhinhos", leader: "Freira Ana", email: "asilo@email.com",
		program: "elderly", cnpj: "11"
	},
	{name: "Adota JP", description: "Programa que cuida dos animais", leader: "Francisco de Asis", email: "adotaJP@email.com",	
		program: "animals", cnpj: "12"
	},
	{name: "Orfanato JP", description: "Acolhe as crianças abandonadas", leader: "Joao de Deus", email: "adotaJP@email.com",
		program: "child", cnpj: "13"
	},
	{name: "Plante uma arvore", description: "Colabore contra o aquecimento global", leader: "Mateus Adalberto", email: "planteJP@email.com",	
		program: "reforestation", cnpj: "15"
	}
]

function _isContainsUser(value) {
    for (i in users) {
    	if((users[i].card === value.card) || (users[i].email === value.email)) return true;
    }
    return false;
}

function _isContainsInstituition(value) {
    for (i in instituitions) {
    	if(instituitions[i].cnpj === value.cnpj) return true;
    }
    return false;
}

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
  if(!_isContainsUser(req.body)) {
  	users.push(req.body);
  	res.json(true);
  }else 
  	res.json(false);
});

app.get('/user', function(req, res) {
  //var found = false
  for (i in users){
  	if(users[i].card === req.body.card){
  		res.json(users[i]);
  		return;
  	} 
  }
  res.json(false);
  return;
});

app.get('/programs', function(req, res) {
  res.json(programs);
});

app.get('/events', function(req, res) {
  res.json(events);
});

app.get('/instituitions', function(req, res) {
  res.json(instituitions);
});

app.post('/instituitions', function(req, res) {
if(!_isContainsInstituition(req.body)) {
  	instituitions.push(req.body);
  	res.json(true);
  }else 
  	res.json(false);
});