const team = {
  _players: [
    { firstName: "Tim", lastName: "Wu", age: 19 },
    { firstName: "Anna", lastName: "Young", age: 21 },
    { firstName: "John", lastName: "Tam", age: 18 },
  ],
  _games: [
    { opponent: "red team", teamPoints: "30", opponentPoints: 40 },
    { opponent: "green team", teamPoints: "25", opponentPoints: 20 },
    { opponent: "yellow team", teamPoints: "35", opponentPoints: 45 },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge) {
    let player = { newFirstName, newLastName, newAge };
    this._players.push(player);
    // or
    // Object.assign(this._players, player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };
    this._games.push(game);
  },
};

team.addPlayer("Bugs", "Bunny", 76);
console.log(team._players);
team.addGame("Titans", 100, 98);
console.log(team._games);
