import React from 'react'
import { ILayoutProps } from './Layout.props'
import styles from './Layout.module.css';
import cn from 'classnames';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';

const Layout = ({ children }: ILayoutProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <div className={styles.body}>{children}</div>
      <Footer className={styles.footer} />
    </div>
  )
}

export const withLayout = (Component: React.FC) => () =>
(
  <Layout>
    <Component />
  </Layout>
);
