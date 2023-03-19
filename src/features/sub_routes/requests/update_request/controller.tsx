import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { SocketContext } from "../../../../contexts/socket/socket_context";
import { RootState } from "../../../../redux/store";
import { ConstructionRequest, statusType } from "../../../core/models/constructionRequestion";
import { FormFields } from "../../../core/models/formFields";

const useUpdateRequestsController = () => {
  const statusValues: statusType[] = ['Processing', 'Completed', 'Pending'];

  const { socket } = useContext(SocketContext);

  const { id } = useParams();
  const requests: ConstructionRequest[] = useSelector<RootState, ConstructionRequest[]>((state) => state.requests.constructionRequests.filter((req) => req._id === id));


  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [title, setTitle] = useState<string>(requests[0].title);
  const [description, setDescription] = useState<string>(requests[0].description);
  const [location, setLocation] = useState<string>(requests[0].location);
  const [status, setStatus] = useState<statusType>(requests[0].status);

  const [errors, setErrors] = useState<Partial<FormFields>>({});

  const navigate = useNavigate();

  const validate = (): Partial<FormFields> => {
    const validationErrors: Partial<FormFields> = {};

    if (!title) {
      validationErrors.title = 'لايمكن ترك الاسم فارغا';
    }

    if (!description) {
      validationErrors.description = 'لايمكن ترك الوصف فارغا';
    }

    if (!location) {
      validationErrors.location = 'لايمكن ترك العنوان فارغا';
    }

    return validationErrors;
  };


  const onUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      setIsLoading(true);
      const request: ConstructionRequest = { title, description, location, status: status, _id: id }
      console.info('updating ', request)
      socket?.emit('updateRequest', request, updateCallBack)
    } else {
      setErrors(validationErrors);
    }
  }

  const updateCallBack = () => {
    setIsLoading(false);
    navigate('/requests');
  }


  const onDropDownChange = (value: string) => {
    console.log('changed status to ', value)
    setStatus(value as statusType);
  }

  return { isLoading, onUpdate, setTitle, setDescription, setLocation, onDropDownChange, title, description, location, statusValues, status, errors }
}

export default useUpdateRequestsController;