import { Link } from 'react-router-dom'
import LoadingIndicator from '../../../core/custom/loading_indicator'
import MyButton from '../../../core/custom/my_button'
import RequestTableRow from './components/table_row'
import useUserReqeustsController from './controller'

const UserRequests = () => {

    const {isLoading,editRequest,deleteRequest,setAsCompleted,requests} = useUserReqeustsController();

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
                        return <RequestTableRow request={req} completeClicked={setAsCompleted} editClicked={editRequest} deleteClicked={deleteRequest}/>
                    })}
                </tbody>
            </table>
        </div>

    )
}

export default UserRequests