import React , {PropsWithChildren, useEffect, useReducer, useState} from 'react'
import { useDispatch } from 'react-redux';
import LoadingIndicator from '../../features/core/custom/loading_indicator';
import { ConstructionRequest } from '../../features/core/models/constructionRequestion';
import { useSocket } from '../../hooks/useSocket';
import { RequestsActions } from '../../redux/slices/requests';
import { defaultSocketContextState, SocketContextProvider, SocketReducer } from './context'

export interface ISocketContextComponentProps extends PropsWithChildren {}

const SocketContextComponent : React.FunctionComponent<ISocketContextComponentProps> = (props) => {
    const {children} = props
    const [isLoading,setIsLoading] = useState(true);
    const [SocketState,SocketDispatch] = useReducer(SocketReducer,defaultSocketContextState);


    const socket = useSocket({
        reconnectionAttempts:3,
        reconnectionDelay:5000,
        autoConnect:false
    });

    useEffect(()=>{
        socket.connect();

        SocketDispatch({type:'updateSocket',payload:socket});
        

        startListeners();
    },[])

    const startListeners = () => {
        socket.io.on('open',()=>{
            console.info('open ::: ');
            setIsLoading(false)
        })
        socket.io.on('reconnect',(attempt)=>{
            console.info(`reconnected on attempt ${attempt}`)
            setIsLoading(false)
        })

        socket.io.on('reconnect_attempt',(attempt)=>{
            console.info(`reconnection attempt ${attempt}`)
        })

        socket.io.on('reconnect_error',(error)=>{
            console.info(`reconnection error ${error}`)
        })

        socket.io.on('reconnect_failed',()=>{
            console.info(`reconnection failed`)
        })

        socket.on('requestsFetched',(requests:ConstructionRequest[]) => {

            // dispatch(RequestsActions.loadRequests(requests));
        })
    
        socket.on('requestRemoved',(request:ConstructionRequest)=>{
            // dispatch(RequestsActions.removeRequest(request));
        })
    
        socket.on('requestUpdated',(request)=>{
            // dispatch(RequestsActions.updateRequest(request));
        })
    }

    if (isLoading) return <LoadingIndicator/>

    return (
        <SocketContextProvider value={{SocketState,SocketDispatch}}>
            {children}
        </SocketContextProvider>
    )
}

export default SocketContextComponent