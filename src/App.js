import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import NavHeadLogo from './Components/HeaderNavbar/NavHeadLogo';

function App() {
  return (
    <div className="App">
     <NavHeadLogo/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
     </Routes>

    </div>
  );
}

export default App;
