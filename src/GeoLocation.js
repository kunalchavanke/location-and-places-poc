import React from "react";
import Geolocation from "react-geolocation";

export default () => {
    return (
        <Geolocation
            lazy
            onSuccess={console.log}
            render={({
                position: { coords: { latitude, longitude } = {} } = {},
                error,
                getCurrentPosition
            }) => (<div>
                <button onClick={getCurrentPosition}>Get Position</button>
                {error && <div>{error.message}</div>}
                <div>latitude: {latitude} </div>
                <div>longitude: {longitude}</div>
            </div>)}
        />
    );
};
