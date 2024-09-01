import { useEffect, useState } from "react";

const useOnlineStatus =()=>{
    const [online,SetOnline]=useState(true);
    useEffect(()=>{
        window.addEventListener("online",()=>{
            SetOnline(true)
        })
        window.addEventListener("offline", () => {
          SetOnline(false);
        });
    },[])
    return online;
}

export default useOnlineStatus;