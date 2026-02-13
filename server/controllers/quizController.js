const QuizQuestion = require("../models/QuizQuestion");
const User = require("../models/User");

const giftMap = {
  1: "Are you fr? 😠",
  2: "Bruh 🙄",
  3: "Really? 🥺",
  4: "Pat 😒",
  5: "Hug 🌹",
  6: "Kiss 💋",
  7: "Chocolate 🍫",
  8: "Cake 🎂",
  9: "Food 🥘",
  10: "ME ✨"
};

// GET QUESTIONS (NO correct answers)
exports.getQuestions = async (req, res) => {
  const questions = await QuizQuestion.find();
  res.json(questions);
};

// SUBMIT ANSWERS
exports.submitQuiz = async (req, res) => {
  const { answers } = req.body;

  const questions = await QuizQuestion.find();
  let score = 0;

  questions.forEach(q => {
    if (
      answers[q._id.toString()]?.trim().toLowerCase() ===
      q.correctAnswer.trim().toLowerCase()
    ) {
      score++;
    }
  });

  // 🚨 FORCE NUMBER (THIS FIXES IT)
  score = Number(score);

  const giftMap = {
    1: "Are you fr? 😠",
    2: "Bruh 🙄",
    3: "Really? 🥺",
    4: "Pat 😒",
    5: "Hug 🌹",
    6: "Kiss 💋",
    7: "Chocolate 🍫",
    8: "Cake 🎂",
    9: "Food 🥘",
    10: "ME ✨"
  };

  const gift = giftMap[score] || "No gift 😢";

  res.json({
    score,
    gift
  });
};
