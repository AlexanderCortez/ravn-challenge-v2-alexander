import { up } from 'styled-breakpoints';
import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.div`
  background-color: ${({ theme }): string => theme.palette.black};
  height: 50px;
  display: flex;
  align-items: center;
  position: relative;

  h2 {
    color: ${({ theme }): string => theme.palette.white};
    width: 100%;
    text-align: center;
  }

  padding: ${({ theme }): string => theme.spacing.gutter};

  .app-header__extra {
    color: ${({ theme }): string => theme.palette.white};
    position: absolute;
    height: 100%;
    display: flex;
    align-items: center;
  }

  ${up('md')} {
    padding: ${({ theme }): string =>
      `${theme.spacing.gutter} calc(${theme.spacing.gutter} * 2)`};
    .app-header__extra {
      display: none;
    }

    h2 {
      text-align: left;
    }
  }
`;

export const Body = styled.div`
  position: relative;
  height: calc(100vh - 50px);
`;
