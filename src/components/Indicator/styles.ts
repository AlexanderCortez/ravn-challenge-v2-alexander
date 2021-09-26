import styled from 'styled-components';

export const Container = styled.div`
  padding: ${({ theme }): string => theme.spacing.gutter};
  display: flex;
  justify-content: center;
  align-items: center;

  .indicator-container__error {
    color: ${({ theme }): string => theme.palette.emphasis};
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 20px;
    height: 22px;
  }

  h2 {
    margin-left: ${({ theme }): string => `calc(${theme.spacing.gutter} / 2)`};
    color: ${({ theme }): string => theme.palette.light};
  }
`;
