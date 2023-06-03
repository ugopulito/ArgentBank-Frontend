import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from './_utils/Layout';
import Home from './pages/Home';
import User from './pages/User';
import SignIn from './pages/SignIn';
import NotFound from './pages/NotFound';
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
                  <User/>
                </AuthProvider>
              }/>
            <Route path='/*' element={<NotFound/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
