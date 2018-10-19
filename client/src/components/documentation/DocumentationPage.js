import React from "react";
import PropTypes from "prop-types";
import { Container, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import forEach from "lodash/forEach";
import isPlainObject from "lodash/isPlainObject";

import Docs from "./DocumentationContent";
import ScrollTo from "../misc/ScrollTo";

/**
 * This function recursively constructs the individual elements of the document page.
 * It returns two arrays, nodes and keys. Nodes are the actual React node objects while the
 * keys are unique IDs that differentiate every element so that we can satisfy the React requirement
 * of having unique keys for the final list in the output Container component.
 *
 * It essentially loops through the Docs object tracking the "address" of every leaf value with a
 * recursively filled array. That address array is used to intelligently name the elements.
 * Ex: The object Docs.intro.findHelp.header is automatically ID'd as "intro-findhelp".
 *
 * @param docs
 * @param address
 * @returns {{nodes: Array, keys: Array}}
 */
const docExploder = (docs, address = []) => {
  const nodes = [];
  const keys = [];

  forEach(docs, (doc, key) => {
    const id = address.join("-");

    if (key === "header") {
      nodes.push((
        <React.Fragment key={`${id}-header`}>
          <Link
            to={`/docs/${address.join("/")}`}
            id={id}
            replace
          >
            <Header {...doc} />
          </Link>
          <br />
        </React.Fragment>
      ));
      keys.push(id);
    } else if (React.isValidElement(doc) && key === "content") {
      nodes.push((
        <React.Fragment key={`${id}-content`}>
          {doc}
          <br />
        </React.Fragment>
      ));
      keys.push(id);
    } else if (isPlainObject(doc) && !React.isValidElement(doc)) {
      // Recursive call
      const explodeFurther = docExploder(doc, address.concat(key.toLocaleLowerCase()));

      nodes.push(explodeFurther.nodes);
      keys.push(explodeFurther.keys);
    }
  });

  return { nodes, keys };
};


/**
 * This takes the results from the recursive function docExploder() and creates an array of simple
 * { node, id } objects to later be used in a map in the render function below.
 * @param docs
 * @returns {Array}
 */
const explodeDocs = (docs) => {
  const { nodes, keys } = docExploder(docs);
  const docsArray = [];

  for (let index = 0; index < nodes.length && index < keys.length; ++index) {
    docsArray.push({
      node: nodes[index],
      id: keys[index],
    });
  }

  return docsArray;
};

const DocumentationPage = props => (
  <React.Fragment>
    <ScrollTo paramSlug={props.match.params[0].slice(1)} />
    <Container id="all">
      {explodeDocs(Docs).map(({ node, id }) => <React.Fragment key={id}>{node}</React.Fragment>)}
      <br />
      <Link to="/docs" replace>Back to top.</Link>
    </Container>
  </React.Fragment>
);

DocumentationPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      0: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default withRouter(DocumentationPage);