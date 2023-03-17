import React, { useEffect, useState } from 'react'
import MyButton from '../../../core/custom/my_button';
import MyTextField from '../../../core/custom/my_textfield'
import { ConstructionRequest } from '../../../core/models/constructionRequestion';
import LoadingIndicator from '../../../core/custom/loading_indicator';
import socket from '../../../../hooks/socket';
import { useNavigate, useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';

const NewRequest = () => {

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  const navigate = useNavigate();

  const isAddedHandler = () => {
    setTitle('')
    setDescription('')
    setLocation('');

    setIsLoading(false);
  }

  const addClicked = () => {
    const request: ConstructionRequest = { title, description, location, status: "Pending" };

    setIsLoading(true);

    socket.emit('addRequest', request,isAddedHandler);
  }


  return (
    <div className='flex w-full h-full items-center justify-center'>
      {isLoading && <LoadingIndicator />}
      <form className="mt-6 shadow-md p-10 bg-white rounded-sm" onSubmit={addClicked}>
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
        <div className="mt-6">
          <MyButton title="تسجيل الدخول" type="submit" />
        </div>
      </form>
    </div>
  )
}

export default NewRequest