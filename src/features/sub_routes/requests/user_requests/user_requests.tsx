import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import socket from '../../../../hooks/socket'
import { RootState } from '../../../../redux/store'
import LoadingIndicator from '../../../core/custom/loading_indicator'
import MyButton from '../../../core/custom/my_button'
import { ConstructionRequest } from '../../../core/models/constructionRequestion'

const UserRequests = () => {

    const [isLoading,setIsLoading] = useState<boolean>(false);
    const requests: ConstructionRequest[] = useSelector<RootState, ConstructionRequest[]>((state) => state.requests.constructionRequests);

    const navigate = useNavigate();

    const deleteRequestWithID = (id:string) =>{
        setIsLoading(true);
        socket.emit('deleteRequest',id,onDeletedHandler);
    }

    const editRequest = (request:ConstructionRequest) => {
        navigate(`/update/${request._id}`)
    }

    const onDeletedHandler = () => {
        setIsLoading(false);
    }

    const setAsCompleted = (request:ConstructionRequest) => {
        setIsLoading(true);
        var newRequest = {...request}
        newRequest.status = 'Completed';

        socket.emit('updateRequest',newRequest,completedCallBack)
    }

    const completedCallBack = () => {
        setIsLoading(false)
    }

    return (
        <div className='flex flex-col gap-7'>
            {isLoading && <LoadingIndicator/>}
            <div className='flex flex-row gap-3'>
                <Link to='/new' className='max-w-fit' ><MyButton title='اضافة طلب جديد' color='#3B82F6' /></Link>
            </div>
            <div>
                <table className="table-auto text-left text-sm font-light shadow-lg rounded-sm">
                    <thead className="border-b font-medium dark:border-neutral-500">
                        <tr>
                            <th className="px-6 py-4">الاسم</th>
                            <th className="px-6 py-4">الوصف</th>
                            <th className="px-6 py-4">الحالة</th>
                            <th className="px-6 py-4">العنوان</th>
                            <th className="px-6 py-4"></th>
                            <th className="px-6 py-4"></th>
                            <th className="px-6 py-4"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests.map((req) => {
                            return <tr key={req._id} className="border-b transition duration-300 ease-in-out hover:bg-neutral-200">
                                <td className="px-6 py-4 font-medium">{req.title}</td>
                                <td className="px-6 py-4 font-medium">{req.description}</td>
                                <td className="px-6 py-4 font-medium">{req.status}</td>
                                <td className="px-6 py-4 font-medium">{req.location}</td>
                                {
                                    (req.status === 'Completed') ? <p></p> :
                                    <td className="px-6 py-4 font-medium">
                                        <MyButton color='green' title='استكمال' onClick={()=>setAsCompleted(req)} />
                                    </td>
                                }
                                <td className="px-6 py-4 font-medium">
                                    <MyButton color='blue' title='تعديل' onClick={()=>editRequest(req)} />
                                </td>
                                <td className="px-6 py-4 font-medium">
                                    <MyButton color='red' title='حذف' onClick={()=>deleteRequestWithID(req._id!)} />
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default UserRequests