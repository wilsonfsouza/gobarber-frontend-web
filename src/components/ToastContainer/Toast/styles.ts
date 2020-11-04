import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ContainerProps {
  type?: 'info' | 'success' | 'error';
  hasDescription: boolean;
}

const toastTypeVariations = {
  info: css`
    background: var(--color-toast-info-background);
    color: var(--color-toast-info-text);
  `,
  success: css`
    background: var(--color-toast-success-background);
    color: var(--color-toast-success-text);
  `,
  error: css`
    background: var(--color-toast-error-background);
    color: var(--color-toast-error-text);
  `,
};

export const Container = styled(animated.div) <ContainerProps>`
  width: 360px;
  position: relative;

  padding: 1rem 1.875rem 1rem 1rem;
  border-radius: 0.625rem;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  display: flex;

  & + div {
    margin-top: 0.5rem;
  }
  ${props => toastTypeVariations[props.type || 'info']}

  > svg {
    margin: 0.25rem 0.75rem 0 0;
  }
  div {
    flex: 1;
    p {
      margin-top: 0.25rem;
      font-size: 0.875rem;
      opacity: 0.8;
      line-height: 1.25rem;
    }
  }

  button {
    position: absolute;
    right: 1rem;
    top: 1.1875rem;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }

  ${props =>
    !props.hasDescription &&
    css`
      align-items: center;

      > svg {
        margin-top: 0;
      }

      button {
        top: 1.25rem;
      }
    `}
`;
