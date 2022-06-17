import { DetailedHTMLProps, ReactNode, HTMLAttributes } from 'react';

export interface ILayoutProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}

