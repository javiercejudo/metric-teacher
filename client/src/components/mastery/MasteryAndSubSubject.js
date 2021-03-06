import React from "react";
import PropTypes from "prop-types";

import SubSubject from "../subsubject/SubSubject";
import Mastery from "./Mastery";
import MasteryAssign from "./MasteryAssign";

const MasteryAndSubSubject = props => (
  <div>
    {props.subSubjectData &&
    <SubSubject
      description={props.subSubjectData.description}
      subjectName={props.subSubjectData.parent.name}
      toMetric={props.subSubjectData.toMetric}
    />
    }
    {props.masteryData &&
      <Mastery
        masteryData={props.masteryData}
        queryInfo={props.queryInfo}
      />
    }
    {!props.masteryData && props.subSubjectData && props.queryInfo &&
      (props.queryInfo.variables.studentid || props.queryInfo.variables.userid) &&
      <MasteryAssign
        queryInfo={props.queryInfo}
        subSubjectId={props.subSubjectData.id}
        studentId={props.queryInfo.variables.studentid || props.queryInfo.variables.userid}
        buttonProps={{
          primary: true,
          fluid: true,
        }}
      />
    }
  </div>
);

MasteryAndSubSubject.propTypes = {
  subSubjectData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    parent: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    toMetric: PropTypes.bool.isRequired,
  }),
  masteryData: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  queryInfo: PropTypes.shape({
    variables: PropTypes.shape({
      studentid: PropTypes.string,
      userid: PropTypes.string,
    }).isRequired,
  }),
};

MasteryAndSubSubject.defaultProps = {
  masteryData: null,
  queryInfo: null,
  subSubjectData: null,
};

export default MasteryAndSubSubject;
