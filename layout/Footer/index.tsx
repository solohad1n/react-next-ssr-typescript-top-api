import { IFooterProps } from './Footer.props';
import styles from './Footer.module.css';
import cn from 'classnames';

export const Footer = ({ ...props }: IFooterProps): JSX.Element => {
  return <div {...props}>Footer</div>;
};