import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button, Container, Grid, Header, Icon, Segment } from "semantic-ui-react";

import {
  SITE_NAME,
  DOCUMENTATION_MISSION_STATEMENT,
  DOCUMENTATION_HOW_TO,
  DOCUMENTATION_TO_METRIC,
  DOCUMENTATION_FROM_METRIC,
  DOCUMENTATION_GUIDE,
  SUBJECT_ICONS,
} from "../../constants";

const segmentSize = "tiny";

const DocumentationMap = props => (
  <Grid columns="equal" stackable>
    <Grid.Row>
      <Grid.Column>
        <Segment size={segmentSize}>
          <Container as={Link} textAlign="center" to="/docs/1/missionstatement">
            <Header>
              <Icon
                name={DOCUMENTATION_MISSION_STATEMENT.icon}
                color={DOCUMENTATION_MISSION_STATEMENT.color}
              />
              Mission Statement
            </Header>
          </Container>
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment size={segmentSize}>
          <Container as={Link} textAlign="center" to="/docs/1/howto">
            <Header>
              <Icon
                name={DOCUMENTATION_HOW_TO.icon}
                color={DOCUMENTATION_HOW_TO.color}
              />
              How To Use {SITE_NAME}
            </Header>
          </Container>
        </Segment>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <Segment size={segmentSize}>
          <Container as={Link} textAlign="center" to="/docs/1/metric">
            <Header>
              <Icon
                name={DOCUMENTATION_TO_METRIC.icon}
                color={DOCUMENTATION_TO_METRIC.color}
              />
              Metric Perspective
            </Header>
          </Container>
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment size={segmentSize}>
          <Container as={Link} textAlign="center" to="/docs/1/uscustomary">
            <Header>
              <Icon
                name={DOCUMENTATION_FROM_METRIC.icon}
                color={DOCUMENTATION_FROM_METRIC.color}
              />
              US Units Perspective
            </Header>
          </Container>
        </Segment>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row centered>
      <Grid.Column width={15}>
        <Segment size={segmentSize} color="purple">
          <Container as={Link} textAlign="center" to="/docs/1/guide">
            <Header>
              <Icon
                name={DOCUMENTATION_GUIDE.icon}
                color={DOCUMENTATION_GUIDE.color}
              />
              Tips and Guides
            </Header>
            <br />
          </Container>

          <Grid columns="equal" stackable>
            <Grid.Row>
              <Grid.Column>
                <Segment size={segmentSize} color={SUBJECT_ICONS.Length.color}>
                  <Container as={Link} textAlign="center" to="/docs/2/guide/length">
                    <Header>
                      <Icon
                        name={SUBJECT_ICONS.Length.icon}
                        color={SUBJECT_ICONS.Length.color}
                      />
                      Length
                    </Header>
                  </Container>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment size={segmentSize} color={SUBJECT_ICONS.Mass.color}>
                  <Container as={Link} textAlign="center" to="/docs/2/guide/mass">
                    <Header>
                      <Icon
                        name={SUBJECT_ICONS.Mass.icon}
                        color={SUBJECT_ICONS.Mass.color}
                      />
                      Mass
                    </Header>
                  </Container>
                </Segment>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                <Segment size={segmentSize} color={SUBJECT_ICONS.Volume.color}>
                  <Container as={Link} textAlign="center" to="/docs/2/guide/volume">
                    <Header>
                      <Icon
                        name={SUBJECT_ICONS.Volume.icon}
                        color={SUBJECT_ICONS.Volume.color}
                      />
                      Volume
                    </Header>
                  </Container>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment size={segmentSize} color={SUBJECT_ICONS.Temperature.color}>
                  <Container as={Link} textAlign="center" to="/docs/2/guide/temperature">
                    <Header>
                      <Icon
                        name={SUBJECT_ICONS.Temperature.icon}
                        color={SUBJECT_ICONS.Temperature.color}
                      />
                      Temperature
                    </Header>
                  </Container>
                </Segment>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                <Segment size={segmentSize} color={SUBJECT_ICONS.Velocity.color}>
                  <Container as={Link} textAlign="center" to="/docs/2/guide/velocity">
                    <Header>
                      <Icon
                        name={SUBJECT_ICONS.Velocity.icon}
                        color={SUBJECT_ICONS.Velocity.color}
                      />
                      Velocity
                    </Header>
                  </Container>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment size={segmentSize} color={SUBJECT_ICONS.Area.color}>
                  <Container as={Link} textAlign="center" to="/docs/2/guide/area">
                    <Header>
                      <Icon
                        name={SUBJECT_ICONS.Area.icon}
                        color={SUBJECT_ICONS.Area.color}
                      />
                      Area
                    </Header>
                  </Container>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Grid.Column>
    </Grid.Row>

    {props.displayShowAll &&
      <Grid.Row centered textAlign="center">
        <Grid.Column width={6}>
          <Button fluid as={Link} to="/docs/all/top" color="olive">
            <Icon name="eye" /> Show All
          </Button>
        </Grid.Column>
      </Grid.Row>
    }
  </Grid>
);

DocumentationMap.propTypes = {
  displayShowAll: PropTypes.bool.isRequired,
};

export default DocumentationMap;
