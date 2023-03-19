import { ReactNode, useContext, useState } from 'react'
import { IconType } from 'react-icons';
import { MdLogout } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { SocketContext } from '../../../contexts/socket/socket_context';

export interface TabModel {
    index: number,
    title: string,
    icon: IconType,
    route: string
}

export interface SideBarProps {
    tabs: TabModel[],
    children: ReactNode
}


const SideBar = ({ children, tabs }: SideBarProps) => {

    const [currentTab, setCurrentTab] = useState<number>(0);

    const {closeSocket} = useContext(SocketContext);

    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        closeSocket();
        navigate('/login')
    }


    return (
        <div className='flex flex-row'>
            <div className="flex flex-col min-h-screen h-full p-3 bg-white shadow w-16 sm:w-60">
                <div className="space-y-3">
                    <h2 className=" text-sm sm:text-xl font-bold">الشارقة</h2>
                    <ul className="pt-2 pb-4 space-y-1 text-sm">
                        {tabs.map((tab, index) => {
                            // Tab item
                            return <li data-testid={`tab`} key={tab.index} onClick={() => { setCurrentTab(index) }} className={`rounded-md ${currentTab === tab.index ? "bg-blue-500" : ""}`}>
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
                                <MdLogout size={25} color='black' />
                                <span className={'hidden sm:block text-black'}>
                                    تسجيل الخروج
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            {children}
        </div>
    )
}

export default SideBar