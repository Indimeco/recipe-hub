import { css } from 'styled-components';

export default ({ color, inline, ...props }) => {
	return css`
    margin: 0 0 ${props.theme.spacing.small} 0;
    padding: ${props.theme.spacing.small};
    border: solid 1px ${color.fg};
    width: ${inline ? '100px' : '100%'};

    &:hover,
    &:focus,
    &:active {
      border: solid 1px ${color.fgAccent};
      box-shadow: 0 0 3px 1px ${color.bgAccent};
    }
  `;
};
