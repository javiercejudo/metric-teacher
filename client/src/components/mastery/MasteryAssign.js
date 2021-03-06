import React from "react";
import PropTypes from "prop-types";
import { Mutation } from "react-apollo";
import { Segment } from "semantic-ui-react";

import utils from "../../utils";

import LoadingButton from "../misc/LoadingButton";

import {
  STUDENT_ASSIGN_NEW_MASTERY_MUTATION,
} from "../../graphql/Mutations";

const MasteryAssign = props => (
  <Mutation
    mutation={STUDENT_ASSIGN_NEW_MASTERY_MUTATION}
    update={(cache, { data: { assignStudentNewMastery } }) => {
      const data = cache.readQuery(props.queryInfo);
      utils.cachePushIntoArray(data, props.subSubjectId, "masteries", assignStudentNewMastery);
      cache.writeQuery({
        ...props.queryInfo,
        data,
      });
    }}
  >
    {(assignStudentNewMastery, { loading, error }) => (
      <Segment>
        <LoadingButton
          onClick={() => assignStudentNewMastery({
            variables: { studentid: props.studentId, subsubjectid: props.subSubjectId },
          })}
          loading={loading}
          error={error}
          buttonText="Assign"
          buttonProps={props.buttonProps}
        />
      </Segment>
    )}
  </Mutation>
);

MasteryAssign.propTypes = {
  queryInfo: PropTypes.shape({
    query: PropTypes.object.isRequired,
    variables: PropTypes.object.isRequired,
  }).isRequired,
  studentId: PropTypes.string.isRequired,
  subSubjectId: PropTypes.string.isRequired,
  buttonProps: PropTypes.object,  // eslint-disable-line react/forbid-prop-types
};

MasteryAssign.defaultProps = {
  buttonProps: null,
};

export default MasteryAssign;
