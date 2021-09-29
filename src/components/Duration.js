import ellipsis from '../images/icon-ellipsis.svg'

const Duration = ({ timeDuration }) =>{
    console.log(timeDuration.timeframes)
    return(
    <div className="card">
        <div className="activity-header">
            <h3>{timeDuration.title}</h3>
            <img src={ellipsis} alt="ellipsis" />
        </div>
        <div className="activity-body">
            <p className="current">{timeDuration.timeframes.weekly.current}hrs</p>
            <p className="previous">Last Week{timeDuration.timeframes.weekly.previous}hrs</p>
        </div>
    </div>
    );
};
export default Duration;