import React, { useEffect, useRef, useState } from 'react';
import { tns, TinySliderInstance } from 'tiny-slider/src/tiny-slider';
import {
  Container,
  ListWrapper,
  DetailsWrapper,
  SliderWrapper,
  BackButton,
} from 'components/AllPeople/styles';
import Card from 'components/Card';
import Icon from 'components/Icon';
import Indicator from 'components/Indicator';
import Descriptions from 'components/Descriptions';
import { useBreakpoint } from 'styled-breakpoints/react-styled';
import { up } from 'styled-breakpoints';
import AppHeader from 'components/AppHeader';

const AllPeople = (): JSX.Element => {
  const isDesktop = useBreakpoint(up('md'));
  const sliderRef = useRef(null);
  const [sliderInstance, setSliderInstance] =
    useState<TinySliderInstance | null>(null);

  useEffect(() => {
    if (!sliderInstance && sliderRef?.current && isDesktop === false) {
      const slider = tns({
        autoHeight: true,
        container: sliderRef.current || undefined,
        controls: false,
        items: 1,
        loop: false,
        nav: false,
        touch: false,
        responsive: {
          900: {
            disable: true,
          },
        },
      });

      setSliderInstance(slider);
    }
  }, [sliderInstance, sliderRef, isDesktop]);

  useEffect(() => {
    if (isDesktop === true) {
      sliderInstance?.goTo(0);
    }
  }, [isDesktop, sliderInstance]);

  const onPersonClick = (): void => {
    if (!isDesktop) {
      sliderInstance?.goTo('next');
    }
  };

  const onBack = (): void => {
    sliderInstance?.goTo('prev');
  };

  return (
    <>
      <AppHeader
        extra={
          <BackButton onClick={onBack}>
            <Icon name="ri-arrow-left-line" size={25} />
          </BackButton>
        }
        title="Ravn Star Wars Registry"
      />
      <Container>
        <SliderWrapper ref={sliderRef}>
          <ListWrapper>
            <Card
              heading="Luke Skywalker"
              blurb="Human from Tatooine"
              extra={<Icon name="ri-arrow-right-s-line" size={30} />}
            />
            <Card
              heading="C-3PO"
              blurb="Droid from Tatooine"
              extra={<Icon name="ri-arrow-right-s-line" size={30} />}
            />
            <Card
              heading="R2-D2"
              blurb="Droid from Naboo"
              extra={<Icon name="ri-arrow-right-s-line" size={30} />}
              onClick={onPersonClick}
            />
            <Indicator loading tip="Loading" />
          </ListWrapper>
          <DetailsWrapper>
            <Descriptions title="General Information">
              <Descriptions.Item label="Eye Color">Blue</Descriptions.Item>
              <Descriptions.Item label="Hair Color">Blond</Descriptions.Item>
              <Descriptions.Item label="Skin Color">Fair</Descriptions.Item>
              <Descriptions.Item label="Birth Year">19BBY</Descriptions.Item>
            </Descriptions>
            <Descriptions title="Vehicles">
              <Descriptions.Item label="Snowspeeder" />
              <Descriptions.Item label="Imperial Speeder Bike" />
            </Descriptions>
          </DetailsWrapper>
        </SliderWrapper>
      </Container>
    </>
  );
};

export default AllPeople;
