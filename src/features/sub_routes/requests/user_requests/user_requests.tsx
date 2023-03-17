import { Link } from 'react-router-dom'
import LoadingIndicator from '../../../core/custom/loading_indicator'
import MyButton from '../../../core/custom/my_button'
import useUserReqeustsController from './controller'

const UserRequests = () => {

    const {isLoading,editRequest,deleteRequestWithID,setAsCompleted,requests} = useUserReqeustsController();

    return (
        <div className='basis-auto'>
            {isLoading && <LoadingIndicator />}
            <div className='flex flex-row gap-3'>
                <Link to='/new' className='max-w-fit' ><MyButton title='اضافة طلب جديد' color='#3B82F6' /></Link>
            </div>
            <table className="table-auto w-3/4 text-left text-sm font-light shadow-lg rounded-sm">
                <thead className="border-b font-medium dark:border-neutral-500">
                    <tr>
                        <th className="px-6 py-4">الاسم</th>
                        <th className="px-6 py-4">الحالة</th>
                        <th className="px-6 py-4"></th>
                    </tr>
                </thead>
                <tbody>
                    {requests.map((req) => {
                        return <tr key={req._id} className="border-b transition duration-300 ease-in-out hover:bg-neutral-200">
                            <td className="px-6 py-4 font-medium">{req.title}</td>
                            <td className="px-6 py-4 font-medium">{req.location}</td>
                            <td>
                                <div className='flex flex-col sm:flex-row justify-start gap-2'>
                                    {
                                        <MyButton disabled={req.status === 'Completed'}
                                            color={req.status === 'Completed' ? "gray" : "green"} title='استكمال' onClick={() => setAsCompleted(req)} />
                                    }
                                    <MyButton color='blue' title='تعديل' onClick={() => editRequest(req)} />
                                    <MyButton color='red' title='حذف' onClick={() => deleteRequestWithID(req._id!)} />
                                </div>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>

    )
}

export default UserRequests