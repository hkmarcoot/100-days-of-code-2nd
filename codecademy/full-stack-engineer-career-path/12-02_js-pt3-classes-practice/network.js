class Network {
  constructor(data, users) {
    this.data = data;
    this.users = users;
  }
  // Insert code below
  movieTime() {
    return this.data - 10 >= this.users * 5;
  }
}
