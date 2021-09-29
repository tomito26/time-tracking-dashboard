import Duration from "./Duration";

const Durations = ({ time }) =>{
    return(
    <div className="cards">
        {time.map(timeDuration => <Duration timeDuration={timeDuration}/>)}
    </div>
    );
};

export default Durations