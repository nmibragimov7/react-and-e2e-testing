import React from "react";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Navbar from "./Navbar";
import {renderWithRouter} from "../../test/helper/renderWithRouter";

describe('TEST NAVBAR', () => {
    test('test about link', () => {
        renderWithRouter(<Navbar/>);
        const aboutLink = screen.getByTestId('about-link');
        userEvent.click(aboutLink);
        expect(screen.getByTestId('about-page')).toBeInTheDocument();
        screen.debug();
    });

    test('test main link', () => {
        renderWithRouter(<Navbar/>);
        const mainLink = screen.getByTestId('main-link');
        userEvent.click(mainLink);
        expect(screen.getByTestId('main-page')).toBeInTheDocument();
        screen.debug();
    });

    test('test users link', () => {
        renderWithRouter(<Navbar/>);
        const usersLink = screen.getByTestId('users-link');
        userEvent.click(usersLink);
        expect(screen.getByTestId('users-page')).toBeInTheDocument();
        screen.debug();
    });
})
