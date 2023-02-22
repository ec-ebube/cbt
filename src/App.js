import './App.css';
import Header from './components/Header';
import Welcome from './components/Welcome';
import {Routes, Route} from 'react-router-dom'
import Quiz from './components/Quiz';
import Instructions from './components/Instructions';
import Register from './components/Register';
// import { Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
     <Header />
     <Routes>
      <Route path='/' element={<Welcome />} />
      <Route path='/register' element={<Register />} />
      <Route path='/quiz' element={<Quiz />} />
      <Route path='/instruction' element={<Instructions />} />

     </Routes>
    </div>
  );
}

export default App;
