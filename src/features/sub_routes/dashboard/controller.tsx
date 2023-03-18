import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { ConstructionRequest } from "../../core/models/constructionRequestion";

const useDashboardController = () => {

    const requests: ConstructionRequest[] = useSelector<RootState, ConstructionRequest[]>((state) => state.requests.constructionRequests);
    
    const piesColors = ["blue", "red"]
    var pieData = [
        { name: "المكتملة", value: requests.filter((req) => req.status === 'Completed').length },
        { name: "غير المكتملة", value: requests.filter((req) => req.status !== 'Completed').length }
    ]

    const RADIAN = Math.PI / 180;
    
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: any) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text className="text-xs" x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {pieData[index].value !== 0 ? `${pieData[index].name} ${(percent * 100).toFixed(0)}%` : ""}
            </text>
        );
    };

    return{
        pieData,
        piesColors,
        renderCustomizedLabel,
        requests,
    }
}

export default useDashboardController;