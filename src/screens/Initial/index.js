import React from 'react';

import {
  Body,
  Label,
  Title,
  Container,
  MarvelLogo,
  ContainerLogo,
} from './styles';

const Initial = () => {
  return (
    <Container>
      <ContainerLogo>
        <MarvelLogo source={require('@assets/images/logo.jpg')} />
      </ContainerLogo>
      <Body>
        <Title>Welcome to the Marvel App!</Title>
        <Label>
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced
          below for those interested. Sections 1.10.32 and 1.10.33 from "de
          Finibus Bonorum et Malorum" by Cicero are also reproduced in their
          exact original form, accompanied by English versions from the 1914
          translation by H. Rackham.
        </Label>
      </Body>
    </Container>
  );
};

export default Initial;
