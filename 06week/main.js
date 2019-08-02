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
      skillSet: "welding",
      placeBorn: "Omaha, Nebraska"
    },
    {
      id: 3,
      name: "Judy Twilight",
      age: 35,
      skillSet: "fishing",
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
      skillSet: "listening",
      placeBorn: "Los Angeles, California"
    },
    {
      id: 8,
      name: "Walter Cole",
      age: 32,
      skillSet: "pretending",
      placeBorn: "New Orleans, Louisiana"
    },
  ]
  
  const listOfPlayers = []
  const blueTeam = []
  const redTeam = []

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
    constructor(id, name, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
      super(id, name);
      this.canThrowBall = canThrowBall;
      this.canDodgeBall = canDodgeBall;
      this.hasPaid = hasPaid;
      this.isHealthy = isHealthy;
      this.yearsExperience = yearsExperience;
    }
    
  }

  class BlueTeammate extends Player {
    constructor(id, name, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience, color, mascot){
      super(id, name, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience)
      this.color = 'blue';
      this.mascot = 'Turtle'
    }
  }
  
  class RedTeammate extends Player {
    constructor(id, name, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience, color, mascot){
      super(id, name, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience)
      this.color = 'red';
      this.mascot = 'Pigeons'
    }
  }
  
  // const listPeopleChoices = () => {
  //   const listElement = document.getElementById('people')
  //   arrOfPeople.map(person => {
  //     const li = document.createElement("li")
  //     const button = document.createElement("button")
  //     button.innerHTML = "Make Player"
  //     button.addEventListener('click', function() {makePlayer(person.id)} )
  //     li.appendChild(button)
  //     li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
  //     listElement.append(li)
  //   })
  // }



const addPlayer = () => {
  console.log('clicked')
}


  const listPlayers = () => {
  }
  
  const makePlayer = (id) => {
    console.log(`li ${id} was clicked!`)
  }




//Tests
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