const team={
  _players:[{firstname:'jesu',lastName:'das',age:21},{firstname:'geethan',lastName:'suttan',age:24},{firstname:'akash',lastName:'babu',age:25}],
  _games:[{
  opponent: 'csk',
  teamPoints: 12,
  opponentPoints: 45
},{
  opponent: 'mi',
  teamPoints: 10,
  opponentPoints: 27
},{
  opponent: 'rcb',
  teamPoints: 15,
  opponentPoints: 24
}],
get players(){
  return this._players;
},
get games(){
  return this._games;
},
addPlayer(firstname,lastname,age){
  let player={
    firstname,
    lastname,
    age
  }
  return this.players.push(player);
},
addGame(oppentn,teamp,oppentp)
{
  let game={
    oppentn,
    teamp,
    oppentp
  }
  return this.games.push(game);
}
}
team.addPlayer('steph','Curry',28);
team.addPlayer('bugs','Bunny',30);
team.addGame('srb',16,28);
console.log(team.games);



