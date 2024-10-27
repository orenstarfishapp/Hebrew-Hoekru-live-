// backend/server.js

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const lesson = require("./lessonData");
const mongoose = require("mongoose");
const UserService = require("./src/user/user.service");
const AuthService = require("./src/auth/auth.service");
const EmailService = require("./src/email/email.service");
const path = require("node:path");
require("dotenv").config();

mongoose.connect(process.env.MONGODB_URL);
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Frontend static serving
app.use(express.static(path.join(__dirname, "../frontend/build")));

// API Endpoints

// Get Lesson Data
app.get("/api/lesson", (req, res) => {
  res.json(lesson);
});

// Validate Answers
app.post("/api/validate", (req, res) => {
  const userAnswers = req.body.userAnswers;

  let totalQuestions = 0;
  let correctAnswers = 0;

  lesson.exercises.forEach((exercise, exerciseIndex) => {
    if (exercise.type === "comprehension") {
      exercise.questions.forEach((question, questionIndex) => {
        totalQuestions += 1;
        const userAnswer = userAnswers[exerciseIndex]?.[questionIndex];
        if (userAnswer === question.correctAnswer) {
          correctAnswers += 1;
        }
      });
    } else if (exercise.type === "matching") {
      exercise.pairs.forEach((pair, index) => {
        totalQuestions += 1;
        const userAnswer = userAnswers[exerciseIndex]?.[index];
        if (userAnswer === pair.english) {
          correctAnswers += 1;
        }
      });
    } else if (exercise.type === "fillInTheBlanks") {
      exercise.sentences.forEach((sentenceObj, questionIndex) => {
        totalQuestions += Object.keys(sentenceObj.correctAnswers).length;
        const userAnswer = userAnswers[exerciseIndex]?.[questionIndex];
        Object.keys(sentenceObj.correctAnswers).forEach((blank) => {
          if (userAnswer?.[blank] === sentenceObj.correctAnswers[blank]) {
            correctAnswers += 1;
          }
        });
      });
    }
  });

  const score = Math.round((correctAnswers / totalQuestions) * 100);
  res.json({ score });
});

app.get("/api/auth", async (req, res) => {
  try {
    const user = await AuthService.getUserData(req.headers.token);

    const trialDateStart = new Date(user.createdAt);
    const currentDate = new Date();
    const differenceInMs = currentDate - trialDateStart;
    const differenceInDays = differenceInMs / (1000 * 60 * 60 * 24);

    if (differenceInDays > 30) {
      return res.status(400).send("The trial period has ended");
    }

    return res.status(200).json({ user });
  } catch (e) {
    console.error(e);
    return res.status(400).send("Something went wrong");
  }
});

app.post("/api/auth/register", async (req, res) => {
  try {
    let existingUser = await UserService.getUserByUsername(req.body.username);

    if (existingUser) {
      return res.status(409).send("Username is already taken");
    }

    existingUser = await UserService.getUserByEmail(req.body.email);

    if (existingUser) {
      return res.status(409).send("Email is already taken");
    }

    const user = await UserService.createUser(
      req.body.username,
      req.body.email,
      req.body.password
    );

    await EmailService.sendRegistrationEmail(user.email, user.username);

    const token = await AuthService.generateAccessToken(user._id);
    return res.status(201).send({ token,user });
  } catch (e) {
    console.error(e);
    return res.status(400).send("Something went wrong");
  }
});

app.post("/api/auth/login", async (req, res) => {
  try {
    const result = await AuthService.signIn(req.body);

    if (!result.success) {
      return res.status(400).send(result.message);
    }
    
    const token = await AuthService.generateAccessToken(result.data._id);
    return res.status(200).send({ token,user:result?.data });
  } catch (e) {
    console.error(e);
    return res.status(400).send("Something went wrong");
  }
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`Backend server is running on port ${port}`);
});
