import React, {useCallback, useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";

const UserDetails = () => {
    const params = useParams();
    const [user, setUser] = useState(null);
    const loadUserById = useCallback(async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/' + params.id);
        setUser(response.data);
    }, [params.id]);
    useEffect(() => {
        loadUserById();
    }, [loadUserById]);

    return (
        <>
            {user && <div data-testid='user-page'>
                <p>Имя: {user.name}</p>
                <p>Телефон: {user.phone}</p>
                <p>Почта: {user.email}</p>
                USER DETAILS PAGE
            </div>}
        </>
    );
};

export default UserDetails;
