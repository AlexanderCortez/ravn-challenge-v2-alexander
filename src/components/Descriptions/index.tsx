import React from 'react';
import { DescriptionsProps } from 'types/components';
import DescriptionsItem from 'components/Descriptions/Item';
import {
  Container,
  HeadingWrapper,
  ItemsWrapper,
} from 'components/Descriptions/styles';

const Descriptions = ({ title, children }: DescriptionsProps): JSX.Element => {
  return (
    <Container>
      <HeadingWrapper>
        <h2>{title}</h2>
      </HeadingWrapper>
      <ItemsWrapper>{children}</ItemsWrapper>
    </Container>
  );
};

Descriptions.Item = DescriptionsItem;

export default Descriptions;
