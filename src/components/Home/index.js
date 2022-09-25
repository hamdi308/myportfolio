import { useState,useEffect } from "react";
import { Link } from "react-router-dom"
import AnimatedLetters from "../AnimatedLettres";
import Logo from './Logo'
import './index.scss';
const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [' ', 'H', 'A', 'M', 'D', 'I', ' ', 'H', 'A', 'D', 'D', 'A'] 
  const jobArray = ['f', 'u', 'l', 'l', ' ', 's', 't', 'a', 'c', 'k', ' ', 'w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']
useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

    return (
        <div className="conatainer home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m </span>
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                <hr />
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={27} />
                </h1>
                            <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo/>
        </div>
    )
}
export default Home