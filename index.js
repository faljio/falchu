const express = require('express');
const path = require('path')

const app = express();

const port = parseInt(process.env.PORT) || process.argv[3] || 8080;

app.use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs');

let person = {
  name:"足利梨緒奈",
  nickname: "りおな",
  birthday: "２月１６日",
  zodiac: "水瓶座",
};

console.log("ニックネーム: " + person.nickname);
console.log("星座: " + person.zodiac);
console.log("誕生日: " + person.birthday);


for (let key in person) {
  console.log(key + ": " + person[key]);
}

 app.get('/api', (req,res) => {
  res.json({"msg": "Hello world"});

});
