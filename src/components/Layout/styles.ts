import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.div`
  background-color: ${({ theme }): string => theme.palette.black};
  padding: ${({ theme }): string =>
    `calc(${theme.spacing.gutter} * 2) ${theme.spacing.gutter}`};

  h2 {
    color: ${({ theme }): string => theme.palette.white};
  }
`;
