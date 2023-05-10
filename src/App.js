import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from './_utils/Layout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import Error from './pages/Error';
import AuthProvider from './_utils/AuthProvider';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/sign-in' element={<SignIn/>}/>
              <Route path='/user' element={
                <AuthProvider>
                  <Profile/>
                </AuthProvider>
              }/>
            <Route path='/*' element={<Error/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
