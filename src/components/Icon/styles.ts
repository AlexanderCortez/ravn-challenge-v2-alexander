import styled from 'styled-components';
import { IconProps } from 'types/components';

export const IconElement = styled.i.attrs<IconProps>((props) => ({
  className: props.name,
}))<IconProps>`
  color: ${({ theme }): string => theme.palette.black};
  font-size: ${({ size }): string => `${size}px`};
`;
