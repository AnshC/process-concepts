import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/home'
import Footer from './components/footer';
import Navigation from './components/navigation';
import About from './components/about';
import Gallery from './components/gallery';

function App() {
  return (
    <Router>
      <div className="App">
          <Navigation />
          <Switch>
            <Route component={Home} path="/" exact />
            <Route component={About} path="/about" />
            <Route component={Gallery} path="/gallery/:work" />
            <Route component={Gallery} path="/gallery" />
          </Switch>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
