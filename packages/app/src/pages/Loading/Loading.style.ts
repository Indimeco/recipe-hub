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
  border-color: ${palette.brand} ${palette.brand} ${palette.brand} transparent;
  animation: 1.6s ${spin} cubic-bezier(0.1, 1, 0.7, 0.5) infinite;
`;

export const LoadingArea = styled.section`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
