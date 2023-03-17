import { useEffect, useReducer } from 'react';
import { MdHome, MdRequestPage, MdInbox } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router';
import { defaultSocketContextState, SocketReducer } from '../../contexts/socket/context';
import socket from '../../hooks/socket';
import { useSocket } from '../../hooks/useSocket';
import { RequestsActions } from '../../redux/slices/requests';
import SideBar, { TabModel } from '../core/hoc/sidebar';
import { ConstructionRequest } from '../core/models/constructionRequestion';
import NotFound from '../not_found_page/not_found';
import Dashboard from '../sub_routes/dashboard/dashboard';
import Inbox from '../sub_routes/inbox/inbox';
import NewRequest from '../sub_routes/requests/new_request/new_request';
import UpdateRequest from '../sub_routes/requests/update_request/update_request';
import UserRequests from '../sub_routes/requests/user_requests/user_requests';

const tabs: TabModel[] = [
    { title: "الرئيسية", icon: MdHome, index: 0, route: '/' },
    { title: "الطلبات", icon: MdRequestPage, index: 1, route: 'requests' },
    { title: "بريد الوارد", icon: MdInbox, index: 2, route: 'inbox' },
]

export default function Home() {

    const dispatch = useDispatch();
    const soc = socket;


    useEffect(() => {
        soc.on('requestsFetched', ((requests: ConstructionRequest[]) => {
            console.log('reqs',requests);
            dispatch(RequestsActions.loadRequests(requests));
        }));

        socket.on('requestAdded', ((request: any) => {
            dispatch(RequestsActions.addRequest(request));
        }));

        socket.on('requestDeleted',(id:string)=>{
            dispatch(RequestsActions.removeRequest(id));
        })

        socket.on('requestUpdated',(newRequest)=>{
            dispatch(RequestsActions.updateRequest(newRequest));
        })
    }, [])

    return (
        <SideBar tabs={tabs}>
            <div className='p-4 w-full'>
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/inbox' element={<Inbox />} />
                    <Route path='/requests' element={<UserRequests />} />
                    <Route path='/new' element={<NewRequest />} />
                    <Route path='/update/:id' element={<UpdateRequest />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </div>
        </SideBar>
    );
}