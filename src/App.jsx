import React from 'react'
import NewUgly from "./components/NewUgly.jsx"
import Ugly from "./components/Ugly"
import { UglyContext, UglyContextProvider } from './components/UglyContext'
import './App.css'

function App(props) {

  return (
    <div className="App">
      <UglyContextProvider>
        <NewUgly />
        <Ugly />
      </UglyContextProvider>
    </div>
  )
}

export default App
