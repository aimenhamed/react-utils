import { ReactNode } from "react";

export type DialogProps = {
  close?: () => void;
  closeIcon?: string;
  title?: string;
  children: ReactNode;
  modalSize?: string;
};
