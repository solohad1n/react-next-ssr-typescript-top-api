import cn from 'classnames'
import React from 'react'
import { ITagProps } from './Tag.props'
import styles from './Tag.module.css'

export const Tag = ({
  size = 's',
  color = 'ghost',
  href,
  children,
  ...props
}: ITagProps): JSX.Element => {
  return <div className={cn(styles.tag, {
    [styles.s]: size == 's',
    [styles.m]: size == 'm',
    [styles.ghost]: color == 'ghost',
    [styles.red]: color == 'red',
    [styles.gray]: color == 'gray',
    [styles.green]: color == 'green',
    [styles.primary]: color == 'primary',
  })}
    {...props}
  >
    {href ? <a href={href}>{children}</a> : children}
  </div >
}
