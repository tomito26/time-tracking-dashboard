import profile from '../images/image-jeremy.png';

const Header = () =>{
    return(
    <header>
        <img src={profile} alt="jeremy profile" />
        <div className="header-title">
            <p>Report for</p>
            <h2>Jeremy Robson</h2>
        </div>
    </header>
    );
};

export default Header