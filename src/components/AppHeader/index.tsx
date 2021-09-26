import React from 'react';
import { Header } from 'components/Layout/styles';
import { AppHeaderProps } from 'types/components';

const AppHeader = ({ title, extra }: AppHeaderProps): JSX.Element => {
  return (
    <Header className="app-header">
      {extra && (
        <div className="app-header__extra">
          <div>{extra}</div>
        </div>
      )}
      <h2>{title}</h2>
    </Header>
  );
};

export default AppHeader;
