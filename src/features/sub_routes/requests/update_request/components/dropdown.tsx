export interface MyDropDownProps {
    value:string;
    values:string[];
    onChange:((selectedItem:string)=>void)
}

export default function MyDropDown(props:MyDropDownProps) {
    return (
        <div className="relative w-full lg:max-w-sm">
            <select data-testid="dropdown" value={props.value} onChange={(e)=>props.onChange(e.target.value)} title="drop" className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                {props.values.map((val)=>{
                    return <option data-testid={`dropdownOption-${val}`} key={val}>{val}</option>
                })}
            </select>
        </div>
    );
}