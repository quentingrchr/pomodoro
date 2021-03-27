import React from "react";
import { ModalContainer } from "./style";
export default function Modal({ children, hidden }) {
  return <ModalContainer hidden={hidden}>{children}</ModalContainer>;
}
