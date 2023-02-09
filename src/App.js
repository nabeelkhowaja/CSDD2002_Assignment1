import {Router, Route, Routes} from 'react-router-dom';
import C1297 from './components/C1297';
import C2297 from './components/C2297';
import Home from './components/Home';
import Navigationbar from './components/Navigationbar';

function App() {
  return (
    <div className="App">
            <Navigationbar />
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route path='/C1297' element={<C1297/>}/>
                <Route path='/C2297' element={<C2297/>}/>
            </Routes>
    </div>
  );
}

export default App;
