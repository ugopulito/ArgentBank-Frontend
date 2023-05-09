import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from './_utils/Layout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/user' element={<Profile/>}/>
            <Route path='/sign-in' element={<SignIn/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
