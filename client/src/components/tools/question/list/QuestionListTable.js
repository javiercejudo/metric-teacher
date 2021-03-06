import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Table, Popup, Icon, Message } from "semantic-ui-react";
import sortBy from "lodash/sortBy";

import utils from "../../../../utils";

import QuestionQaDetailsAndEditorModal from "./QuestionQaDetailsAndEditorModal";
import QuestionListTableCell from "../../misc/QuestionListTableCell";

import {
  QUESTION_TYPE_DROPDOWN,
  QUESTION_STATUS_DROPDOWN,
  QUESTION_FLAG_DROPDOWN,
  QUESTION_DIFFICULTY_DROPDOWN,
} from "../../../../constants";

class QuestionListTable extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.questionData,
      sortColumn: null,
      sortDirection: null,
      sorted: true,
    };

    // This is a list of iteratee addresses that determine the sort direction of a specific column.
    const addressBook = {
      subject: "parent.parent.name",
      scale: "parent.scale",
      direction: "parent.toMetric",
      type: "type",
      status: "status",
      flags: "flags",
      difficulty: "difficulty",
      question: "question",
    };

    // Performs the resorting of a complex data structure.
    const sorter = (data, address, sortDirection) => {
      const sortedData = sortBy(data, address);
      if (sortDirection === "descending") {
        return sortedData.reverse();
      }
      return sortedData;
    };

    // Using double arrows to make prop onClick definition cleaner looking.
    // The alternative is, ex: onClick={() => this.handleSort("subject")}
    // If this helps efficiency, I do not know...
    this.handleSort = clickedColumn => () => {
      const { data, sortColumn, sortDirection } = this.state;

      if (sortColumn !== clickedColumn) {
        const sortedData = sorter(data, addressBook[clickedColumn], sortDirection);
        this.setState({
          sortColumn: clickedColumn,
          sortDirection: "ascending",
          data: sortedData,
        });
      } else {
        this.setState({
          data: data.reverse(),
          sortDirection: sortDirection === "ascending" ? "descending" : "ascending",
        });
      }
    };

    // Because the content of the table can be changed in edits, we need to react and then correctly
    // resort the table when new questionData comes in.
    this.componentDidUpdate = (prevProps, prevState) => {
      // New data? Mark the table as not sorted!
      if (this.props.questionData !== prevProps.questionData) {
        this.setState({
          sorted: false,
        });
      }

      // The table isn't sorted? Sort it!
      if (!this.state.sorted) {
        const sortedData = sorter(
          this.props.questionData,
          addressBook[prevState.sortColumn],
          prevState.sortDirection,
        );

        this.setState({
          data: sortedData,
          sorted: true,
        });
      }
    };
  }

  render() {
    if (!this.props.questionData) return null;

    const { data, sortColumn, sortDirection } = this.state;

    // Column width total != 16. This is on purpose to widen the 1's.
    return (
      <Table sortable celled fixed singleLine compact>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              width={1}
              sorted={sortColumn === "subject" ? sortDirection : null}
              onClick={this.handleSort("subject")}
            >
              Subject
            </Table.HeaderCell>
            <Table.HeaderCell
              width={1}
              sorted={sortColumn === "scale" ? sortDirection : null}
              onClick={this.handleSort("scale")}
            >
              Scale
            </Table.HeaderCell>
            <Table.HeaderCell
              width={1}
              sorted={sortColumn === "direction" ? sortDirection : null}
              onClick={this.handleSort("direction")}
            >
              To Metric
            </Table.HeaderCell>
            <Table.HeaderCell
              width={1}
              sorted={sortColumn === "type" ? sortDirection : null}
              onClick={this.handleSort("type")}
            >
              Type
            </Table.HeaderCell>
            <Table.HeaderCell
              width={1}
              sorted={sortColumn === "status" ? sortDirection : null}
              onClick={this.handleSort("status")}
            >
              Status
            </Table.HeaderCell>
            <Table.HeaderCell
              width={1}
              sorted={sortColumn === "flags" ? sortDirection : null}
              onClick={this.handleSort("flags")}
            >
              Flags
            </Table.HeaderCell>
            <Table.HeaderCell
              width={1}
              sorted={sortColumn === "difficulty" ? sortDirection : null}
              onClick={this.handleSort("difficulty")}
            >
              Difficulty
            </Table.HeaderCell>
            <Table.HeaderCell
              width={6}
              sorted={sortColumn === "question" ? sortDirection : null}
              onClick={this.handleSort("question")}
            >
              Question
            </Table.HeaderCell>
            <Table.HeaderCell
              width={1}
            >
              Actions
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {data.length ?
          <Table.Body>
            {data.map(question => (
              <Table.Row key={question.id}>
                <Table.Cell>
                  <Popup
                    trigger={(<span style={{ cursor: "help" }}>{question.parent.parent.name}</span>)}
                    content={(
                      <React.Fragment>
                        <b>{question.parent.parent.name}</b>
                        <ul>
                          <li>
                            <b>Subject ID</b>: {question.parent.parent.id}
                          </li>
                          <li>
                            <b>SubSubject ID</b>: {question.parent.id}
                          </li>
                        </ul>
                      </React.Fragment>
                    )}
                    position="bottom left"
                    on="click"
                    wide="very"
                  />
                </Table.Cell>
                <Table.Cell>
                  <Popup
                    trigger={(
                      <span style={{ cursor: "default" }}>
                        {utils.firstLetterCap(question.parent.scale)}
                      </span>
                    )}
                    content={utils.firstLetterCap(question.parent.scale)}
                    position="left center"
                  />
                </Table.Cell>
                <Table.Cell>
                  <Popup
                    trigger={(
                      <span style={{ cursor: "default" }}>
                        {question.parent.toMetric ? "To Metric" : "From Metric"}
                      </span>
                    )}
                    content={question.parent.toMetric ? "To Metric" : "From Metric"}
                    position="left center"
                  />
                </Table.Cell>
                <Table.Cell>
                  <Popup
                    trigger={(
                      <span style={{ cursor: "default" }}>
                        {QUESTION_TYPE_DROPDOWN[question.type].text}
                      </span>
                    )}
                    content={QUESTION_TYPE_DROPDOWN[question.type].text}
                    position="left center"
                  />
                </Table.Cell>
                <Table.Cell>
                  <Popup
                    trigger={(
                      <span style={{ cursor: "default" }}>
                        <Icon name={QUESTION_STATUS_DROPDOWN[question.status].icon} />
                        {question.status}
                      </span>
                    )}
                    content={QUESTION_STATUS_DROPDOWN[question.status].text}
                    position="left center"
                  />
                </Table.Cell>
                <Table.Cell>
                  <Popup
                    trigger={(
                      <span style={{ cursor: "default" }}>
                        <Icon name={question.flags === 0 ? "flag outline" : "flag"} />
                        {question.flags}
                      </span>
                    )}
                    content={utils.flagDescriber(QUESTION_FLAG_DROPDOWN, question.flags)}
                    position="left center"
                  />
                </Table.Cell>
                <Table.Cell>
                  <Popup
                    trigger={(
                      <span style={{ cursor: "default" }}>
                        <Icon name={QUESTION_DIFFICULTY_DROPDOWN[question.difficulty].icon} />
                        {question.difficulty}
                      </span>
                    )}
                    content={QUESTION_DIFFICULTY_DROPDOWN[question.difficulty].text}
                    position="left center"
                  />
                </Table.Cell>
                <Table.Cell>
                  <QuestionListTableCell
                    adminMode={this.props.adminMode}
                    question={question}
                    author={question.author}
                    reviewer={question.reviewer}
                  />
                </Table.Cell>
                <Table.Cell>
                  {this.props.adminMode &&
                    <QuestionQaDetailsAndEditorModal
                      questionId={question.id}
                      editorMode
                      queryInfo={this.props.queryInfo}
                      modalProps={{ size: "fullscreen" }}
                    >
                      <Icon name="pencil" style={{ cursor: "pointer" }} />
                    </QuestionQaDetailsAndEditorModal>
                  }
                  <QuestionQaDetailsAndEditorModal
                    questionId={question.id}
                    editorMode={false}
                  >
                    <Icon name="zoom" style={{ cursor: "pointer" }} />
                  </QuestionQaDetailsAndEditorModal>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
          :
          <Table.Footer fullWidth>
            <Table.Row>
              <Table.HeaderCell colSpan={9}>
                <Message warning>
                  <Message.Header>No Results</Message.Header>
                  <p>Use a less restrictive search setting to see more questions.</p>
                </Message>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        }
      </Table>
    );
  }
}

QuestionListTable.propTypes = {
  questionData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.number.isRequired,
    status: PropTypes.number.isRequired,
    flags: PropTypes.number.isRequired,
    difficulty: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    parent: PropTypes.shape({   // SubSubject
      id: PropTypes.string.isRequired,
      scale: PropTypes.string.isRequired,
      toMetric: PropTypes.bool.isRequired,
      parent: PropTypes.shape({ // Subject
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  })),
  queryInfo: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  adminMode: PropTypes.bool,
};

QuestionListTable.defaultProps = {
  questionData: null,
  queryInfo: null,
  adminMode: false,
};

export default QuestionListTable;
