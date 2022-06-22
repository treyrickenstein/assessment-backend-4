const express = require("express");
const cors = require("cors");

const app = express();

//http://127.0.0.1:5500/client/index.html

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
           
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});



app.get("/api/fortune", (req, res) => {
  const fortune = ["You will soon be surrounded by good friends and laughter.", 
  "You can see a lot just by looking.",
  "When your heart is pure, your mind is clear.",

];

let randomIndex1 = Math.floor(Math.random() * fortune.length);
let randomFortune = fortune[randomIndex1];

res.status(200).send(randomFortune);

});

app.get("/api/insult", (req, res) => {
  const insult = ["Idiot!", 
  "Dumbass!",
  "Your mother was a hamster and your father smelt of elderberries!",

];

let randomIndex1 = Math.floor(Math.random() * insult.length);
let randomInsult = insult[randomIndex1];

res.status(200).send(randomInsult);

});

app.get("/api/tvshow", (req, res) => {
  const tvshow = ["It's Always Sunny in Philadelphia", 
  "The Office",
  "Ted Lasso",

];

let randomIndex1 = Math.floor(Math.random() * tvshow.length);
let randomTvShow = tvshow[randomIndex1];

res.status(200).send(randomTvShow);

});

app.get("/api/sport", (req, res) => {
  const sport = ["Soccer", 
  "Basketball",
  "Baseball",

];

let randomIndex1 = Math.floor(Math.random() * sport.length);
let randomSport = sport[randomIndex1];

res.status(200).send(randomSport);

});



app.listen(4000, () => console.log("Server running on 4000"));

