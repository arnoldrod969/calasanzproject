import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './assets/components/Header.js'
import Footer from './assets/components/Footer'
import HomeScreen from './assets/Screens/HomeScreen';
import About from './assets/Screens/About';
import NewsContent from './assets/Screens/NewsContent';
import News from "./assets/components/News";
// import Work from './assets/components/Work'
// import Bibliotheque from "./assets/Screens/Bibliotheque";
import {Stat1} from "./assets/Screens/Stat1";
import {Stat2} from "./assets/Screens/Stat2";
import Biblio from "./assets/Screens/Biblio";


class App extends Component {


  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route path="/details/:id" component={NewsContent}/>
          <Route path="/" exact={true} component={HomeScreen} />
          <Route path="/about" component={About}/>
          {/*<Route path="/work" component={Work}/>*/}
          <Route path="/bibliotheque" component={Biblio} />
          <Route path="/target_4.1" component={Stat1} />
          <Route path="/target_4.2" component={Stat2}/>
          <Route path="/news" component={News}/>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App
