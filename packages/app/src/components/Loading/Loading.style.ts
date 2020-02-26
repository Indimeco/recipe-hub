import styled, { keyframes } from 'styled-components';

import { palette } from '../../styles/base';

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const Spinner = styled.div`
  width: 5vw;
  height: 5vw;
  border-radius: 100%;
  border: 4px solid;
  border-color: ${palette.aux} ${palette.aux} ${palette.aux} transparent;
  animation: 1.6s ${spin} cubic-bezier(0, 0.7, 0.72, 1) infinite;
`;
