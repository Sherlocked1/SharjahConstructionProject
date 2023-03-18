import ErrorLabel from '../../../core/custom/error_label';
import MyButton from '../../../core/custom/my_button';
import MyTextField from '../../../core/custom/my_textfield'
import useNewRequestController from './controller';

const NewRequest = () => {

  const {title,description,location,addClicked,setTitle,setDescription,setLocation,errors} = useNewRequestController();

  return (
    <div className='flex w-full h-full items-center justify-center'>
      <form className="mt-6 shadow-md p-10 bg-white rounded-sm" onSubmit={addClicked}>
        <div className="mb-2">
          <label className="block text-sm font-semibold text-gray-800">الاسم</label>
          <MyTextField value={title} placeholder="" type='text' onchange={setTitle} />
          <ErrorLabel text={errors.title ?? ""}/>
        </div>
        <div className="mb-2">
          <label className="block text-sm font-semibold text-gray-800">وصف</label>
          <MyTextField value={description} placeholder="" type='text' onchange={setDescription} />
          <ErrorLabel text={errors.description ?? ""}/>
        </div>
        <div className="mb-2">
          <label className="block text-sm font-semibold text-gray-800">العنوان</label>
          <MyTextField value={location} placeholder="" type='text' onchange={setLocation} />
          <ErrorLabel text={errors.location ?? ""}/>
        </div>
        <div className="mt-6">
          <MyButton title="اضافة" type="submit" />
        </div>
      </form>
    </div>
  )
}

export default NewRequest