import Duration from "./Duration";

const Durations = ({ time }) =>{
    return(
    <div className="cards">
        {time.map((timeDuration,index)=> <Duration key={index} timeDuration={timeDuration}/>)}
    </div>
    );
};

export default Durations