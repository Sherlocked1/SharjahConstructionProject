import { render, screen } from "@testing-library/react";
import Card from "../components/card";

test('test dashboard card',()=>{
    render(<Card title={"title"} subtitle={"subtitle"} backgroundColor={"red"} titleColor={"white"}/>)
    const titleElement = screen.getByText('title');
    const subtitleElement = screen.getByText('subtitle');
    const cardElement = screen.getByTestId('card');

    expect(titleElement).toBeInTheDocument();
    expect(subtitleElement).toBeInTheDocument();
    expect(cardElement.getAttribute('style')).toContain('white');
    expect(cardElement.getAttribute('style')).toContain('red');
});