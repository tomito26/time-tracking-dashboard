import ellipsis from '../images/icon-ellipsis.svg';


const Duration = ({ timeDuration }) =>{
    

    return(
        <div className="wrapper">
            <div className="card-body">
                <div className="activity-header">
                    <h3>{timeDuration.title}</h3>
                    <img src={ellipsis} alt="ellipsis" />
                </div>
                <div className="activity-body">
                    <p className="current">{timeDuration.timeframes.daily.current}hrs</p>
                    <p className="previous">Last Week - {timeDuration.timeframes.weekly.previous}hrs</p>
                </div>
            </div>
        </div>
    );
};
export default Duration;