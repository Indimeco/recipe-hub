import { css } from 'styled-components';

export default ({ color, ...props }) => {
  console.log('Filter has color: ', color);
  return color
    ? css`
        color: ${color.fg};
      `
    : '';
};
