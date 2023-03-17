import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import socket from '../../../../hooks/socket';
import { RootState } from '../../../../redux/store';
import DropdownComponent from '../../../core/custom/dropdown';
import LoadingIndicator from '../../../core/custom/loading_indicator';
import MyButton from '../../../core/custom/my_button';
import MyTextField from '../../../core/custom/my_textfield'
import { ConstructionRequest, statusType } from '../../../core/models/constructionRequestion';


const UpdateRequest = () => {

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

  return (
    <div className='flex w-full h-full items-center justify-center'>
      {isLoading && <LoadingIndicator />}
      <form className="mt-6 shadow-md p-10 bg-white rounded-sm" onSubmit={onUpdate}>
        <div className="mb-2">
          <label className="block text-sm font-semibold text-gray-800">الاسم</label>
          <MyTextField value={title} placeholder="" type='text' onchange={setTitle} />
        </div>
        <div className="mb-2">
          <label className="block text-sm font-semibold text-gray-800">وصف</label>
          <MyTextField value={description} placeholder="" type='text' onchange={setDescription} />
        </div>
        <div className="mb-2">
          <label className="block text-sm font-semibold text-gray-800">العنوان</label>
          <MyTextField value={location} placeholder="" type='text' onchange={setLocation} />
        </div>
        <div className="mb-2">
          <label className="block text-sm font-semibold text-gray-800">الحالة</label>
          <DropdownComponent value={status} values={statusValues} onChange={onDropDownChange}/>
        </div>
        <div className="mt-6">
          <MyButton title="تعديل" type="submit" />
        </div>
      </form>
    </div>
  )
}

export default UpdateRequest