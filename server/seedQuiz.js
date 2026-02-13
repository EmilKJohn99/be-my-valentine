require("dotenv").config();
const mongoose = require("mongoose");
const QuizQuestion = require("./models/QuizQuestion");

mongoose.connect(process.env.MONGO_URI);

const questions = [
  {
    question: "Where was our First Date?",
    options: ["Coffee Day", "Starbucks", "Costa Coffee", "Hugs and Coffee"],
    correctAnswer: "Starbucks"
  },
  {
    question: "How did *we* start talking?",
    options: ["Asking about how to reach Varkala", "Was in the same group for an activity", "Reel about North Indians vs South Indians", "Talk about Omlettes being rich in protein"],
    correctAnswer: "Reel about North Indians vs South Indians"
  },
  {
    question: "The first movie we saw together?",
    options: ["Ohm Shanthi Oshana", "Lokah", "Ok Jaanu", "Padakkalam"],
    correctAnswer: "Padakkalam"
  },
  {
    question: "The food item we really wanted to try in Varkala but wasn't able to",
    options: ["Veggie-Egg wrap", "White sauce pasta", "Red sauce pasta", "Pizza"],
    correctAnswer: "White sauce pasta"
  },
  {
    question: "The vegetable I refer to you as?",
    options: ["Tomato", "Cucumber", "Potato","Pumpkin"],
    correctAnswer: "Potato"
  },
  {
    question: "How many plushies did you win for me in the arcade?",
    options: ["0", "1", "5", "78"],
    correctAnswer: "0"
  },
  {
    question: "What was the first gift I got for you?",
    options: ["Facewash", "Ice roller", "Rings and Chains", "Adidas Sliders"],
    correctAnswer: "Rings and Chains"
  },
  {
    question: "In Varkala, what did you see that instantly made you light up with happiness?",
    options: ["ME 😘", "Beach", "A random lady wearing a bikini", "Beer"],
    correctAnswer: "Beer"
  },
  {
    question: "My favourite accessary of yours?",
    options: ["Kala", "Glasses", "Black beaded necklace", "Ring"],
    correctAnswer: "Glasses"
  },
  {
    question: "I got us Christmas socks last time we had met, what was the color of them?",
    options: ["red and blue", "yellow and orange", "red and yellow ", "yellow and green"],
    correctAnswer: "red and yellow"
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
