import styled from 'styled-components';

export const Container = styled.button`
  background: var(--color-primary);
  color: var(--color-background);
  height: 3.5rem;
  border-radius: 0.625rem;
  border: 0;
  padding: 0 1rem;
  width: 100%;
  font-weight: 500;
  margin-top: 1rem;
  transition: background-color 0.2s;

  &:hover {
    background: var(--color-primary-darken);
  }
`;
