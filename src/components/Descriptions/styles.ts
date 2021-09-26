import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const HeadingWrapper = styled.div`
  padding: ${({ theme }): string => theme.spacing.gutter};
  padding-top: ${({ theme }): string => `calc(${theme.spacing.gutter} * 2)`};
  padding-bottom: ${({ theme }): string => `calc(${theme.spacing.gutter} / 2)`};
  h2 {
    color: ${({ theme }): string => theme.palette.dark};
  }
`;

export const ItemsWrapper = styled.div`
  padding: ${({ theme }): string => `0 ${theme.spacing.gutter}`};
  display: flex;
  flex-direction: column;
`;

export const ItemContainer = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }): string => `${theme.spacing.gutter} 0`};

  .item-container__heading {
    color: ${({ theme }): string => theme.palette.light};
    font-weight: 700;
  }

  .item-container__blurb {
    color: ${({ theme }): string => theme.palette.dark};
    font-weight: 700;
  }
`;
