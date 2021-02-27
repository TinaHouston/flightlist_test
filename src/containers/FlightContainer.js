import React, {useEffect, useState} from 'react';
import FlightList from "../components/FlightList";
import FlightDetail from "../components/FlightDetail";

const FlightContainer = () => {

    const [flights, setFlights] = useState(null);
    const [selectedFlight, setSelectedFlight] = useState(null);

    const getFlights = () => {
        console.log("Fetching API...");
        fetch("https://opensky-network.org/api/states/all?lamin=45.8389&lomin=5.9962&lamax=47.8229&lomax=10.5226")
        .then(res => res.json())
        .then(data => setFlights(data))
    }

    useEffect(() => {
        getFlights()
    }, [])

    const handleFlightClick = (selectedFlight) => {
        setSelectedFlight(selectedFlight)
    }

    if (!flights)
    {
        return(
            <h1>NO FLIGHTS!!!</h1>
        );
    }
    else
    {
        return (
            <>
            <h1>List of Flights</h1>
            <FlightList flights={flights} onFlightClick={() => {handleFlightClick()}} />
            {/* <FlightDetail flight={selectedFlight} /> */}
            </>
        );
    }
}

export default FlightContainer;