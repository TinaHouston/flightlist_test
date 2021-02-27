import React from 'react';

const FlightList = ({flights, onFlightClick}) => {

    console.log("flights", flights);

    // const states = flights.states.map((states) => {
    //     return states
    // })

    const setFlightNames = flights.states.map((flight) => {
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
export default FlightList;