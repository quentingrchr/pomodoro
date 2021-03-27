import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;
export const Input = styled.input.attrs({ type: "number" })`
  background-color: ${(p) => p.theme.bgSecondaryDark};
  border: none;
  border-radius: 1rem;
  padding: 1.3rem 1rem;
  width: 100%;
  box-sizing: border-box;
  font-family: ${(p) => p.theme.fontPrimary[p.selectedFont]};
  font-weight: 700;

  &:focus {
    outline: none;
  }
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

export const Controls = styled.div`
  position: absolute;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  top: 0;
  right: 0;
  height: 100%;
  overflow: hidden;

  span {
    opacity: 0.4;
    box-sizing: border-box;
    padding: 1rem 1rem;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    &:nth-child(1) {
      border-top-right-radius: 1rem;
    }

    &:nth-child(2) {
      border-bottom-right-radius: 1rem;
    }
    svg {
      width: 1.5rem;
      height: 1.5rem;
    }

    &:hover {
      opacity: 1;
    }
  }
`;
