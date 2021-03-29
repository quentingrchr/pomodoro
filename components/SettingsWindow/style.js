import styled from "styled-components";

export const Window = styled.div`
  background-color: ${(p) => p.theme.bgSecondary};
  min-width: 300px;
  width: 45vw;
  border-radius: 25px;
  color: ${(p) => p.theme.bgDark};
  button {
    cursor: pointer;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px rgba(125, 125, 125, 0.1) solid;
  padding: 3rem 2.5rem;

  h2 {
    font-size: 2.6rem;
    font-weight: bold;
  }
  p {
    color: red;
    opacity: 0.7;
    font-weight: bold;
    font-size: 1.4rem;
  }
  button {
    background-color: transparent;
    border: none;
    outline: none;
    width: 2.6rem;
    height: 2.6rem;
    padding: 0;

    svg {
      height: 100%;
      width: 100%;
      filter: drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.2));
    }
  }
`;

export const Form = styled.form`
  padding: 1.8rem 3rem;
  padding-bottom: 4rem;
  position: relative;
  h3 {
    text-transform: uppercase;
    font-size: 1.2rem;
    font-family: ${(p) => p.theme.fontPrimary[p.selectedFont]};
    font-weight: 700;
    letter-spacing: 0.4rem;
  }
`;

export const FormGroup = styled.div`
  margin-top: 1.8rem;
  display: flex;
  justify-content: space-between;
  padding-bottom: 3rem;
`;

export const TimeInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 25%;

  label {
    color: ${(p) => p.theme.textGrey};
    margin-bottom: 1rem;
    margin-left: 0.2rem;
    font-size: 1.2rem;
    opacity: 0.8;
  }
`;

export const FormRow = styled.div`
  border-top: 3px rgba(125, 125, 125, 0.1) solid;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  label {
    cursor: pointer;
  }
`;

export const RowLeft = styled.div`
  display: flex;

  input {
    display: none;
  }
`;

export const ColorLabel = styled.label`
  background-color: ${(p) => p.color};
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
  margin-left: 1.2rem;

  svg {
    path {
      stroke-width: 4rem;
    }
  }
`;

export const Button = styled.button`
  background-color: ${(p) => p.theme.colorPrimary[p.currentColor]};
  border: none;
  padding: 1.2rem 3.8rem;
  border-radius: 4rem;
  color: ${(p) => p.theme.bgSecondary};
  position: absolute;
  bottom: 0;
  left: 50%;
  font-size: 1.2rem;
  transform: translate(-50%, 50%);
  font-weight: bold;
`;
