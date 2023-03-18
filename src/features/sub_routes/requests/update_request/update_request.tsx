import DropdownComponent from './components/dropdown';
import LoadingIndicator from '../../../core/custom/loading_indicator';
import MyButton from '../../../core/custom/my_button';
import MyTextField from '../../../core/custom/my_textfield'
import useUpdateRequestsController from './controller';


const UpdateRequest = () => {

  const {isLoading,onUpdate,setTitle,setDescription,setLocation,onDropDownChange,title,description,location,statusValues,status} = useUpdateRequestsController();

  return (
    <div className='flex w-full h-full items-center justify-center'>
      {isLoading && <LoadingIndicator />}
      <form datatest-id="update-form" className="mt-6 shadow-md p-10 bg-white rounded-sm" onSubmit={onUpdate}>
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