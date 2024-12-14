class Player {
  constructor(name, hitsPerMinute) {
    this.name = name;
    this.hitsPerMinute = hitsPerMinute;
    this.balloonCount = 100;
  }

  status() {
    console.log(`Player: ${this.name} -- Balloons Left: ${this.balloonCount}`);
  }
}

// Write function below
function balloonAttack(p1, p2) {
  if (p1.hitsPerMinute === p2.hitsPerMinute) return "Tie";
  if (p1.hitsPerMinute > p2.hitsPerMinute) {
    return p1.name;
  } else {
    return p2.name;
  }
}
