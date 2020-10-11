import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}
export const Container = styled.div<ContainerProps>`
  background: var(--color-inputs);
  border-radius: 0.625rem;
  padding: 1rem;
  width: 100%;

  color: var(--color-hard-gray);
  border: 2px solid var(--color-inputs);

  display: flex;
  align-items: center;

  & + div {
    margin-top: 0.5rem;
  }
  ${props =>
    props.isErrored &&
    css`
      border-color: var(--color-error);
    `}
  ${props =>
    props.isFocused &&
    css`
      color: var(--color-primary);
      border-color: var(--color-primary);
    `}

  ${props =>
    props.isFilled &&
    css`
      color: var(--color-primary);
    `}


  input {
    background: transparent;
    color: var(--color-white);
    flex: 1;
    border: 0;
    &::placeholder {
      color: var(--color-hard-gray);
    }
  }

  svg {
    margin-right: 1rem;
  }
`;

export const Error = styled(Tooltip)`
  height: 1.25rem;
  margin-left: 1rem;
  svg {
    margin: 0;
    font-size: 1.25rem;
    color: var(--color-error);
  }
  span {
    background: var(--color-error);
    color: var(--color-text-white);

    &::before {
      border-color: var(--color-error) transparent;
    }
  }
`;
