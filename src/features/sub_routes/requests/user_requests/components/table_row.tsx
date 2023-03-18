import MyButton from '../../../../core/custom/my_button'
import { ConstructionRequest } from '../../../../core/models/constructionRequestion'

type requestCallBack = ((request: ConstructionRequest) => void)

interface RequestTableRowProps {
    request: ConstructionRequest,
    completeClicked?: requestCallBack,
    editClicked?: requestCallBack,
    deleteClicked?: requestCallBack,
}
const RequestTableRow = (props: RequestTableRowProps) => {
    return (
        <tr key={props.request._id} className="border-b transition duration-300 ease-in-out hover:bg-neutral-200">
            <td className="px-6 py-4 font-medium">{props.request.title}</td>
            <td className="px-6 py-4 font-medium">{props.request.status}</td>
            <td>
                <div className='flex flex-col sm:flex-row justify-start gap-2'>
                    {
                        <MyButton testId="complete-button" disabled={props.request.status === 'Completed'}
                            color={props.request.status === 'Completed' ? "gray" : "green"} title='استكمال' onClick={() => props.completeClicked && props.completeClicked(props.request)} />
                    }
                    <MyButton color='blue' title='تعديل' onClick={() => props.editClicked && props.editClicked(props.request)} />
                    <MyButton color='red' title='حذف' onClick={() => props.deleteClicked && props.deleteClicked(props.request)} />
                </div>
            </td>
        </tr>
    )
}

export default RequestTableRow