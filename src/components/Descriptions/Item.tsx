import React from 'react';
import { DescriptionsItemProps } from 'types/components';
import { ItemContainer } from 'components/Descriptions/styles';

const Item = ({ label, children }: DescriptionsItemProps): JSX.Element => {
  return (
    <ItemContainer className="item-container">
      <h2 className="item-container__heading">{label}</h2>
      <h2 className="item-container__blurb">{children}</h2>
    </ItemContainer>
  );
};

export default Item;
