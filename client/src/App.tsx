
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup'
import GameDetail from './components/GameDetail';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />
          <Route path='/game/:gameId' element={<GameDetail/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
