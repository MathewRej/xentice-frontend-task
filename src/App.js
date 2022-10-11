import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import Content from './components/Content';
import Test from './components/Test'
import ContentDetails from './components/ContentDetails/ContentDetails';
import Login from './components/Login/Login';

const App = () => {
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element ={<Home/>}/>
      <Route path='/content' element ={<Content/>}/>
      <Route path='/test' element ={<Test/>}/>
      <Route path='/a' element ={<ContentDetails/>}/>
      
      <Route path='/login' element ={<Login/>}/>
      <Route path='/contentDetails/:contentName' element ={<ContentDetails/>}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App;
