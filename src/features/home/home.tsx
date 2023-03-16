import { useState } from 'react';
import { IconType } from 'react-icons';
import { MdHome, MdRequestPage, MdInbox, MdLogout } from 'react-icons/md';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';
import Dashboard from '../sub_routes/dashboard/dashboard';
import Inbox from '../sub_routes/inbox/inbox';
import Requests from '../sub_routes/requests/requests';

type SideBarProps = {
}

type tab = {
    index: number,
    title: string,
    icon: IconType,
    route: string
}

export default function Sidebar() {

    const [currentTab, setCurrentTab] = useState<number>(0);

    const tabs: tab[] = [
        { title: "الرئيسية", icon: MdHome, index: 0, route: 'dashboard' },
        { title: "الطلبات", icon: MdRequestPage, index: 1, route: 'requests' },
        { title: "بريد الوارد", icon: MdInbox, index: 2, route: 'inbox' },
        // { title: "تسجيل الخروج", icon: MdLogout, index: 3, route: 'signout' },
    ]

    const logout = () => {
        auth.signOut();
    }

    return (
        <div className="flex">
            <div className="flex flex-col h-screen p-3 bg-white shadow w-16 sm:w-60">
                <div className="space-y-3">
                    <h2 className=" text-sm sm:text-xl font-bold">حكومة الشارقة</h2>
                    <ul className="pt-2 pb-4 space-y-1 text-sm">
                        {tabs.map((tab, index) => {

                            // Tab item

                            return <li key={tab.index} onClick={() => { setCurrentTab(index) }} className={`rounded-md ${currentTab === tab.index ? "bg-blue-500" : ""}`}>
                                <Link
                                    to={tab.route}
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    {<tab.icon size={25} color={currentTab === tab.index ? 'white' : 'black'} />}
                                    <span className={`hidden sm:block ${currentTab === tab.index ? 'text-white' : 'text-black'}`}>
                                        {tab.title}
                                    </span>
                                </Link>
                            </li>

                        })}
                        <li key={tabs.length + 1} onClick={logout} className='rounded-md hover:cursor-pointer'>
                            <div
                                className="flex items-center p-2 space-x-3 rounded-md"
                            >
                                <MdLogout size={25} color='black'/>
                                <span className={'hidden sm:block text-black'}>
                                    تسجيل الخروج
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='p-4'>
                <Routes>
                    <Route path='/*' element={<Dashboard />} />
                    <Route path='/inbox' element={<Inbox />} />
                    <Route path='/requests' element={<Requests />} />
                    {/* <Route path='/dashboard' element={<Dashboard/>}/> */}
                </Routes>
            </div>
        </div>
    );
}