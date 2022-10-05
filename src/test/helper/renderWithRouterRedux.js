import {render} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import {Provider} from "react-redux";

import AppRouter from "../../router/AppRouter";
import {createStore} from "../../store/store";

export const renderWithRouterRedux = (component, options) => {
    const store = createStore(options?.initialState);
    console.log(options)

    return render(
        <Provider store={store}>
            <MemoryRouter initialEntries={[options?.initialRoute]}>
                <AppRouter/>
                {component}
            </MemoryRouter>
        </Provider>
    )
}
