import profile from '../images/image-jeremy.png';

const Header = () =>{
    return(
    <header>
        <div className="profile">
            <img src={profile} alt="jeremy profile" />
            <p>Report for</p>
            <h2>Jeremy Robson</h2>
        </div>
        <ul className="nav">
            <li><a href="#daily">Daily</a></li>
            <li><a href="#weekly">Weekly</a></li>
            <li><a href="#monthly">Monthly</a></li>
        </ul>
    </header>
    );
};

export default Header