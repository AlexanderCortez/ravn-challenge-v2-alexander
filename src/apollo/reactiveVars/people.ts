import { makeVar } from '@apollo/client';
import { Person } from 'apollo/generated/graphql';

interface IPeople {
  total: number;
  people: Person[];
}

export const allPeopleStatus = makeVar<IPeople>({
  total: 0,
  people: [],
});
