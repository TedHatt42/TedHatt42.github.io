import Activism from "../assets/Activism.jpg";
import Covey from "../assets/Covey.jpg";
import Classification from "../assets/Classification.png";
import Predictor from "../assets/Predictor.png";

export const ProjectList = [
  {
    name: "Social Activism Platform",
    image: Activism,
    about: "I am leading the backend development in the creation of a community platform"
          + " for activists to improve their advocacy",
    skills: "Python, Django, Typescript",
    devPostLink: null,
    gitHubLink: null,
  },
  {
    name: "Covey.Town",
    image: Covey,
    about: "Four people and I implemented a rock paper scissors game in a virtual meeting space"
         + " with asynchronous communication. I designed the frontend with a top 10 leaderboard.",
    skills: "Typescript, HTML, React.js, Socket.io",
    devPostLink: null,
    gitHubLink:
      "https://github.com/TeddyHattenbach/Covey.Town-rock-paper-scissors",
  },
  {
    name: "Intracerebral Brain Hemorrhage Classification",
    image: Classification,
    about: "I worked with four people to train a Convolutional Neural Network model"
         + " for the image classification of brain hemorrhages"
         + " and evaluate the performance of 7 CNN optimizers."
         + " We attained a testing accuracy score of 98%.",
    skills: "Python, TensorFlow, Keras, PIL, Jupyter Notebook",
    devPostLink: null,
    gitHubLink:
      "https://github.com/TeddyHattenbach/-Intracerebral-Brain-Hemorrhage-Classification",
  },
  {
    name: "ET Stock Predictor",
    image: Predictor,
    about: "I placed 3rd best out of 70 teams in HackBU 2021 by collaborating with three"
            + " people on software that enabled users to enter stock values to"
            + " predict an energy transfer stock market price.",
    skills: "Python, HTML, Keras, Flask, \nJupyter Notebook, Machine Learning",
    devPostLink: "https://devpost.com/software/et-stock-prediction",
    gitHubLink: "https://github.com/TeddyHattenbach/ET-Stock-Prediction",
  },
];
