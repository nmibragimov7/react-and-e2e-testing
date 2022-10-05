import React from 'react';
import {Route, Routes} from "react-router-dom";

import Main from "../pages/Main";
import About from "../pages/About";
import Users from "../pages/users/Users";
import UserDetails from "../pages/UserDetails";
import Error from "../pages/Error";
import HelloWorld from "../pages/HelloWorld";
import UsersE2e from "../pages/usersE2e/UsersE2e";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Main/>}/>
            <Route path={'/hello'} element={<HelloWorld/>}/>
            <Route path={'/about'} element={<About/>}/>
            <Route path={'/users'} element={<Users/>}/>
            <Route path={'/users-e2e'} element={<UsersE2e/>}/>
            <Route path={'/users/:id'} element={<UserDetails/>}/>
            <Route path={'/*'} element={<Error/>}/>
        </Routes>
    );
};

export default AppRouter;
