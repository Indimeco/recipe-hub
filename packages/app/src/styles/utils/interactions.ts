import { css } from 'styled-components';

import { TRANSITIONS, palette } from '../base';

const interaction = css`
  transition: background-color ${TRANSITIONS.swift}, color ${TRANSITIONS.swift}, border-color ${TRANSITIONS.swift},
    transform ${TRANSITIONS.swift};
  cursor: pointer;

  &:hover,
  &:focus {
    text-decoration: none;
  }

  &:focus {
    outline: none;
  }
`;

export const mainInteractable = css`
  ${interaction};

  color: ${palette.brand};

  &:hover,
  &:focus {
    color: ${palette.auxAccent};
  }
`;

export const secondaryInteractable = css`
  ${interaction};

  color: ${palette.aux};

  &:hover,
  &:focus {
    color: ${palette.brand};
  }
`;
