import { useEffect,useRef } from "react";
import { io,ManagerOptions,SocketOptions,Socket } from "socket.io-client";

export const useSocket = (opts?:Partial<ManagerOptions & SocketOptions> | undefined):Socket => {
    const uri = process.env.REACT_APP_SERVER_URL as string

    const {current:socket} = useRef(io(uri,opts))

    useEffect(()=>{
        return ()=>{
            if(socket) socket.close(); 
        }
    },[socket])

    return socket;

}