import { useEffect } from "react";
import { MdHome, MdNotifications, MdRequestPage } from "react-icons/md";
import { useDispatch } from "react-redux";
import socket from "../../hooks/socket";
import { RequestsActions } from "../../redux/slices/requests";
import { TabModel } from "./components/sidebar";
import { ConstructionRequest } from "../core/models/constructionRequestion";

const useHomeController = () => {
    const dispatch = useDispatch();

    const tabs: TabModel[] = [
        { title: "الرئيسية", icon: MdHome, index: 0, route: '/' },
        { title: "الطلبات", icon: MdRequestPage, index: 1, route: 'requests' },
        { title: "الاشعارات", icon: MdNotifications, index: 2, route: 'notifications' },
    ]

    useEffect(() => {
        socket.on('requestsFetched', ((requests: ConstructionRequest[]) => {
            dispatch(RequestsActions.loadRequests(requests));
        }));

        socket.on('requestAdded', ((request: any) => {
            console.log("request added called with ",request)
            dispatch(RequestsActions.addRequest(request));
        }));

        socket.on('requestDeleted',(id:string)=>{
            dispatch(RequestsActions.removeRequest(id));
        })

        socket.on('requestUpdated',(newRequest)=>{
            dispatch(RequestsActions.updateRequest(newRequest));
        })
    })

    return {
        tabs
    }
}

export default useHomeController;