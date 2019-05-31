import { css } from 'styled-components';

export const timeBoxStyle = ({ color, ...props }) => css`
  color: ${color.fg};
  background-color: ${color.bg};
  padding: ${props.theme.spacing.small};
  margin: ${props.theme.spacing.small};
  text-align: center;

  svg {
    margin: 0 5px;
  }
`;

export const clickableStyle = ({color}) => css`
  &:hover {
    color: ${color.fgAccent};
    box-shadow: 0 0 2px ${color.fgAccent};
    cursor: pointer;
  }
`;
