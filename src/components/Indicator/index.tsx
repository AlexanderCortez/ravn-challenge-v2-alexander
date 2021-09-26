import React from 'react';
import { IndicatorProps } from 'types/components';
import { Container, LoaderContainer } from 'components/Indicator/styles';
import Icon from 'assets/img/loader-icon.svg';

const Indicator = ({
  loading,
  error,
  tip,
}: IndicatorProps): React.ReactElement => {
  return (
    <Container className="indicator-container">
      {!loading && <h2 className="indicator-container__error">{error}</h2>}
      {loading && (
        <LoaderContainer>
          <img src={Icon} alt="loading" />
          <h2>{tip}</h2>
        </LoaderContainer>
      )}
    </Container>
  );
};

export default Indicator;
