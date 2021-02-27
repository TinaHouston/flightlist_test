import React from 'react';

const FlightList = ({flights, onFlightClick}) => {

    console.log("flights", flights);

    // const states = flights.states.map((states) => {
    //     return states
    // })

    if (flights.states)
    {
        const found = [...flights.states];

        console.log("is there any state:", flights.states);
        const setFlightNames = found.map((flight) => {
            return <li onClick={() => {onFlightClick(flight)}}>{flight.states.callsign}</li>
        })

        return (
            <>
            <ul>
                {setFlightNames}
            </ul>
            </>
        )
    }
    else
    {
        return (<h1>loading...</h1>)
    }
}
export default FlightList;