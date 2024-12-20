let db = require("./db.js");

const getClient = (clientId, clientSecret) => {
  let confidentialClients = db.confidentialClients.filter((client) => {
    return client.clientId === clientId && client.clientSecret === clientSecret;
  });
  return confidentialClients[0];
};

const saveToken = (token, client, user) => {
  token.client = {
    id: client.clientId,
  };
  token.user = {
    username: user.username,
  };
  db.tokens.push(token);
  return token;
};

// Write getUserFromClient() function here
const getUserFromClient = (client) => {
  return {};
};

// Export getUserFromClient() function here
module.exports = {
  getClient: getClient,
  saveToken: saveToken,
  getUserFromClient: getUserFromClient,
};
