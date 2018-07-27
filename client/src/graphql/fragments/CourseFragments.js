import gql from "graphql-tag";

import {
  CourseDataAll,
  ClassroomDataAll,
  MasteryDataAll,
  SubSubjectDataAll,
  SubjectDataAll,
  SurveyDataAll,
  QuestionDataAll,
} from "./SimpleFragments";

export const CourseForUserDetails = gql`
  fragment CourseForUserDetails on Course {
    ...CourseDataAll
    classrooms {
      ...ClassroomDataAll
      teachers {
        id
        fname
        lname
        honorific
      }
    }
    masteries(orderBy: createdAt_ASC) {
      ...MasteryDataAll
      subSubject {
        ...SubSubjectDataAll
        parent {
          ...SubjectDataAll
        }
      }
    }
    surveys {
      ...SurveyDataAll
      question {
        ...QuestionDataAll
      }
    }
  }
  ${CourseDataAll}
  ${ClassroomDataAll}
  ${MasteryDataAll}
  ${SubSubjectDataAll}
  ${SubjectDataAll}
  ${SurveyDataAll}
  ${QuestionDataAll}
`;
