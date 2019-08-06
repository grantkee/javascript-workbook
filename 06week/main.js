//import { AssertionError } from "assert";



const arrOfPeople = [
    {
      id: 1,
      name: "Big G",
      age: 33,
      skillSet: "balanced",
      placeBorn: "Star, Texas"
    },
    {
      id: 2,
      name: "Charles Young",
      age: 55,
      skillSet: "trash talking",
      placeBorn: "Omaha, Nebraska"
    },
    {
      id: 3,
      name: "Judy Twilight",
      age: 35,
      skillSet: "pump fakes",
      placeBorn: "Louisville, Kentucky"
    },
    {
      id: 4,
      name: "Cynthia Doolittle",
      age: 20,
      skillSet: "boxing",
      placeBorn: "Pawnee, Texas"
    },
    {
      id: 5,
      name: "John Willouby",
      age: 28,
      skillSet: "not pipe fitting",
      placeBorn: "New York, New York"
    },
    {
      id: 6,
      name: "Stan Honest",
      age: 20,
      skillSet: "cliff diving",
      placeBorn: "Perth, Australia"
    },
    {
      id: 7,
      name: "Mia Watu",
      age: 17,
      skillSet: "pretending to care",
      placeBorn: "Los Angeles, California"
    },
    {
      id: 8,
      name: "Walter Cole",
      age: 32,
      skillSet: "counting to 100 pretty fast",
      placeBorn: "New Orleans, Louisiana"
    },
  ]

  const arrOfPlayers = [
    {
      //should I use the id tag to match player properties with people objects?
      canThrowBall: 'yep',
      canDodgeBall: 'barely',
      hasPaid: 80,
      isHealthy: 'yep',
      yearsExperience: 1
    },  
    {
      canThrowBall: 'nope',
      canDodgeBall: 'yep',
      hasPaid: 80,
      isHealthy: 'yep',
      yearsExperience: 21
    },
    {
      canThrowBall: 'nope',
      canDodgeBall: 'yep',
      hasPaid: 180,
      isHealthy: 'yep',
      yearsExperience: 11
    },
    {
      canThrowBall: 'sorta',
      canDodgeBall: 'not really',
      hasPaid: 30,
      isHealthy: 'sure',
      yearsExperience: 3
    },
    {
      canThrowBall: 'nope',
      canDodgeBall: 'nope',
      hasPaid: 80,
      isHealthy: 'eh',
      yearsExperience: 0
    },
    {
      canThrowBall: 'yep',
      canDodgeBall: 'nope',
      hasPaid: 80,
      isHealthy: 'yep',
      yearsExperience: 13
    },
    {
      canThrowBall: 'yep',
      canDodgeBall: 'yep',
      hasPaid: 80,
      isHealthy: 'depends',
      yearsExperience: 9
    },
    {
      canThrowBall: 'definitely',
      canDodgeBall: 'yep',
      hasPaid: 1000,
      isHealthy: 'good enough',
      yearsExperience: 2
    },
  ]
  
  const listOfPlayers = []
  const blueTeam = []
  const redTeam = []

  function launchGetPeople(){
    People.prototype.getPeople();
  }

  class People {
    constructor (id, name, age, skillSet, placeBorn){
      this.id = id;
      this.name = name;
      this.age = age;
      this.skillSet = skillSet;
      this.placeBorn = placeBorn;
    }
    //I had getPeople() and hidePeople() as const outside of the class. I can't get them to work inside the class though
    getPeople = () =>{
      console.log('hi')
      let output = `<h2>People</h2>`
      arrOfPeople.forEach((function(user){
          output += `
              <ul>
                  <li>${user.name}</li>
                  <li>${user.age}</li>
                  <li>${user.skillSet}</li>
                  <li>${user.placeBorn}</li>
                  <button onclick="addPlayer()">Add Player</button>
                  <br> 
                  <br>
              </ul>
          `
        }))
        let button = document.getElementById('getPeopleButton')
        button.parentNode.removeChild(button);
        document.getElementById('people').innerHTML =  '<button id = "hidePeopleButton" onclick="hidePeople()">Hide List</button>' + output;
    }
    
    hidePeople = () =>{
      let output = `
        <h4>List Of People</h4>
        <ul id="people"></ul>
        <button id = 'getPeopleButton' onclick="getPeople()">Get People</button>
        `
      document.getElementById('listOfPeople').innerHTML = output;
    }
  }

  
  class Player extends People {
    constructor(canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience, name, skillSet){
      super(name, skillSet);
      this.canThrowBall = canThrowBall;
      this.canDodgeBall = canDodgeBall;
      this.hasPaid = hasPaid;
      this.isHealthy = isHealthy;
      this.yearsExperience = yearsExperience;
    }
  }


  class BlueTeammate extends Player {
    constructor(color, mascot, id, name, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
      super(id, name, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience)
      this.color = 'blue';
      this.mascot = 'Turtles';
    }
  }
  
  class RedTeammate extends Player {
    constructor(id, name, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience, color, mascot){
      super(id, name, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience)
      this.color = 'red';
      this.mascot = 'Pigeons';
    }
  }
  
  const listPeopleChoices = () => {
    let listElement = document.getElementById('people')
    arrOfPeople.map(person => {
      const li = document.createElement("li")
      const button = document.createElement("button")
      button.innerHTML = "Make Player";
      button.addEventListener('click', function() {makePlayer(person.id, person.name)} );
      li.appendChild(button);
      li.appendChild(document.createTextNode(person.name + " - " + person.skillSet));
      listElement.append(li);
    })
  }

  
  const makePlayer = (id, name) => {
    console.log(`new player: ${name}`)
    const player = arrOfPeople.filter(candidate => {
      return candidate.id === id;
    });

    let newPlayer = new Player (`${arrOfPlayers[id - 1].canThrowBall}`, `${arrOfPlayers[id - 1].canDodgeBall}`, `${arrOfPlayers[id - 1].hasPaid}`, `${arrOfPlayers[id - 1].isHealthy}`, `${arrOfPlayers[id - 1].yearsExperience}`)


    console.log(`new player: ${newPlayer.canThrowBall}, ${newPlayer.canDodgeBall}, ${newPlayer.hasPaid}, ${newPlayer.isHealthy}, ${newPlayer.yearsExperience}`)

    listOfPlayers.push(player);
    console.log(listOfPlayers);

    const playerElement = document.getElementById("players");
    listOfPlayers.map(player => {
      const playerList = document.createElement("li");
      const redButton = document.createElement("button");
      const blueButton = document.createElement("button");

      playerList.id = `element${id}`
      console.log('element id ' + playerList.id)

      blueButton.innerHTML = 'Blue Team';
      blueButton.id = 'teamButton';
      blueButton.addEventListener('click', function () {selectBlueTeam(name, id, player)});

      redButton.innerHTML = 'Red Team';
      blueButton.id = 'teamButton';
      redButton.addEventListener('click', function () {selectRedTeam(id, name, player)});

      playerList.appendChild(document.createTextNode(`${name}`));
      playerList.appendChild(redButton);
      playerList.appendChild(blueButton);
      playerElement.append(playerList);
    })
  }

  const selectBlueTeam = (name, id, player) =>{
    let selectedPlayer = document.getElementById(`element${id}`);
    console.log('selected player ' + selectedPlayer)
    console.log('selected player ' + player)
    selectedPlayer.parentNode.removeChild(selectedPlayer);

    let teamPlayers = document.getElementById('blueTeam');
    const newBluePlayer = listOfPlayers.filter(teammate => {
      console.log(teammate.name === name)
      return teammate.name === name;
    });

    listOfPlayers.splice((listOfPlayers.indexOf(newBluePlayer)),1)
    console.log('spliced object' + newBluePlayer);
    console.log('list: ' + listOfPlayers);

    const teamRoster = document.getElementById('blueTeam');
    const newLI = document.createElement('li');
    teamRoster.innerHTML = newBluePlayer;

    let teamMate = new BlueTeammate ('blue', 'turtles');


  }

  const selectRedTeam = (player) =>{
    let teamMember = document.getElementById(`element${player}`);
    teamMember.parentNode.removeChild(teamMember);
  }


// //Tests
// if (typeof describe === 'function') {
//   describe ('Button Click', () => {
//     it('neeeeeds to do something', () => {
//       assert.changeTeams(${onclick function maybe??})
//       player.teammate.changeTeams('redTeammate')
//     })
//     it('might need to do something else', () => {
//       assert.equal()
//     })
//   });
// }