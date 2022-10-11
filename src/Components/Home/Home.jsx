import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo_n.png';
// import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
// import Logo from '../Logo/Logo';
import './Home.scss';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    const nameArray = ['a', 'z','m', 'u', 's']
    const jobArray = ['W','e','b',' ','D','e','v','e','l','o','p','e','r','.']
    
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000)
    }, []);
    
    return (
        <>
            <div className='container home-page'>
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _10`}>i</span>
                        <span className={`${letterClass} _11`}>,</span>
                        <br />
                        <span className={`${letterClass} _12`}>I</span>
                        <span className={`${letterClass} _13`}>'</span>
                        <span className={`${letterClass} _14`}>m</span>
                        <img src={LogoTitle} alt="Developer" />
                        {/* <AnimatedLetters
                            letterClass={letterClass}
                            strArray={nameArray}
                            idx={15}
                        />
                        <br />
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={jobArray}
                            idx={22}
                        /> */}
                    </h1>
                    <h2>
                        Frontend Developer / Javascript Developer / React Developer
                    </h2>
                    <Link to="/contact" className="flat-button">CONTACT ME</Link>
                </div>
                {/* <Logo></Logo> */}
            </div>
            <Loader type="pacman" />
        </>
        
    );
};

export default Home;