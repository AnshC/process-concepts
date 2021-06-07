import {useEffect, useState} from 'react';
import {data} from '../../data/promo.json'

export default function Promo(){
    const [display, setDisplay] = useState("");
    useEffect(()=>{
        setDisplay(data.display)
    }, [])
    if(display === "n/a"){
        return(
            null
        )
    } else {
        return(
            <div className="promo">
                <h1 className="head">Coming Soon!</h1>
                <h1 className="data-head">{data.head}</h1>
                <h2 className="data-description">{data.description}</h2>
                <h2 className="date">Date: <span className="data-date">{data.date}</span></h2>
                <h2 className="venue">Venue: <span className="data-venue">{data.venue}</span></h2>
            </div>
        )
    }
}