import ellipsis from '../images/icon-ellipsis.svg';
import exercise from '../images/icon-exercise.svg';
import play from '../images/icon-play.svg';
import selfcare from '../images/icon-self-care.svg';
import social from '../images/icon-social.svg';
import study from '../images/icon-study.svg';
import work from '../images/icon-work.svg';

const Duration = ({ timeDuration }) =>{
    

    return(
        <div className="wrapper">
            <div className="card-body">
                <div className="activity-header">
                    <h3>{timeDuration.title}</h3>
                    <img src={ellipsis} alt="ellipsis" />
                </div>
                <div className="activity-body">
                    <p className="current">{timeDuration.timeframes.weekly.current}hrs</p>
                    <p className="previous">Last Week - {timeDuration.timeframes.weekly.previous}hrs</p>
                </div>
            </div>
        </div>
    );
};
export default Duration;