import React from 'react';
import './App.css';
import Footer from './components/Footer';
import RetrievedData from './components/Fulldata';

function App() {
  return (
    <div className="App">
      <RetrievedData />
      <Footer/>
    </div>
  );
}
export default App;