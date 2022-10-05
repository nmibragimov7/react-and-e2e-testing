import {MemoryRouter} from "react-router-dom";
import {render} from "@testing-library/react";

import AppRouter from "../../router/AppRouter";

export const renderWithRouter = (component, initialRoute = '/') => {

    return render(
        <MemoryRouter initialEntries={[initialRoute]}>
            <AppRouter/>
            {component}
        </MemoryRouter>
    )
}
