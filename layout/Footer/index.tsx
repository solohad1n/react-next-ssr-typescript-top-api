import { IFooterProps } from './Footer.props';
import styles from './Footer.module.css';
import cn from 'classnames';
import { format } from 'date-fns';

export const Footer = ({ className, ...props }: IFooterProps): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)}{...props}>
      <div>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</div>
      <a href="#" target="_blank" rel='noopenervnoreferrer'>Пользовательское соглашение</a>
      <a href="#" target="_blank" rel='noopenervnoreferrer'>Политика конфиденциальности</a>
    </footer>
  )
};