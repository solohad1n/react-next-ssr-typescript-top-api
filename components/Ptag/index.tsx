import React from 'react'
import { IPtagProps } from './Ptag.pops'
import styles from './Ptag.module.css'
import cn from 'classnames'

export const Ptag = ({ size, children, ...props }: IPtagProps): JSX.Element => {
  return (
    <p className={cn(styles.p, {
      [styles.s]: size === 's',
      [styles.m]: size === 'm',
      [styles.l]: size === 'l',
    })}
      {...props}
    >
      {children}
    </p>
  );
};
