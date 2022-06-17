import React from 'react'
import { ILayoutProps } from './Layout.props'
import styles from './Layout.module.css';
import cn from 'classnames';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';

const Layout = ({ children }: ILayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <div>
        <Sidebar />
        <div>{children}</div>
      </div>
      <Footer />
    </>
  )
}

export const withLayout = (Component: React.FC) => () =>
(
  <Layout>
    <Component />
  </Layout>
);
