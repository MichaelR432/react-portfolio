import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';
// import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navigation/>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='#Main'></Route>
        <Route path='#about'></Route>
        <Route path='#work'></Route>
        <Route path='#contact'></Route>
      </Routes>
    </Router>
  );
}

export default App;
