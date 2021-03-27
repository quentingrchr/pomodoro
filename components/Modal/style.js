import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: ${(p) => (p.hidden ? "none" : "flex")};
  justify-content: center;
  align-items: center;
`;
