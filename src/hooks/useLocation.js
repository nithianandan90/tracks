import {useState, useEffect} from 'react';
import { Accuracy, requestForegroundPermissionsAsync, watchPositionAsync } from 'expo-location';

export default (isFocused,callback) => {
    
  console.log('reached 1');
    const [err, setErr] = useState(null);
    const [subscriber, setSubscriber] = useState(null);
    const startWatching = async () => {
        try {
          const { granted } = await requestForegroundPermissionsAsync();
          
          if (!granted) {
            throw new Error('Location permission not granted');
          }

         const sub =  await watchPositionAsync({
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10
          }, callback );
          setSubscriber(sub);
       } catch (e) {
        console.log('error');  
        setErr(e);
        }
      };


  


      useEffect(()=>{
        
        if(isFocused){
        startWatching();}else{
          
         subscriber.remove();
         
          setSubscriber(null);
        }
      }, [isFocused]);

      

      return [err];

};