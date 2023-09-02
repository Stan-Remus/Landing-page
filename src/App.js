import './App.scss';
import React from 'react';
import Navigation from './components/nav.component/nav.component';
import Home from './components/home.component/home.component';
import About from './components/about.component/about.component';
import Buy from './components/buy.component/buy.component';
import Contact from './components/contact.component/contact.component';
import Footer from './components/footer.component/footer.component';
import 'react-multi-carousel/lib/styles.css';

const App = () => {

  return (
    <div className="App">
      <div className="app-container">
         <Navigation />
          <Home />
          <About />
          <Buy />
          <Contact />
          <Footer />
      </div>
    </div>
  );
}

export default App;
