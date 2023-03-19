import { useContext, useEffect } from "react";
import { MdHome, MdNotifications, MdRequestPage } from "react-icons/md";
import { useDispatch } from "react-redux";
import { RequestsActions } from "../../redux/slices/requests";
import { TabModel } from "./components/sidebar";
import { ConstructionRequest } from "../core/models/constructionRequestion";
import { useNavigate } from "react-router";
import { SocketContext } from "../../contexts/socket/socket_context";

const useHomeController = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const tabs: TabModel[] = [
        { title: "الرئيسية", icon: MdHome, index: 0, route: '/' },
        { title: "الطلبات", icon: MdRequestPage, index: 1, route: 'requests' },
        { title: "الاشعارات", icon: MdNotifications, index: 2, route: 'notifications' },
    ]

    const { socket , initializeSocket,closeSocket } = useContext(SocketContext);

    useEffect(() => {

        const token = localStorage.getItem('jwt');

        console.log('is socket connected ',socket?.connected);

        if (!token){
            if (socket){
                closeSocket();
            }
            navigate('/login');
            return   
        }

        if (!socket && token){
            initializeSocket();
        }

        socket?.on('connection',()=>{
            console.log('is connected');
        })

        socket?.on('connect_error', (error) => {
            if (error.message === "Authentication error"){
                closeSocket();
                navigate('/login');
            }else{
                console.error('Connection error:', error);
            }
        });

        socket?.on('error', (error) => {
            console.error('Socket error:', error);
        });
        socket?.on('requestsFetched', ((requests: ConstructionRequest[]) => {
            dispatch(RequestsActions.loadRequests(requests));
        }));

        socket?.on('requestAdded', ((request: any) => {
            console.log("request added called with ",request)
            dispatch(RequestsActions.addRequest(request));
        }));

        socket?.on('requestDeleted',(id:string)=>{
            dispatch(RequestsActions.removeRequest(id));
        })

        socket?.on('requestUpdated',(newRequest)=>{
            dispatch(RequestsActions.updateRequest(newRequest));
        })
    })

    return {
        tabs
    }
}

export default useHomeController;