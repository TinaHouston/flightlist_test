import React from 'react';

const FlightDetail = ({flight}) => {
    if(!flight){
        return(null)
    }

    return (
        <div>
            <h2>{flight.states.callsign}</h2>
            <p>{flight.states.origin_country}</p>
        </div>
    )
}

export default FlightDetail;