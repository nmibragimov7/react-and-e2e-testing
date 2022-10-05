import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Counter from "./Counter";
import {renderWithRedux} from "../../test/helper/renderWithRedux";
import {renderWithRouterRedux} from "../../test/helper/renderWithRouterRedux";

describe('TEST COUNTER', () => {
    test('test component and redux', () => {
        const {getByTestId} = renderWithRedux(<Counter/>, {counter: {value: 10}});
        // const {getByTestId} = renderWithRouterRedux(null, {
        //     initialRoute: '/',
        //     initialState: {
        //         counter: {value: 10}
        //     }
        // });
        // const container = render(
        //     <Provider store={createStore({
        //         counter: {value: 10}
        //     })}>
        //         <Counter/>
        //     </Provider>
        // );
        const incrementBtn = getByTestId('increment-btn'); // с помощью деструктуризации {getByTestId}, используем сразу метод
        const decrementBtn = getByTestId('decrement-btn');
        // const decrementBtn = container.getByTestId('decrement-btn'); // ищет только в компоненте Counter
        screen.debug();
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
        userEvent.click(incrementBtn);
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
        userEvent.click(decrementBtn);
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });
})
