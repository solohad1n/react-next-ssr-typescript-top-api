import cn from 'classnames';
import React from 'react'
import styles from './Button.module.css'
import { IButtonProps } from './Button.props';

const Button = ({
  appearance,
  children,
  className,
  ...props
}: IButtonProps) => {
  return <button className={cn(styles.button, className, {
    [styles.primary]: appearance === 'primary',
    [styles.ghost]: appearance === 'ghost',
  })}
    {...props}
  >
    {children}</button >
};

export default Button