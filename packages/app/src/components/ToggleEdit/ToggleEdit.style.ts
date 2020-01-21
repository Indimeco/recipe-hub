import styled from 'styled-components';

export const ToggleButtonWrapper = styled.div`
  text-align: right;
`;

export const ButtonVisibilityWrapper = styled.div`
  & button {
    opacity: 0;
    transition: 0.3s opacity 3s ease-out;
  }

  &:hover button {
    opacity: 1;
    transition: none;
  }
`;
