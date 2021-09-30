import profile from '../images/image-jeremy.png';
import { Link } from 'react-router-dom';

const Header = () =>{
    return(
    <header>
        <div className="profile">
            <img src={profile} alt="jeremy profile" />
            <p>Report for</p>
            <h2>Jeremy Robson</h2>
        </div>
        <ul className="nav">
            <li><Link to="/">Daily</Link></li>
            <li><Link to="/weekly">Weekly</Link></li>
            <li><Link to="/monthly">Monthly</Link></li>
        </ul>
    </header>
    );
};

export default Header