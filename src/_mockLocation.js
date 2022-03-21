import * as Location from 'expo-location';


const tenMetersWithDegrees = 0.0001;

const getLocation = increment => {
    return {
        timestamp: 1000000,
        coords: {
            speed: 0,
            heading: 0,
            accuracy: 5,
            altitudeAccuracy: 5,
            altitude: 5,
            latitude: 3.12375 + increment*tenMetersWithDegrees,
            longitude: 101.58883 + increment*tenMetersWithDegrees
            
        }
    };
};


let counter = 0;
setInterval(()=>{
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    });
    counter++
}, 1000);