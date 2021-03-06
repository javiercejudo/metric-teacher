import React from "react";
import { Container, Header, Icon, List, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

import {
  SITE_NAME,
  PAGE_TITLE_HEADER_SIZE,
  PAGE_ICON_COLOR_ADMIN,
} from "../../constants";

const ToolsPage = () => (
  <Segment as={Container} text>
    <Header size={PAGE_TITLE_HEADER_SIZE} textAlign="center">
      <Header.Content>
        <Icon name="cog" color={PAGE_ICON_COLOR_ADMIN} />
        Community Tools
        <Header.Subheader>
          Help grow {SITE_NAME} by submitting your own questions.
        </Header.Subheader>
      </Header.Content>
    </Header>

    <List divided relaxed>
      <List.Item
        icon="plus"
        content={<Link to="/tools/questioncreator">Question Creator</Link>}
      />
      <List.Item
        icon="pencil"
        content={<Link to="/tools/questionscontributed">Review Contributed Questions</Link>}
      />
    </List>
  </Segment>
);

export default ToolsPage;
