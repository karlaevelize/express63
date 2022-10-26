const express = require("express");
const characters = require("./characters.json");

//start an express instance
const app = express();

//declare a port
const PORT = 4000;

//List of endpoints/routes

//Send "Hello from Express"
app.get("/", (request, response) => {
  response.send("Hello from Express!");
});

//Send "Hello" to specific name
app.get("/hello/:name", (request, response) => {
  const name = request.params.name;
  // const { name } = request.params
  console.log(name);
  response.send(`Hello, ${name}!`);
});

//Send a list of characters
app.get("/characters", (request, response) => {
  response.send(characters);
});

//Send a character by id
app.get("/characters/:id", (request, response) => {
  //1.w e get the id
  const id = parseInt(request.params.id);
  console.log(typeof id);
  //2. then find the character
  const oneChar = characters.find((char) => char.id === id);
  console.log(oneChar);
  //3. send the character in th response
  response.send(oneChar);
});

//start listening / server is live
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
