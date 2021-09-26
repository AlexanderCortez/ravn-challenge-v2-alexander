import React from 'react';
import { LayoutProps } from 'types/components';
import { Container, Body } from 'components/Layout/styles';

const Layout = ({ children }: LayoutProps): React.ReactElement => {
  return (
    <Container>
      <Body>{children}</Body>
    </Container>
  );
};

export default Layout;
