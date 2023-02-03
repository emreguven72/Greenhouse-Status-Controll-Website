import React, { createContext, useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const redirectPath = location.state?.path || "/home";

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('auth')));

    const login = async(email, password) => {
        const response = await axios.get(`http://localhost:1337/user/getbyemail?email=${email}`);
        const user = response.data.data;
        if(!user) {
            navigate('/login');
            return(
                toast.error('Incorrect Informations', {
                    position: "bottom-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                })
            );
        } else if(user.email !== email || user.password !== password) {
            return(
                toast.error('Incorrect Password', {
                    position: "bottom-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                })
            );
        }

        setUser(user);
        localStorage.setItem('auth',JSON.stringify(user));
        navigate(redirectPath, { replace: true });
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem('auth');
    }

    return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext);
}