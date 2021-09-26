import { Person } from 'apollo/generated/graphql';
import { allPeopleStatus } from './people';

export const setPeople = (otherPeople: Person[], total?: number) => {
  const { people, ...rest } = allPeopleStatus();
  allPeopleStatus({
    ...rest,
    people: [...people, ...otherPeople],
    total: total || rest.total,
  });
};
