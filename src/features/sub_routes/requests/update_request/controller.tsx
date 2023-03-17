import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import socket from "../../../../hooks/socket";
import { RootState } from "../../../../redux/store";
import { ConstructionRequest, statusType } from "../../../core/models/constructionRequestion";

const useUpdateRequestsController = () => {
    const statusValues:statusType[] = ['Processing','Completed','Pending'];

  const {id} = useParams();  
  const requests: ConstructionRequest[] = useSelector<RootState, ConstructionRequest[]>((state) => state.requests.constructionRequests.filter((req)=>req._id === id));


  const [isLoading,setIsLoading] = useState<boolean>(false);

  const [title, setTitle] = useState<string>(requests[0].title);
  const [description, setDescription] = useState<string>(requests[0].description);
  const [location, setLocation] = useState<string>(requests[0].location);
  const [status,setStatus] = useState<statusType>(requests[0].status);

  const navigate = useNavigate();


  const onUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const request:ConstructionRequest = {title,description,location,status:status,_id:id}
    console.info('updating ',request)
    socket.emit('updateRequest',request,updateCallBack)
  }

  const updateCallBack = () => {
    setIsLoading(false);
    navigate('/requests');
  }


  const onDropDownChange = (value:string) => {
    console.log('changed status to ',value)
    setStatus(value as statusType);
  }

  return {isLoading,onUpdate,setTitle,setDescription,setLocation,onDropDownChange,title,description,location,statusValues,status}
}

export default useUpdateRequestsController;