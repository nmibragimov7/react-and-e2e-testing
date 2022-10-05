import {render} from "@testing-library/react";
import {Provider} from "react-redux";

import {createStore} from "../../store/store";

export const renderWithRedux = (component, initialState) => {
    const store = createStore(initialState);
    return render(
        <Provider store={store}>
            {component}
        </Provider>
    )
}
