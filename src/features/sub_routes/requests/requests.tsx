import React from 'react'
import MyButton from '../../core/custom/my_button'
import MyTextField from '../../core/custom/my_textfield'
import { UserData } from '../dashboard/models'

const Requests = () => {

  const data: UserData = {
    requests: [
      { title: "title1", date: Date() },
      { title: "title2", date: Date() },
      { title: "title3", date: Date() },
      { title: "title1", date: Date() },
      { title: "title2", date: Date() },
      { title: "title1", date: Date() },
      { title: "title2", date: Date() },
      { title: "title1", date: Date() },
      { title: "title2", date: Date() },
    ],
    completedRequests: [
      { title: "", date: Date() },
    ]
  }

  return (
    <div className='flex flex-col gap-7'>
      <form className='flex flex-col md:flex-row gap-10'>
        <div className='columns-1 sm:columns-2 md:columns-3 lg:columns-4 items-center'>
          <MyTextField placeholder='الاسم' />
          <MyTextField placeholder='التاريخ' type='date' />
          
        </div>

        <MyButton title='اضافة' type='submit' />
      </form>
      <div>
        <table className="table-auto text-left text-sm font-light shadow-lg rounded-sm">
          <thead className="border-b font-medium dark:border-neutral-500">
            <tr>
              <th className="px-6 py-4">العنوان</th>
              <th className="px-6 py-4">التاريخ</th>
              <th className="px-6 py-4">تعديل</th>
            </tr>
          </thead>
          <tbody>
            {data.requests.map((req) => {
              return <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-200">
                <td className="px-6 py-4 font-medium">{req.title}</td>
                <td className="px-6 py-4 font-medium">{req.date}</td>
                <td className="px-6 py-4 font-medium">
                  <MyButton title='حذف'/>
                </td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </div>

  )
}

export default Requests