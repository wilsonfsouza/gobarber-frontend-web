import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  > header {
    height: 144px;
    background: var(--color-black-medium);

    display: flex;
    align-items: center;

    div {
      width: 100%;
      max-width: 1120px;
      margin: 0 auto;
      svg {
        color: var(--color-light-gray);
        width: 24px;
        height: 24px;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: -176px auto 0;

  form {
    margin: 5rem;
    width: 340px;
    text-align: center;
    display: flex;
    flex-direction: column;

    h1 {
      margin-bottom: 1.5rem;
      font-size: 20px;
      text-align: left;
    }

    a {
      color: var(--color-white);
      text-decoration: none;
      display: block;
      margin-top: 1.5rem;
      transition: color 0.2s;

      &:hover {
        color: var(--color-white-darken);
      }
    }
  }
`;

export const AvatarInput = styled.div`
  margin-bottom: 32px;
  position: relative;
  align-self: center;
  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }
  label {
    position: absolute;
    width: 48px;
    height: 48px;
    background: var(--color-primary);
    border: 0;
    border-radius: 50%;

    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s;
    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: var(--color-background);
    }

    &:hover {
      background: ${shade(0.2, '#FF9000')};
    }
  }
`;
