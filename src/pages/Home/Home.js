import React from 'react';
import AboutMe from '../../components/AboutMe/AboutMe';
import Main from '../../components/Main/Main';
import MyWork from '../../components/MyWork/MyWork';
import Contact from '../../components/Contact/Contact';

const Home = () => {

    return(
        <>
        <Main/>
        <br/>
        <AboutMe/>
        <br/>
        <MyWork/>
        <br/>
        <Contact/>
        </>
    )
}

export default Home;