import React, { useEffect } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import 'mdb-ui-kit/css/mdb.min.css';
import { Carousel, Dropdown, Ripple, initMDB } from 'mdb-ui-kit';


const App = () => {
  useEffect(() => {
    // Initialize MDB components
    initMDB({ Carousel, Dropdown, Ripple });
  }, []);
  return (
    <>
      <Header/>
      <Banner/>
    </>
  )
}

export default App