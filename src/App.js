import './App.css';
import Hero from '../src/components/Hero'
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyle } from './globlaStyles';

function App() {
  return (
    
    <Router>
      <GlobalStyle/>
      <Hero/>
    </Router>
  );
}

export default App;
