DODGEBALL: Objects and Classes Checkpoint 2

Code Plan: c0d3 g3wD

//Create a class for a dodge ball player where properties are assigned to players. Keys should include if they can throw the ball, dodge the ball, has paid their dues, is healthy, and how many years of experience they have. I will put these into my constructor as "canThrowBall", "canDodgeBall", "hasPaid", "isHealthy", "yearsExperience".

//Create new dodge ball player objects into a new array and display them in the DOM as available players.

//Make a button next to each player that lets the user assign them to red or blue teams. I will need to add these keys to as properties to the player class. In my constructor, I'll use "teamColor" and "mascot".

//To assign players to teams, I will use ``` this ``` keyword to assign the players using an onclick function.

//After the teams are selected, a new list will be created in the DOM with appropriate labels.

//I'll use three tests for the application



Adding people to players:
    Goal:  When clicked the people are added to the Players section and removed from the People list while also getting new values of a player added to them.

    Plan: 
    1) Display an array of people that are options to pick from. Once they get picked, they disappear from the list. I'll add the function to the button once it gets clicked. 

    2) The people have properties already, but they don't have player attributes yet. I'll make a people class and a player class. Once the players get chosen, that class will extend new values to them: canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience. Do I need to make a new array for these key values for each player? Or should I make these variables for the user to input?
    
    3) 