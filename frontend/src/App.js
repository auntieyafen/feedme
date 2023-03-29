// import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './HomePage/HomePage';
import MyFridge from './MyFridge/myfridge';
import Recipe from './Recipe/recipe';
import LoginPage from './Login/LoginPage';
import Detail from "./Recipe/detail";
import Header from "./Header/Header";
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

function App() {
  return (
    <Wrapper>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={ <HomePage/> } />
          <Route path='/myfridge' element={ <MyFridge/> } />
          <Route path='/recipe' element={ <Recipe/> } />
          <Route path='/login' element={ <LoginPage/> } />
          <Route path="/modal" element={ <Detail/> }/>
        </Routes>
      </Router>
    </ Wrapper>
  );
}

export default App;
