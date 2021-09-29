import ellipsis from '../images/icon-ellipsis.svg'

const Duration = ({ timeDuration }) =>{
    return(
    <div>
        <div className="activity">
            <h3>{timeDuration.title}</h3>
            <img src={ellipsis} alt="ellipsis" />
        </div>
    </div>
    );
};
export default Duration;