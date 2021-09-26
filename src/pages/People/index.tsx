import React, { useEffect, useState } from 'react';
import AllPeople from 'components/AllPeople';
import { Person, useGetPeopleLazyQuery } from 'apollo/generated/graphql';
import { setPeople } from 'apollo/reactiveVars/mutators';

const People = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);
  const [getPeople, { data, error }] = useGetPeopleLazyQuery({
    onError: () => setIsLoading(false),
  });
  const total = data?.allPeople?.totalCount;
  const pageInfo = data?.allPeople?.pageInfo;

  useEffect(() => {
    if (data?.allPeople?.people) {
      setPeople(data?.allPeople?.people as Person[], total!);
    }
  }, [data?.allPeople?.people, total]);

  useEffect(() => {
    setIsLoading(true);
    getPeople({ variables: { first: 5, after: '' } });
  }, [getPeople]);

  useEffect(() => {
    if (pageInfo) {
      if (pageInfo?.hasNextPage) {
        getPeople({ variables: { first: 5, after: pageInfo.endCursor } });
      } else {
        setIsLoading(false);
      }
    }
  }, [pageInfo, getPeople]);

  return (
    <div>
      <AllPeople error={error} loading={isLoading && !error} />
    </div>
  );
};

export default People;
