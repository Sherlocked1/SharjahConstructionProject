import { IconType } from 'react-icons';
import {MdHome,MdRequestPage,MdInbox,MdLogout} from 'react-icons/md';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import Dashboard from '../sub_routes/dashboard/dashboard';
import Inbox from '../sub_routes/inbox/inbox';
import Requests from '../sub_routes/requests/requests';

type SideBarProps = {
    currentTab : number,
    setCurrentTab : (tab:number)=>void
}

type tab = {
    index : number,
    title : string,
    icon  : IconType,
    route : string
}

export default function Sidebar(props:SideBarProps) {

    const tabs : tab[] = [
        {title:"الرئيسية",icon:MdHome,index:0,route:'dashboard'},
        {title:"الطلبات",icon:MdRequestPage,index:1,route:'requests'},
        {title:"بريد الوارد",icon:MdInbox,index:2,route:'inbox'},
        {title:"تسجيل الخروج",icon:MdLogout,index:3,route:'signout'},
    ]

    return (
        <div className="flex">
            <div className="flex flex-col h-screen p-3 bg-white shadow w-60">
                <div className="space-y-3">
                    <div className="flex items-center">
                        <h2 className="text-xl font-bold">حكومة الشارقة</h2>
                    </div>
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            {tabs.map((tab,index) => {

                            // Tab item

                            return <li key={tab.index} onClick={()=>{props.setCurrentTab(index)}} className={`rounded-md ${props.currentTab === index ? "bg-blue-500" : "" }`}>
                                        <Link
                                            to={tab.route}
                                            className="flex items-center p-2 space-x-3 rounded-md"
                                        >
                                            {<tab.icon size={30} color={props.currentTab === index ? 'white' : 'black'}/>}
                                            <span className={`${props.currentTab === index ? 'text-white' : 'text-black'}`}>{tab.title}</span>
                                        </Link>
                                    </li>

                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <div className='p-4 flex-1'>
                <Routes>
                    <Route path='/*' element={<Dashboard/>}/>
                    <Route path='/inbox' element={<Inbox/>}/>
                    <Route path='/requests' element={<Requests/>}/>
                    {/* <Route path='/dashboard' element={<Dashboard/>}/> */}
                </Routes>
            </div>
        </div>
    );
}