/* eslint-disable max-len,react/no-unescaped-entities */
import React from "react";
import { Container, Header, Icon } from "semantic-ui-react";

import ScrollToTopOnMount from "../ScrollToTopOnMount";

import VideoDemos from "./VideoDemos";
import PersonalIntroduction from "./PersonalIntroduction";
import ThankYou from "./ThankYou";
import { Technical } from "../credits/Stats";
import Technology from "../credits/Technology";

import {
  PAGE_ICON_COLOR_DEMO,
  PAGE_TITLE_HEADER_SIZE,
  SITE_NAME,
} from "../../../constants";

const DemoPage = () => (
  <Container text>
    <ScrollToTopOnMount />
    <Header size={PAGE_TITLE_HEADER_SIZE} textAlign="center">
      <Header.Content>
        <Icon name="bullhorn" color={PAGE_ICON_COLOR_DEMO} />
        {SITE_NAME} Demonstration
        <Header.Subheader>
          For your consideration.
        </Header.Subheader>
      </Header.Content>
    </Header>

    <Header as="h2" content="Demos" dividing />

    <p>
      See all of {SITE_NAME} without having to use it!
    </p>

    <VideoDemos mode="recruiter" />

    <Header as="h2" content="A Personal Introduction" dividing />
    {PersonalIntroduction}

    <Header as="h2" content={`The Technology Behind ${SITE_NAME}`} dividing />
    {Technology}

    <Header as="h2" content="Stats" dividing />
    {Technical}

    <Header as="h2" content="Thank You" dividing />
    {ThankYou}
  </Container>
);

export default DemoPage;
