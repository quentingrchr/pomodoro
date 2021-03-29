import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(p) => p.theme.bg};
  cursor: pointer;
  border: none;
  width: 5rem;
  height: 5rem;
  margin: 3rem 0;
  transform-origin: 50% 50%;
  transition: 0.2s transform ease;
  transform: ${(p) => (p.isSettingsOpen ? "rotate(90deg)" : "rotate(0deg)")};

  &:focus {
    outline: none;
  }

  svg  {
    path {
      stroke: ${(p) =>
        p.isSettingsOpen ? p.theme.bgSecondary : p.theme.textGrey};
    }
  }

  &:hover {
    svg  {
      path {
        stroke: ${(p) => p.theme.bgSecondary};
      }
    }
  }
`;
