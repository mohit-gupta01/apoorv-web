import React, { Fragment } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { useLocation } from 'react-router-dom';

const Layout = (props) => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <Fragment>
      <Header />
      {props.children}
      {(path !== "/sponsor") && <Footer />}
    </Fragment>
  )
}

export default Layout;