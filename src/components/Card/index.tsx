import React from 'react';
import { CardProps } from 'types/components';
import {
  Container,
  ExtraWrapper,
  HeadingWrapper,
} from 'components/Card/styles';

const Card = ({ heading, blurb, extra }: CardProps): React.ReactElement => {
  return (
    <Container>
      <HeadingWrapper>
        <h2>{heading}</h2>
        <p>{blurb}</p>
      </HeadingWrapper>
      <ExtraWrapper>{extra}</ExtraWrapper>
    </Container>
  );
};

export default Card;
