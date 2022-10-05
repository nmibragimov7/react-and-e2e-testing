import React from "react";
import {render, screen, fireEvent} from '@testing-library/react';
import axios from "axios";
import userEvent from "@testing-library/user-event";

import Users from "./Users";
import {renderWithRouter} from "../../test/helper/renderWithRouter";

jest.mock('axios');

describe('TEST USERS', () => {
    let response;
    let userResponse;
    beforeEach(() => {
        response = {
            data: [
                {
                    id: 1,
                    name: "Leanne Graham"
                },
                {
                    id: 2,
                    name: "Ervin Howell"
                }
            ]
        }

        userResponse = {
            data: {
                id: 1,
                name: "Leanne Graham",
                phone: "1-770-736-8031 x56442",
                email: "Sincere@april.biz"
            }
        }
        // перенес дублирование в тестах в beforeEach
        // axios.get.mockReturnValue(response);
    })

    test('get users', async () => {
        axios.get.mockReturnValue(response);
        render(<Users/>);
        const users = await screen.findAllByTestId('user-item');
        expect(users.length).toBe(2);
        expect(axios.get).toBeCalledTimes(1);
        screen.debug();
    });

    test('test redirect to details page', async () => {
        axios.get.mockReturnValue(response);
        renderWithRouter(null, '/users');

        const users = await screen.findAllByTestId('user-item');
        expect(users.length).toBe(2);
        userEvent.click(users[0]);
        expect(await screen.findByTestId('user-page')).toBeInTheDocument();
        screen.debug();
    });

    test('get user', async () => {
        axios.get.mockReturnValue(userResponse);
        renderWithRouter(null, '/users/1'); // можно только компонент передать

        screen.debug();
        const user = await screen.findByTestId('user-page');
        expect(user).not.toBe(null);
        screen.debug();
    });

    afterEach(() => {
        jest.clearAllMocks();
    })
})

