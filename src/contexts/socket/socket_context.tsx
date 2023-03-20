import { createContext, ReactNode, useEffect, useState } from 'react';
import io, { Socket } from 'socket.io-client';

interface SocketContextProps {
    socket: Socket | null;
    initializeSocket:(() => void);
    closeSocket:(()=>void);
}

export const SocketContext = createContext<SocketContextProps>({
    socket: null,
    initializeSocket:()=>{},
    closeSocket:()=>{}
});

interface SocketProviderProps { children: ReactNode }

const SocketProvider = ({ children }: SocketProviderProps) => {

    const [socket,setSocket] = useState<Socket | null>(null);

    useEffect(() => {
        return () => {
            socket?.disconnect();
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);


    const getNewSocket = ():Socket | null => {
        const uri = process.env.REACT_APP_SERVER_URL as string
        let token = localStorage.getItem('jwt');

        const newSocket = io(uri, {
            autoConnect:true,
            query: {
                token: token,
            },
        });
        return newSocket
    }

    const initializeSocket = () => {
        setSocket(getNewSocket());  
        socket?.connect();
    }

    const closeSocket = ()=> {
        socket?.disconnect();
        setSocket(null)
    }

    return (
        <SocketContext.Provider value={{ socket , initializeSocket,closeSocket }}>
            {children}
        </SocketContext.Provider>
    );
};

export default SocketProvider;
