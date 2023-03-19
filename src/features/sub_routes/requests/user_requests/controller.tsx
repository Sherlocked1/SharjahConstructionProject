import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { SocketContext } from "../../../../contexts/socket/socket_context";
import { RootState } from "../../../../redux/store";
import { ConstructionRequest } from "../../../core/models/constructionRequestion";

const useUserReqeustsController = () => {
    
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const requests: ConstructionRequest[] = useSelector<RootState, ConstructionRequest[]>((state) => state.requests.constructionRequests);

    const navigate = useNavigate();
    const {socket} = useContext(SocketContext);
    
    const deleteRequest = (request: ConstructionRequest) => {
        setIsLoading(true);
        socket?.emit('deleteRequest', request._id, onDeletedHandler);
    }

    const editRequest = (request: ConstructionRequest) => {
        navigate(`/update/${request._id}`)
    }

    const onDeletedHandler = () => {
        setIsLoading(false);
    }

    const setAsCompleted = (request: ConstructionRequest) => {
        setIsLoading(true);
        var newRequest = { ...request }
        newRequest.status = 'Completed';

        socket?.emit('updateRequest', newRequest, completedCallBack)
    }

    const completedCallBack = () => {
        setIsLoading(false)
    }

    return {
        isLoading,
        requests,
        editRequest,
        deleteRequest,
        setAsCompleted,
        
    }
}
export default useUserReqeustsController;