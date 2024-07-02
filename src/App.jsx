import React from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import '../node_modules/mdb-ui-kit/css/mdb.min.css'
import { Dropdown, Ripple,Carousel, initMDB } from '/node_modules/mdb-ui-kit/js/mdb.es.min.js'



const App = () => {
  initMDB({ Carousel, Dropdown, Ripple, });
  return (
    <>
      <Header/>
      <Banner/>
    </>
  )
}

export default App