import { Link } from "react-router-dom"
import './index.scss';
const Home = () => {
    return (
        <div className="conatainer home-page">
            <div className="text-zone">
                <h1>Hi,  I'm <h1 className="myname">Hamdi Hadda</h1>
                <hr />
                    Full stack web Developer
                </h1>
                            <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    )
}
export default Home