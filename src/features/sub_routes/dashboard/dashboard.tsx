import { auth } from "../../../firebase";
import Card from "./custom/card";
import { UserData } from "./models";
import { Pie, PieChart, ResponsiveContainer } from 'recharts';

export default function Dashboard() {

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

    var pieData = [
        { name: "requests", value: data.requests.length },
        { name: "completed requests", value: data.completedRequests.length }
    ]


    return <div className="flex flex-col gap-10">
        <h1 className="text-2xl font-bold">
            مرحبا {auth.currentUser?.email}
        </h1>
        <div className="flex flex-row flex-wrap gap-14">
            <div className="flex flex-col gap-4 text-lg">
                <h1 className=" font-semibold text-xl">نظرة عامة</h1>

                {/* cards */}
                <div className="sm:columns-2 columns-auto">
                    <Card title='عدد الطلبات' subtitle={data.requests.length.toString()} />
                    <Card title='عدد الطلبات المكتملة' subtitle={data.completedRequests.length.toString()} />
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
            <div className="basis-auto">
                <table className="table-auto text-left text-sm font-light">
                    <thead className="border-b font-medium dark:border-neutral-500">
                        <tr>
                            <th className="px-6 py-4">العنوان</th>
                            <th className="px-6 py-4">التاريخ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.requests.map((req) => {
                            return <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-200">
                                <td className="px-6 py-4 font-medium">{req.title}</td>
                                <td className="px-6 py-4 font-medium">{req.date}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}