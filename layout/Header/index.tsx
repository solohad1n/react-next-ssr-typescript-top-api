import { IHeaderProps } from './Header.props';
import styles from './Header.module.css';
import cn from 'classnames';

export const Header = ({ ...props }: IHeaderProps): JSX.Element => {
  return <div {...props}>Header</div>;
};