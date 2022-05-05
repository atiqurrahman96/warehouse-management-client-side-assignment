import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import Header from './Pages/Header/Header';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import UpdateItems from './Pages/UpdateItems/UpdateItems';
import NotFound from './Pages/NotFound/NotFound';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ManageInventories from './Pages/ManageInventories/ManageInventories';
import UpdateItem from './Pages/UpdateItem/UpdateItem';


function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>

        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/inventory/:id' element={<RequireAuth>
          <UpdateItems />
        </RequireAuth>}></Route>
        <Route path='/update' element={
          <RequireAuth>
            <UpdateItem></UpdateItem>
          </RequireAuth>
        }></Route>
        <Route path='/manageInventories' element={<ManageInventories />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signUp' element={<SignUp />}></Route>




        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
