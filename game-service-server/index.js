const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

/* 
Username = game_user;
Password = fCKLqXhl7L9aBcOV;

*/
const uri = "mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.qtxjg.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log('Gamef Website Connected')
  // perform actions on the collection object
  client.close();
});

app.get('/', (req, res) => {
    res.send('Running Games Server')
})

app.listen(port, () => {
    console.log('Listening to Port', port)
})