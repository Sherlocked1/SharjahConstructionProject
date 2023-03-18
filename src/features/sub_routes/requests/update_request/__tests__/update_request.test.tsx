import { render, screen } from "@testing-library/react";
import MyDropDown from "../components/dropdown";

describe('dropdown tests',()=>{
    test('test drop down menu will display the value if it exists in its array ', () => {

        const value = "1";
    
        render(
            <MyDropDown value={value} values={['1']} onChange={()=>{}}/>
        )
    
        const element = screen.getByText(value)
    
        expect(element).toBeInTheDocument();
    });
    
    test('test drop down menu won\'t display the value if it doesn\'t exists in its array ', () => {
    
        const value = "1";
    
        render(
            <MyDropDown value={value} values={[]} onChange={()=>{}}/>
        )
    
        const element = screen.getByTestId('dropdown');
    
        expect(element.getAttribute('value')).not.toBe(value);
    });
    
    test('test the dropdown menu will have the correct number of items ', () => {
    
        const value = "1";
    
        render(
            <MyDropDown value={value} values={['1',"4","5"]} onChange={()=>{}}/>
        )
    
        const element = screen.getByTestId('dropdown');
    
        expect(element.childNodes.length).toBe(3);
    });
})