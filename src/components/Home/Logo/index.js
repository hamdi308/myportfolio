import './index.scss';
import Imgme from '../../../assets/images/me.jpg';
import { useRef } from 'react';
const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()
    return (
        <div className='myImage-container' ref={bgRef}>
            <img ref={solidLogoRef} src={Imgme} alt="myImg" className='solid-img' />
            <div className='summary'>
                <div className='subtitle'>Full Stack Software Developer and cloud Engineer </div>
                <hr/>
                <p className='content'>skilled engineers rigorously trained in web, app, and software development;
                    both front-end, back-end, and development operations.
                    also Develop, deploy, and manage cloud-based applications.
                    Hire freelance cloud developers to analyze customer needs, design solutions, and debug systems.</p>
        </div>
        </div>
    )
}


export default Logo;