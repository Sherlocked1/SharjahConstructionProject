import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import socket from "../../../../hooks/socket";
import { RootState } from "../../../../redux/store";
import { ConstructionRequest } from "../../../core/models/constructionRequestion";

const useUserReqeustsController = () => {
    
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const requests: ConstructionRequest[] = useSelector<RootState, ConstructionRequest[]>((state) => state.requests.constructionRequests);

    const navigate = useNavigate();

    const deleteRequestWithID = (id: string) => {
        setIsLoading(true);
        socket.emit('deleteRequest', id, onDeletedHandler);
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

        socket.emit('updateRequest', newRequest, completedCallBack)
    }

    const completedCallBack = () => {
        setIsLoading(false)
    }

    return {
        isLoading,
        requests,
        editRequest,
        deleteRequestWithID,
        setAsCompleted,
        
    }
}
export default useUserReqeustsController;