import cn from 'classnames';
import React from 'react'
import styles from './Button.module.css'
import { IButtonProps } from './Button.props';
import ArrowIcon from './arrow.svg'

const Button = ({
  appearance,
  children,
  className,
  arrow = 'none',
  ...props
}: IButtonProps) => {
  return <button className={cn(styles.button, className, {
    [styles.primary]: appearance === 'primary',
    [styles.ghost]: appearance === 'ghost',
  })}
    {...props}
  >
    {children}
    {arrow !== 'none' && (
      <span
        className={cn(styles.arrow, {
          [styles.down]: arrow == 'down',
        })}>
        <ArrowIcon />
      </span>
    )}
  </button >
};

export default Button