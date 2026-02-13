require("dotenv").config();
const mongoose = require("mongoose");
const QuizQuestion = require("./models/QuizQuestion");

mongoose.connect(process.env.MONGO_URI);

const questions = [
  {
    question: "the first time we went to western lady,where were we originally planning to go?",
    options: ["Tahiliani Chaat", "Oriental Spice", "Burger King", "Roast Town"],
    correctAnswer: "Tahiliani Chaat"
  },
  {
    question: "The movie we first saw in flat?",
    options: ["China Town", "1921", "1922", "carrie"],
    correctAnswer: "1922"
  },
  {
    question: "the first gift i brought you?",
    options: ["shoes", "bag", "camera", "chocolate"],
    correctAnswer: "shoes"
  },
  {
    question: "which malayalam movie we saw got u intrested in it?",
    options: ["hallo", "china town", "three kings", "pakshe"],
    correctAnswer: "three kings"
  },
  {
    question: "what was the drink i gave you by surprise before we got committed?",
    options: ["ocean", "pepsi", "tropicana","mogu mogu"],
    correctAnswer: "mogu mogu"
  },
  {
    question: "the only series we have successfully finished",
    options: ["suits","alice in borderland", "it welcome to derry","breaking bad"],
    correctAnswer: "alice in borderland"
  },
  {
    question: "how many series have we started and not finished?",
    options: ["6", "3", "4", "5"],
    correctAnswer: "4"
  },
  {
    question: "the first person you got jealous and i unfollowed in insta?",
    options: ["jhanvi kapoor", "muemi", "kajal aggarwal", "noora fatehi"],
    correctAnswer: "muemi"
  },
  {
    question: "when we got drunk the song i danced to for you?",
    options: ["aaj ki raat", "achacho", "manohari", "monica"],
    correctAnswer: "monica"
  },
  {
    question: "the person who i have said is the perfect man?",
    options: ["hrithik roshan", "allu arjun", "prabhas", "ram charan"],
    correctAnswer: "apple juice,orange juice,lemon"
  },
  {
    question: "the first fancy date place we went to?",
    options: ["chopstix", "roast town", "nasi and mee", "chiyaang"],
    correctAnswer: "chiyaang"
  },
  {
    question: "the first actual food we made together?",
    options: ["pasta", "noodles", "fried rice", "omlette"],
    correctAnswer: "pasta"
  },
  {
    question: "what did we do just before the first time we had sex?",
    options: ["date", "shopping", "movies", "sleep"],
    correctAnswer: "movies"
  },
  {
    question: "the first time we brought couple rings where was it from?",
    options: ["kuppi vala", "moulavi", "urvasi", "goodwill"],
    correctAnswer: "moulavi"
  },
  {
    question: "the first time we came to flat,where did we order from?",
    options: ["burger king", "kfc", "chicking", "dominos"],
    correctAnswer: "chicking"
  }
];

(async () => {
  try {
    await QuizQuestion.deleteMany();
    await QuizQuestion.insertMany(questions);
    console.log("Quiz questions seeded");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
