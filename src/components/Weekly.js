import ellipsis from '../images/icon-ellipsis.svg';
const Weekly = ({ time }) => {
    
    return(
        <div className="cards">
            {time.map((timeDuration,index) =>
                <div className="wrapper" key={index}>
                  <div className="card-body">
                      <div className="activity-header">
                          <h3>{timeDuration.title}</h3>
                          <img src={ellipsis} alt="ellipsis" />
                      </div>
                      <div className="activity-body">
                          <p className="current" >{timeDuration.timeframes.weekly.current}hrs</p>
                          <p className="previous">Last Week - {timeDuration.timeframes.weekly.previous}hrs</p>
                      </div>
                  </div>
              </div>
            )}
        </div>

    )
}

export default Weekly