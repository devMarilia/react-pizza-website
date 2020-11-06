import './App.css';
import Navbar from '../src/components/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyle } from './globlaStyles';

function App() {
  return (
    
    <Router>
      <GlobalStyle/>
      <Navbar/>
    </Router>
  );
}

export default App;
