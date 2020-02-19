//import "core-js/stable"
//import "regenerator-runtime/runtime"
import React from 'react'
import './App.css'

import Header from './components/Header'
//import Sidebar from './components/Sidebar'
//import Main from './components/Main'
import Footer from './components/Footer'
//import Main from './containers/Main'
import Main from './components/Main'

function App () {
  return (
    <div className='App'>
      <Header />
      {/*<Sidebar />*/}
      <Main />
      <Footer />
    </div>
  )
}

export default App