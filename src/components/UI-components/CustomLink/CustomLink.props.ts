import React, { ReactElement, ReactNode } from "react";
import { LinkProps } from "react-router-dom";

export interface CustomLinkProps extends LinkProps {
  children: ReactNode | ReactElement;
}
