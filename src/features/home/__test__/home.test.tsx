import {getByTestId, render , screen } from "@testing-library/react";
import { MdHome, MdRequestPage } from "react-icons/md";
import { MemoryRouter, Route, Routes } from "react-router";
import SideBar from "../components/sidebar";

test('test that the sidebar will display the children that get passed to it', () => {
    const tabs = [
        { title: "الرئيسية", icon: MdHome, index: 0, route: '/' },
    ]

    const children = <p data-testid="child">hi</p>

    const { getByTestId } = render(
        <MemoryRouter initialEntries={['/']}>
          <Routes>
          <Route path="/" element={<SideBar tabs={[]} children={children} />}>
            
          </Route>
          </Routes>
        </MemoryRouter>
      );

      const tabElement = getByTestId('child');
      expect(tabElement).toBeInTheDocument();

})