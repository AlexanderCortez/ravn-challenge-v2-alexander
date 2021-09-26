import styled from 'styled-components';
import { up } from 'styled-breakpoints';

export const Container = styled.div`
  position: relative;
  height: calc(100vh - 50px);
`;

export const SliderWrapper = styled.div`
  height: 100%;
  width: 100%;
  ${up('md')} {
    display: flex;
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  height: calc(100vh - 50px);
  width: 100%;
  flex-direction: column;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  overflow: hidden;
  overflow-y: auto;

  ${up('md')} {
    max-width: 350px;
    width: 350px;
    min-width: 350px;
  }
`;

export const DetailsWrapper = styled.div`
  width: 100%;
  overflow-y: auto;
  padding: 0;

  ${up('sm')} {
    padding: 0 10%;
  }
`;

export const BackButton = styled.button`
  display: block;
  padding: 0;
  margin: 0;
  color: inherit;
  background: none;
  background-image: none;
  border: none;
  outline: none !important;
  box-shadow: none;
  appearance: none;
  cursor: pointer;

  i {
    color: ${({ theme }): string => theme.palette.white};
  }
`;
