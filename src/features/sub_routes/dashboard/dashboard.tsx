import Card from "./custom/card";
import { Pie, PieChart, ResponsiveContainer } from 'recharts';
import { ConstructionRequest } from "../../core/models/constructionRequestion";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

export default function Dashboard() {
    
    const requests: ConstructionRequest[] = useSelector<RootState, ConstructionRequest[]>((state) => state.requests.constructionRequests);
    
    console.info('requests ::: ',requests);

    var pieData = [
        { name: "الطلبات غير المكتملة", value: requests.filter((req)=>req.status === 'Completed').length },
        { name: "الطلبات المكتملة", value: requests.filter((req)=>req.status!=='Completed').length }
    ]

    return <div className="flex flex-col gap-10">
        <h1 className="text-2xl font-bold">
            مرحبا
        </h1>
        <div className="flex flex-row flex-wrap gap-14">
            <div className="flex flex-col gap-4 text-lg">
                <h1 className=" font-semibold text-xl">نظرة عامة</h1>

                {/* cards */}
                <div className="sm:columns-2 columns-auto">
                    <Card title='عدد الطلبات' subtitle={requests.length.toString()} />
                    <Card title='عدد الطلبات المكتملة' subtitle={requests.filter((req)=>req.status === 'Completed').length.toString()} />
                </div>

                {/* Summary */}
                <h1 className="text-2xl font-bold">ملخص</h1>

                <div className="columns-1 sm:columns-2">
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            {/* <Pie data={pieData} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" /> */}
                            <Pie data={pieData} dataKey="value" cx="50%" cy="50%" innerRadius={0} outerRadius={90} fill="#3B81F6" label />
                        </PieChart>
                    </ResponsiveContainer>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            {/* <Pie data={pieData} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" /> */}
                            <Pie data={pieData} dataKey="value" cx="50%" cy="50%" innerRadius={0} outerRadius={90} fill="#3B81F6" label />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    </div>
}