import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }): string => `${theme.spacing.gutter} 0`};
  padding-left: ${({ theme }): string => `${theme.spacing.gutter}`};
  padding-right: 0;
  cursor: pointer;
  position: relative;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    width: 100%;
  }
`;

export const HeadingWrapper = styled.div`
  padding-right: ${({ theme }): string => `${theme.spacing.gutter}`};
  width: 100%;
  .card-container__blurb {
    color: ${({ theme }): string => theme.palette.light};
  }
  .card-container__heading {
    color: ${({ theme }): string => theme.palette.dark};
  }
`;

export const ExtraWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-width: 50px;
`;
