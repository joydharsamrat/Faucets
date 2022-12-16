import React from 'react';
import Footer from './Footer/Footer';
import Main from './Main/Main';
import NavBar from './NavBar/NavBar';

const Home = ({ setModalShow }) => {
    return (
        <div className='home'>
            <NavBar setModalShow={setModalShow}></NavBar>
            <Main></Main>
            <Footer></Footer>
        </div>
    );
};

export default Home;