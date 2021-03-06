import React from 'react';
import { CardProps } from 'types/components';
import {
  Container,
  ExtraWrapper,
  HeadingWrapper,
} from 'components/Card/styles';

const Card = ({
  heading,
  blurb,
  extra,
  onClick,
  isCurrent,
}: CardProps): React.ReactElement => {
  return (
    <Container
      className="card-container"
      onClick={onClick}
      isCurrent={isCurrent}
    >
      <HeadingWrapper>
        <h2 className="card-container__heading">{heading}</h2>
        <p className="card-container__blurb">{blurb}</p>
      </HeadingWrapper>
      <ExtraWrapper>{extra}</ExtraWrapper>
    </Container>
  );
};

export default Card;
