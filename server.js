const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

// app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
const Role = db.role;
const Question = db.question

function initial() {
    Role.create({
      id: 1,
      name: "user"
    });
   
    Role.create({
      id: 2,
      name: "admin"
    });

    //easy
    Question.create({
      question:"Doni leaves the house to dispose of trash in its place so that the environment is clean and avoids disease.",
      solution:"What doni did is saving the environment",
      answer:1,
      category:1,
      image:"http://20.70.235.106/src/1.png"
    });
    Question.create({
      question:"Nuri was walking in the park with her sister, saw a trash can that was full and doing nothing. The environment around the trash smelled bad",
      solution:"Nuri should helping to clean the trash",
      answer:0,
      category:1,
      image:"http://20.70.235.106/src/2.png"
    });
    Question.create({
      question:"Doni litters in ditches around the house. When it rained this afternoon, Doni's house was flooded and filled with stagnant garbage",
      solution:"Doni should litters to the trash can",
      answer:0,
      category:1,
      image:"http://20.70.235.106/src/3.png"
    });
    Question.create({
      question:"Trash cans that are full must be disposed of so that the environment remains healthy and does not become a breeding ground for disease.",
      solution:"We must keep our environment clean to avoid sickness",
      answer:1,
      category:1,
      image:"http://20.70.235.106/src/4.png"
    });
    Question.create({
      question:"At Nuri's house there are two trash cans, namely for organic waste and non-organic waste. Nuri throws his plastic bottle waste in the non-organic trash",
      solution:"Plastic bottle waste is a non-organic waste",
      answer:1,
      category:1,
      image:"http://20.70.235.106/src/5.png"
    });

    //medium
    Question.create({
      question:"Mina was walking with dad on the playground. Father bought Kiki a bottle of drinking water because Kiki felt thirsty. When Kiki's drink ran out, Kiki threw the plastic bottle into the non-organic trash",
      solution:"Plastic bottle waste is a non-organic waste",
      answer:1,
      category:2,
      image:"http://20.70.235.106/src/6.png"
    });
    Question.create({
      question:"Doni throws garbage into the trash can in front of his house by separating organic and non-organic waste, this makes it easier to process non-organic waste.",
      solution:"Organizing recycleable and non recyclable waste can help reducing plastic waste",
      answer:1,
      category:2,
      image:"http://20.70.235.106/src/7.png"
    });
    Question.create({
      question:"Nuri was playing with friends near her house when she accidentally saw someone throwing plastic waste out of place. The garbage pollutes the surrounding environment and looks dirty",
      solution:"Throwing away plastic waste out of place will damage the environment",
      answer:0,
      category:2,
      image:"http://20.70.235.106/src/8.png"
    });
    Question.create({
      question:"In the Cultural Arts and Skills lesson there is an assignment to make affordable creations. Mina's friends plan to use her plastic bottles to make crafts. This is because plastic waste can be recycled",
      solution:"Using plastic waste as handcraft is a good way to clean the environment",
      answer:1,
      category:2,
      image:"http://20.70.235.106/src/9.png"
    });
    Question.create({
      question:"Mom and Kiki are shopping at the supermarket to buy fruit. Mother saw Kiki who was thirsty. Mother gave drink to Kiki using her own bottle. Mother always carries her personal drinking bottle when traveling to reduce the use of plastic waste.",
      solution:"Using your own bottle instead of plastic bottle will reduce the plastic waste",
      answer:1,
      category:2,
      image:"http://20.70.235.106/src/10.png"
    });

    //hard
    Question.create({
      question:"Nuri's family goes to the beach to spend the holidays. When they got on a boat ride to the opposite island, Nuri saw that there was a lot of plastic waste that had pooled in the sea water. Plastic waste can pollute marine ecosystems such as damage to coral reefs.",
      solution:"Plastic waste that was threw away out of place will go to the ocean and damage the ocean",
      answer:0,
      category:3,
      image:"http://20.70.235.106/src/11.png"
    });
    Question.create({
      question:"Doni went to the field near his house with a pile of plastic waste and then set it on fire. The smoke from the garbage that Doni burns creates air pollution. Mina, who was playing at that time, was coughing and having difficulty breathing.",
      solution:"Burning away plastic waste is not an option to handle plastic waste",
      answer:0,
      category:3,
      image:"http://20.70.235.106/src/12.png"
    });
    Question.create({
      question:"Mufat piles up the plastic waste and he keeps them in the ground. The soil in mufat house area becomes less healthy",
      solution:"Existing plastic waste should be recycled and not landfilled",
      answer:0,
      category:3,
      image:"http://20.70.235.106/src/8.png"
    });
    Question.create({
      question:"Habibi used the already-used plastic bottles to bring his water. Habibi then feel sick",
      solution:"Used plastic bottles may not be reused for drinking",
      answer:0,
      category:3,
      image:"http://20.70.235.106/src/4.png"
    });
    Question.create({
      question:"Doni brought a tote bag to carry his groceries purchased at the supermarket. Doni does not use plastic bags provided by supermarkets",
      solution:"The use of tote bags is the first step to reduce plastic waste",
      answer:0,
      category:3,
      image:"http://20.70.235.106/src/10.png"
    });
  }

//drop and resync db
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Db');
  initial();
});

//resync db only
// db.sequelize.sync();

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to api-plastichero application." });
});

require('./app/routes/auth.route')(app);
require('./app/routes/user.route')(app);
require("./app/routes/question.route")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

