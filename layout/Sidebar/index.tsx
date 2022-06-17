import { ISidebarProps } from './Sidebar.props';
import styles from './P.module.css';
import cn from 'classnames';

export const Sidebar = ({ ...props }: ISidebarProps): JSX.Element => {
  return <div {...props}>Sidebar</div>;
};