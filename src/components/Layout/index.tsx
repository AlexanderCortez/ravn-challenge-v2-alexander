import React from 'react';
import { LayoutProps } from 'types/components';
import { Container, Header } from 'components/Layout/styles';

const Layout = ({ children }: LayoutProps): React.ReactElement => {
  return (
    <Container>
      <Header>
        <h2>Ravn Star Wars Registry</h2>
      </Header>
      <div>{children}</div>
    </Container>
  );
};

export default Layout;
