import Card from "./custom/card";
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import useDashboardController from "./controller";

export default function Dashboard() {

    const {pieData,piesColors,renderCustomizedLabel,requests} = useDashboardController();

    return <div className="flex flex-col gap-10">
        <h1 className="text-2xl font-bold">
            مرحبا
        </h1>
        <div className="flex flex-row flex-wrap gap-14 ">
            <div className="flex flex-col gap-4 text-lg">
                <h1 className=" font-semibold text-xl">نظرة عامة</h1>

                {/* cards */}
                <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
                    <Card backgroundColor="gray" titleColor="white" title='عدد الطلبات' subtitle={requests.length.toString()} />
                    <Card backgroundColor="skyblue" titleColor="black" title='عدد الطلبات المكتملة' subtitle={requests.filter((req) => req.status === 'Completed').length.toString()} />
                </div>

                {/* Summary */}
                <div className="flex p-6">
                    <h1 className="text-2xl font-bold">ملخص</h1>
                    <ResponsiveContainer width="100%" height="100%" aspect={1 / 1}>
                        <PieChart width={500} height={500}>
                            <Pie labelLine={false} data={pieData} dataKey="value" cx="50%" cy="50%" innerRadius={0} outerRadius={90} fill="#3B81F6" label={renderCustomizedLabel}>
                                {
                                    pieData.map((_data, index) => {
                                        return <Cell key={`cell-${index}`} fill={piesColors[index]} />
                                    })
                                }
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    </div>
}
