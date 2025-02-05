const Graph = require("./Graph.js");

const trainNetwork = new Graph(true, true);

const losangeles = trainNetwork.addVertex("Los Angeles");
const sanfrancisco = trainNetwork.addVertex("San Francisco");
const newyork = trainNetwork.addVertex("New York");
const atlanta = trainNetwork.addVertex("Atlanta");
const denver = trainNetwork.addVertex("Denver");
const calgary = trainNetwork.addVertex("Calgary");

trainNetwork.addEdge(sanfrancisco, losangeles, 400);
trainNetwork.addEdge(losangeles, sanfrancisco, 400);
trainNetwork.addEdge(newyork, denver, 1800);
trainNetwork.addEdge(denver, newyork, 1800);
trainNetwork.addEdge(calgary, denver, 1000);
trainNetwork.addEdge(denver, calgary, 1000);
trainNetwork.addEdge(losangeles, atlanta, 2100);
trainNetwork.addEdge(atlanta, losangeles, 2100);

trainNetwork.removeEdge(newyork, denver);
trainNetwork.removeEdge(calgary, denver);
trainNetwork.removeEdge(denver, calgary);
trainNetwork.removeVertex(calgary);

trainNetwork.print();
