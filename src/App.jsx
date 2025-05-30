import React from 'react'
import './App.css'
import Weather from './components/Weather'

const App = () => {
  return (
    <><div className='app'>
      <Weather />
    </div>
    <div className='querysection'>
      <footer>
        <p><strong>For Any Query Contact:</strong></p>
        <address>
          <p>veereshkumar.b.s18@gmail.com</p>
          <p><strong>or</strong></p>
          <p>+91 9611581279</p>
        </address>
      </footer>
    </div>
    </>
  )
}

export default App