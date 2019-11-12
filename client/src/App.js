import React from 'react';
import './App.scss';

import Header from './Components/Header';
import FetchData from './Components/FetchData';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />

      <section className="Main">
        <FetchData />
      </section>

      <Footer />
    </div>
  );
}

export default App;
