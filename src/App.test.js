import {render, screen, fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {MemoryRouter} from "react-router-dom";

import App from './App';

// getBy... - точное совпадение, если не найдет, то тест вернет ошибку
// queryBy... - совпадение, если не найдет, то вернет null, можно проверить на несуществование
// findBy... - поиск элемента на странице, который зависит от асинхронного кода

describe('TEST App', () => {
    test('get', () => {
        render(<App/>);
        const h1 = screen.getByText(/hello world/i);
        const btn = screen.getByRole('button');
        const input = screen.getByPlaceholderText(/input value/i);
        expect(h1).toBeInTheDocument();
        expect(btn).toBeInTheDocument();
        expect(input).toMatchSnapshot();
        // screen.debug();
    });

    test('query', () => {
        render(<App/>);
        const h1 = screen.queryByText(/hello2/i);
        expect(h1).toBeNull();
    });

    test('find', async () => {
        render(<App/>);
        screen.debug();
        const data = await screen.findByText(/data/i);
        expect(data).toBeInTheDocument();
        expect(data).toHaveStyle({color: 'red'});
        expect(data).toHaveClass('block');
        screen.debug();
    });

    test('Click event', () => {
        render(<App/>);
        const btn = screen.getByTestId('toggle-btn');
        expect(screen.queryByTestId('toggle-elem')).toBeNull();
        screen.debug();

        // искусственное событие
        fireEvent.click(btn);
        screen.debug();
        expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument();
        fireEvent.click(btn);
        screen.debug();
        expect(screen.queryByTestId('toggle-elem')).toBeNull();
    });

    test('Input event', () => {
        render(<App/>);
        const input = screen.getByPlaceholderText(/input value/i);
        expect(screen.queryByTestId('value-elem')).toContainHTML('');
        screen.debug();
        // fireEvent.input(input, {
        //     target: {value: '123456789'}
        // });

        // Близко к пользователю: обрабатываются события нажатия клавиши и т.д., пользовательские события (не javascript-овые события)
        userEvent.type(input, '123456789');
        screen.debug();
        expect(screen.queryByTestId('value-elem')).toContainHTML('123456789');
    });
})

describe('TEST2 App', () => {
    test('Router test', () => {
        // MemoryRouter предназначен для тестирования, если BrowserRouter находится вне текущего компонента
        render(
            <MemoryRouter>
                <App/>
            </MemoryRouter>
        );
        const mainLink = screen.getByTestId('main-link');
        const aboutLink = screen.getByTestId('about-link');
        userEvent.click(aboutLink);
        expect(screen.getByTestId('about-page')).toBeInTheDocument();
        screen.debug();
        userEvent.click(mainLink);
        expect(screen.getByTestId('main-page')).toBeInTheDocument();
        screen.debug();
    });

    test('Error page test', () => {
        // initialEntries - массив путей, которые будут рендерится
        render(
            <MemoryRouter initialEntries={['/asdfgh', '/bgfbghfn']}>
                <App/>
            </MemoryRouter>
        );
        expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
        screen.debug();
    });
})
