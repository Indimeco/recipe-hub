import styled from 'styled-components';
import { palette, SPACE_SMALL } from '../../styles/base';

export const StyledTextarea = styled.textarea`
    margin: 0 0 ${SPACE_SMALL} 0;
    padding: ${SPACE_SMALL};
    border: solid 1px ${palette.brand};
    width: 100%;
    height: 30vh;

    &:hover,
    &:focus,
    &:active {
      border: solid 1px ${palette.bgAccent};
    }
`;

