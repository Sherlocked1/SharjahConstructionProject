import { auth } from "../../../firebase";
import { UserData } from "./models";

export default function Dashboard() {

    const data: UserData = {
        requests: [

        ],
        completedRequests: [

        ]
    }

    return <div>
        <div className="flex flex-col gap-4 w-full">
            مرحبا {auth.currentUser?.email}
            <h1>نظرة عامة</h1>

            <div className="flex flex-grow">
                <div className="bg-red-400 flex-1">
safd
                </div>
                <div className="bg-blue-400 flex-1">
afd
                </div>
            </div>
        </div>
    </div>
}