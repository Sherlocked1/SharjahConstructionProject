import { useContext } from 'react';
import { DialogContext } from '../../../contexts/dialog/dialog_context';
import MyButton from './my_button';

interface MyDialogProps {
  onOkClicked?: (() => void)
}

const MyDialog = (props: MyDialogProps) => {

  const { closeDialog, title, body } = useContext(DialogContext);


  return (
    <>
      <div className='absolute flex inset-0 backdrop-blur-lg bg-white opacity-80 z-20 text-center justify-center items-center' />
      <div className='absolute flex inset-0 z-30 justify-center items-center'>
        <div className='flex flex-col gap-8 justify-start relative shadow-md bg-white w-3/4 sm:w-1/4 p-6 rounded-md'>
          <p className='font-bold text-2xl'>{title}</p>
          {body}
          <MyButton color='green' title='حسنا' onClick={() => {
            if (props.onOkClicked)
              props.onOkClicked();
            closeDialog();
          }} />
        </div>
      </div>
    </>
  );
};

export default MyDialog;