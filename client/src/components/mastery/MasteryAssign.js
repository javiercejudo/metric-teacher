import React from "react";
import PropTypes from "prop-types";
import { Mutation } from "react-apollo";

import utils from "../../utils";

import LoadingButton from "../misc/LoadingButton";

import {
  STUDENT_ASSIGN_NEW_MASTERY_MUTATION,
} from "../../graphql/Mutations";


const MasteryAssign = (props) => {
  return (
    <Mutation
      mutation={STUDENT_ASSIGN_NEW_MASTERY_MUTATION}
      update={(cache, { data: { assignStudentNewMastery } }) => {
        const data = cache.readQuery({
          query: props.query,
          variables: { studentid: props.studentId },
        });
        utils.cachePushIntoArray(data, props.subSubjectId, "masteries", assignStudentNewMastery);
        cache.writeQuery({
          query: props.query,
          variables: { studentid: props.studentId },
          data,
        });
      }}
    >
      {(assignStudentNewMastery, { loading, error }) => (
        <LoadingButton
          onClick={() => assignStudentNewMastery({
            variables: { studentid: props.studentId, subsubjectid: props.subSubjectId },
          })}
          loading={loading}
          error={error}
          buttonText="Assign"
        />
      )}
    </Mutation>
  );
};

MasteryAssign.propTypes = {
  query: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  studentId: PropTypes.string.isRequired,
  subSubjectId: PropTypes.string.isRequired,
};

export default MasteryAssign;
