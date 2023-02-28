import {useState, useEffect} from 'react';

const useOnline = () => {
    const [isOnline, setIsOnline] = useState(true);
    const handleOnlineEvent = () => {
        setIsOnline(true);
    }
    const handleOfflineEvent = () => {
        setIsOnline(false);
    }

    useEffect(()=>{
        window.addEventListener('online', handleOnlineEvent);
        window.addEventListener('offline', handleOfflineEvent);

        return ()=>{
            window.removeEventListener('online', handleOnlineEvent);
            window.removeEventListener('offline', handleOfflineEvent);
        }

    },[]);

    return isOnline;
}

export default useOnline;