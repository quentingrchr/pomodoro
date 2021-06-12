import styled from "styled-components";

export const StepsContainer = styled.div`
  background-color: ${(p) => p.theme.bgDark};
  border-radius: 4rem;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  margin-bottom: 4rem;
`;

export const Step = styled.button`
  outline: none;
  font-family: ${(p) => p.theme.fontPrimary[p.selectedFont]};
  padding: 1.5rem 2.8rem;
  background-color: ${(p) =>
    p.active ? p.theme.colorPrimary[p.selectedColor] : p.theme.bgDark};
  border: none;
  border-radius: 4rem;
  color: ${(p) => (p.active ? p.theme.bgDark : p.theme.textGrey)};
  font-weight: bold;
`;
