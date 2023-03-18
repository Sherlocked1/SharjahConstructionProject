import { render, screen } from "@testing-library/react";
import { ConstructionRequest } from "../../../../core/models/constructionRequestion";
import RequestTableRow from "../components/table_row";

test('should render table row with the correct data',()=>{
    const mockRequest:ConstructionRequest = {
        title: "Test",
        description: "desc",
        location: "loc",
        status: "Pending"
    }
    render(RequestTableRow({request:mockRequest}));
    const titleElement = screen.getByText(mockRequest.title)
    const statusElement = screen.getByText(mockRequest.status)
    expect(titleElement).toHaveTextContent(mockRequest.title);
    expect(statusElement).toHaveTextContent(mockRequest.status);
});

test('complete button should be disabled when the request is completed',()=>{
    const mockRequest:ConstructionRequest = {
        title: "Test",
        description: "desc",
        location: "loc",
        status: "Completed"
    }
    render(RequestTableRow({request:mockRequest}));
    const button = screen.getByTestId("complete-button")
    expect(button.hasAttribute('disabled')).toBe(true);
});

test('complete button should be enabled when the request is processing or pending',()=>{
    const mockRequest:ConstructionRequest = {
        title: "Test",
        description: "desc",
        location: "loc",
        status: "Pending"
    }
    render(RequestTableRow({request:mockRequest}));
    const button = screen.getByTestId("complete-button")
    expect(button.hasAttribute('disabled')).not.toBe(true);
});