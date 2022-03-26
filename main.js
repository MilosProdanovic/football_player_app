

var players = [{
	img:"AlexSandro.jpg",
	name: "Alex",
	lastName: "Sandro",
	position: "Defender",
	number: 12,
	age: 29
},
{
	img: "Bentancur.jpg",
	name: "Rodrigo",
	lastName: "Bentancur",
	position: "Midlfilder",
	number: 30,
	age: 22
},
{
	img: "Bonucci.jpg",
	name: "Leonardo",
	lastName: "Bonucci",
	position: "Defender",
	number: 19,
	age: 32
},
{
	img: "Buffon.jpg",
	name: "Gianluigi",
	lastName: "Buffon",
	position: "Goalkeeper",
	number: 77,
	age: 41
},
{
	img: "Cuadrado.jpg",
	name: "Juan",
	lastName: "Cuadrado",
	position: "Defender",
	number: 16,
	age: 31
},
{
	img: "DeLigt.jpg",
	name: "Matthijs",
	lastName: "de Ligt",
	position: "Defender",
	number: 4,
	age: 20
},
{
	img: "DouglasCosta.jpg",
	name: "Douglas",
	lastName: "Costa",
	position: "Forward",
	number: 11,
	age: 29
},
{
	img: "Dybala.jpg",
	name: "Paulo",
	lastName: "Dybala",
	position: "Forward",
	number: 10,
	age: 26
},
{
	img: "Higuain.jpg",
	name: "Gonzalo",
	lastName: "Higuain",
	position: "Forward",
	number: 21,
	age: 32
},
{
	img: "Matuidi.jpg",
	name: "Blaise",
	lastName: "Matuidi",
	position: "Midfilder",
	number: 14,
	age: 32
},
{
	img: "Pjanic.jpg",
	name: "Miralem",
	lastName: "Pjanić",
	position: "Midfilder",
	number: 5,
	age: 29
},
{
	img: "Rabiot.jpg",
	name: "Adrien",
	lastName: "Rabiot", 
	position: "Midfilder",
	number: 25,
	age: 24
},
{
	img: "Ramsey.jpg",
	name: "Aaron",
	lastName: "Ramsey",
	position: "Midfilder",
	number: 8,
	age: 29
},
{
	img: "Ronaldo.jpg",
	name: "Cristiano",
	lastName: "Ronaldo",
	position: "Forward",
	number: 7,
	age: 34
},
{
	img: "Szczesny.jpg",
	name: "Wojciech",
	lastName: "Szczęsny",
	position: "Goalkeeper",
	number: 1,
	age: 29
}];

function getRandomNumber(arr){
return Math.floor(Math.random() * arr.length);
};

function addPlayers() {
	while(players.length){
		var firstSquad = document.querySelector('.first-squad');
		var substitutions = document.querySelector('.substitutions');
		
		var randomNumber = getRandomNumber(players);
		var container = players.length > 4 ? firstSquad : substitutions;
		
		container.appendChild(createPlayer(players[randomNumber]));
		players.splice(randomNumber, 1);
	}
};

function createPlayer(playerData){
	var player = document.createElement('div');
	player.classList.add('player');
	
	var img = '<img src ="img/' + playerData.img + '" alt= ""/>';
	var name = '<div>' + playerData.name + " " + playerData.lastName + '</div>';
	var num = '<div>Number: ' + playerData.number + '</div>';
	var position = '<div>Position: ' + playerData.position + '</div>';
	var age = '<div>Age: ' + playerData.age + '</div>';
	
	player.innerHTML = img + name + num + position + age;
	return player;
};

function makeSubstitution(){
	var firstSquad = document.querySelectorAll('.first-squad .player');
	var substitutions = document.querySelectorAll('.substitutions .player');
	
	var firstSquadNumber = getRandomNumber(firstSquad);
	var substitutionsNumber = getRandomNumber(substitutions);
	
	var firstSquadPlayer = firstSquad[firstSquadNumber];
	var substitutionPlayer = substitutions[substitutionsNumber];
	
	var subPrevious  = substitutionPlayer.previousSibling;
	var subNext = substitutionPlayer.nextSibling;
	
	firstSquadPlayer.after(substitutionPlayer);
	subPrevious ? subPrevious.after(firstSquadPlayer) : subNext.before(firstSquadPlayer);
};

addPlayers();
setInterval(makeSubstitution, 5000);





