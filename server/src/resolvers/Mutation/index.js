const { auth } = require("./auth");
const { user } = require("./user");
const { student } = require("./student");
const { course } = require("./course");
const { classroom } = require("./classroom");
const { mastery } = require("./mastery");
const { survey } = require("./survey");
const { feedback } = require("./feedback");

module.exports = {
  Mutation: {
    ...auth,
    ...user,
    ...student,
    ...course,
    ...classroom,
    ...mastery,
    ...survey,
    ...feedback,
  },
};
