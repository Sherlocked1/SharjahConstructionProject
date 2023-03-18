import { Route, Routes } from 'react-router';
import SideBar from './components/sidebar';
import NotFound from '../not_found_page/not_found';
import Dashboard from '../sub_routes/dashboard/dashboard';
import Notifications from '../sub_routes/notifications/notifications';
import NewRequest from '../sub_routes/requests/new_request/new_request';
import UpdateRequest from '../sub_routes/requests/update_request/update_request';
import UserRequests from '../sub_routes/requests/user_requests/user_requests';
import useHomeController from './controller';

export default function Home() {

    const {tabs} = useHomeController();

    return (
        <SideBar tabs={tabs}>
            <div className='p-4 w-full'>
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/notifications' element={<Notifications />} />
                    <Route path='/requests' element={<UserRequests />} />
                    <Route path='/new' element={<NewRequest />} />
                    <Route path='/update/:id' element={<UpdateRequest />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </div>
        </SideBar>
    );
}