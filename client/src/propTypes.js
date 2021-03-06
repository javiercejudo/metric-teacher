import PropTypes from "prop-types";

export const QA_UNIT_OBJECT_TYPE = PropTypes.shape({
  unit: PropTypes.string.isRequired,
  value: PropTypes.number,    // Non-written answers.
  written: PropTypes.string,  // Written answers.
});

export const QA_RANGE_OBJECT_TYPE = PropTypes.shape({
  bottom: QA_UNIT_OBJECT_TYPE.isRequired,
  top: QA_UNIT_OBJECT_TYPE.isRequired,
});

export const QA_DATA_QUESTION_SURVEY_RESPONSE = PropTypes.shape({
  surveyId: PropTypes.string.isRequired,
  status: PropTypes.number,
  detail: PropTypes.string,
  score: PropTypes.number.isRequired,
  answer: QA_UNIT_OBJECT_TYPE,                // Will be null if survey was skipped.
});

export const QA_DATA_QUESTION_SURVEY = PropTypes.shape({
  step: PropTypes.number.isRequired,
  range: QA_RANGE_OBJECT_TYPE.isRequired,
  response: QA_DATA_QUESTION_SURVEY_RESPONSE,       // Only if survey was answered.
});

export const QA_DATA_QUESTION = PropTypes.shape({
  detail: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.number.isRequired,
  data: PropTypes.shape({                     // Only if conversion or survey question.
    fromUnitWord: PropTypes.shape({
      plural: PropTypes.string.isRequired,
      singular: PropTypes.string.isRequired,
    }).isRequired,
    conversion: PropTypes.shape({             // Only if conversion question.
      step: PropTypes.number.isRequired,
      range: QA_RANGE_OBJECT_TYPE.isRequired,
      exact: QA_UNIT_OBJECT_TYPE.isRequired,
    }),
    survey: QA_DATA_QUESTION_SURVEY,          // Only if survey question.
  }),
});

export const QA_DATA_ANSWER = PropTypes.shape({
  detail: PropTypes.string,
  type: PropTypes.number.isRequired,
  data: PropTypes.shape({
    accuracy: PropTypes.number,               // Only if conversion or survey question.
    unit: PropTypes.string,                   // Only if conversion or survey question.
    multiple: PropTypes.shape({               // Only if written question.
      choices: PropTypes.arrayOf(QA_UNIT_OBJECT_TYPE).isRequired,
      choicesOffered: PropTypes.number.isRequired,
    }),
    toUnitWord: PropTypes.shape({             // Only if conversion or survey question.
      plural: PropTypes.string.isRequired,
      singular: PropTypes.string.isRequired,
    }),
    conversion: PropTypes.shape({             // Only if conversion or survey question.
      range: QA_RANGE_OBJECT_TYPE.isRequired,
      exact: PropTypes.number.isRequired,
      rounded: PropTypes.number.isRequired,
      friendly: PropTypes.number.isRequired,
      choices: PropTypes.arrayOf(QA_UNIT_OBJECT_TYPE).isRequired,
    }),
    survey: PropTypes.shape({                 // Only if survey question.
      choices: PropTypes.arrayOf(QA_UNIT_OBJECT_TYPE).isRequired,
    }),
  }).isRequired,
});

export const QA_DATA_SUBJECT = PropTypes.shape({
  name: PropTypes.string.isRequired,
  scale: PropTypes.string.isRequired,
  toMetric: PropTypes.bool.isRequired,
});

export const QA_DATA_EVERYTHING = PropTypes.shape({
  questionId: PropTypes.string.isRequired,
  subSubjectId: PropTypes.string.isRequired,
  difficulty: PropTypes.number.isRequired,
  flags: PropTypes.number.isRequired,
  media: PropTypes.string,
  subject: QA_DATA_SUBJECT.isRequired,
  question: QA_DATA_QUESTION.isRequired,
  answer: QA_DATA_ANSWER.isRequired,
});
