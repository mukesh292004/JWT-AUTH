import React, { useState } from 'react'
import { UseAuthContextComponent } from './Authhook';

export const UseLoginHooks = () => {
    const { dispatch } = UseAuthContextComponent(); 

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const Login = async (email, password) => {
        setLoading(true);
        setError(null);

        try {
            const res = await fetch("http://localhost:4000/Auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (!res.ok) {
                throw new Error("Something went wrong");
            }

            const json = await res.json();
            localStorage.setItem('user', JSON.stringify(json));
            dispatch({ type: "LOGIN", payload: json });

            return json;
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return { error, loading, Login };
}

