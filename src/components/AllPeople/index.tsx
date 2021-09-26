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
import { ApolloError, useReactiveVar } from '@apollo/client';
import { allPeopleStatus } from 'apollo/reactiveVars/people';
import { Person } from 'apollo/generated/graphql';

type Props = {
  error?: ApolloError;
  loading: boolean;
};

const AllPeople = ({ loading, error }: Props): JSX.Element => {
  const { people } = useReactiveVar(allPeopleStatus);
  const [currentPerson, setCurrentPerson] = useState<Person>();
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
    if (isDesktop === false && currentPerson) {
      sliderInstance?.goTo(1);
    }
  }, [isDesktop, sliderInstance, currentPerson]);

  const onPersonClick = (person: Person): void => {
    setCurrentPerson(person);
    if (!isDesktop) {
      sliderInstance?.goTo('next');
    }
  };

  const onBack = (): void => {
    sliderInstance?.goTo('prev');
    setCurrentPerson(undefined);
  };

  return (
    <>
      <AppHeader
        extra={
          currentPerson && (
            <BackButton onClick={onBack}>
              <Icon name="ri-arrow-left-line" size={25} />
            </BackButton>
          )
        }
        title="Ravn Star Wars Registry"
      />
      <Container>
        <SliderWrapper ref={sliderRef}>
          <ListWrapper>
            {people.map((person) => (
              <Card
                isCurrent={person.id === currentPerson?.id}
                key={person.id}
                heading={person.name!}
                blurb={`${person?.species?.name || 'Human'} from ${
                  person.homeworld?.name
                }`}
                extra={<Icon name="ri-arrow-right-s-line" size={30} />}
                onClick={(): void => onPersonClick(person)}
              />
            ))}
            {loading && !error && <Indicator loading tip="Loading" />}
            {error && !loading && <Indicator error="Failed to Load Data" />}
          </ListWrapper>
          <DetailsWrapper>
            {currentPerson && (
              <>
                <Descriptions title="General Information">
                  <Descriptions.Item label="Eye Color">
                    {currentPerson?.eyeColor}
                  </Descriptions.Item>
                  <Descriptions.Item label="Hair Color">
                    {currentPerson?.hairColor}
                  </Descriptions.Item>
                  <Descriptions.Item label="Skin Color">
                    {currentPerson?.skinColor}
                  </Descriptions.Item>
                  <Descriptions.Item label="Birth Year">
                    {currentPerson?.birthYear}
                  </Descriptions.Item>
                </Descriptions>
                <Descriptions title="Vehicles">
                  {currentPerson.vehicleConnection?.vehicles?.map((vehicle) => (
                    <Descriptions.Item
                      key={vehicle?.id}
                      label={vehicle?.name || ''}
                    />
                  ))}
                </Descriptions>
              </>
            )}
          </DetailsWrapper>
        </SliderWrapper>
      </Container>
    </>
  );
};

AllPeople.defaultProps = {
  error: undefined,
};

export default AllPeople;
