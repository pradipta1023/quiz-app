import { cls, createCardElement, ELEMENT } from "./fragment.js";

const fetchQuestion = async () => [
  {
    question: "What is the capital of India?",
    options: ["Tokyo", "Cairo", "New Delhi"],
    questionNumber: 1,
  },
];

const { DIV, LEGEND, FIELDSET, INPUT, LABEL, BUTTON, FORM } = ELEMENT;

const createQuestionContainer = ({ question, questionNumber }) => [
  LEGEND,
  cls("question"),
  `${questionNumber}. ${question}`,
];

const createOption = (option) => [
  INPUT,
  { type: "radio", name: "options", id: option },
];

const createLabel = (option) => [LABEL, { for: option }, option];

const createOptionContainer = (option) => [
  DIV,
  cls("options"),
  createOption(option),
  createLabel(option),
];

const createOptionsContainer = ({ options }) => [
  FIELDSET,
  cls("options-container"),
  ...options.map(createOptionContainer),
];

const createButton = (btnName) => [BUTTON, { type: "submit" }, btnName];

const displayQuiz = (quiz, section) => {
  const quizContainer = createCardElement(
    ...[
      FORM,
      cls("question-form"),
      createQuestionContainer(quiz[0]),
      createOptionsContainer(quiz[0]),
      createButton("next"),
    ],
  );

  section.append(quizContainer);
};

window.onload = () => {
  const section = document.querySelector("section");
  fetchQuestion().then((question) => displayQuiz(question, section));
};
