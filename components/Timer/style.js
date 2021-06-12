import styled from "styled-components";

export const TimerContainer = styled.div`
  border-radius: 50%;
  background-color: ${(p) => p.theme.bgDark};
  padding: 2rem;
  height: 40rem;
  width: 40rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  cursor: pointer;
  box-shadow: 12px 6px 25px rgba(19, 21, 38, 0.85),
    -12px -6px 25px rgba(41, 46, 88, 0.85);
  /* @media (max-width: 412px) {
    height: 200px;
    width: 200px;
  } */
  p {
    font-size: 12rem;
    font-weight: bold;
    margin-bottom: 2rem;
    position: relative;
    &::after {
      content: "${(p) => p.text}";
      text-transform: uppercase;
      letter-spacing: 1rem;
      font-weight: normal;
      font-size: 2rem;
      text-align: center;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${(p) => p.theme.text};
      bottom: -4rem;
      left: 50%;
      transform: translateX(-50%);
      margin-left: 1rem;
    }
  }
  h2 {
    text-transform: uppercase;
    letter-spacing: 1rem;
    font-weight: normal;
    font-size: 2rem;
    text-align: center;
    position: absolute;
    bottom: 8rem;
  }
`;

export const CircularProgressBarContainer = styled.div`
  position: absolute;

  .circle-background,
  .circle-progress {
    fill: none;
  }

  .circle-background {
    stroke: ${(p) => p.theme.bgDark};
  }

  .circle-progress {
    stroke: ${(p) => p.theme.colorPrimary[p.selectedColor]};
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`;
