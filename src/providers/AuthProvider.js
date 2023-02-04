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
    const [greenhouses, setGreenhouses] = useState(JSON.parse(localStorage.getItem('authGreenhouses')));

    const login = async(email, password) => {
        const response = await axios.get(`http://localhost:1337/user/getbyemail?email=${email}`);
        const _user = response.data.data;
        if(!_user) {
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
        } else if(_user.email !== email || _user.password !== password) {
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
        setUser(_user);
        setGreenhouses(_user.greenHouses);
        localStorage.setItem('auth',JSON.stringify(_user));
        localStorage.setItem('authGreenhouses', JSON.stringify(_user.greenHouses));
        navigate(redirectPath, { replace: true });
    }

    const logout = () => {
        setUser(null);
        setGreenhouses(null);
        localStorage.removeItem('auth');
        localStorage.removeItem('authGreenhouses')
    }

    const resetAuthGreenHouses = async() => {
        const response = await axios.get(`http://localhost:1337/greenhouse/getbyemail?email=${user.email}`)
        const _greenhouses = response.data.data;
        setGreenhouses(_greenhouses);
        localStorage.setItem('authGreenhouses',JSON.stringify(_greenhouses));
    }

    return <AuthContext.Provider value={{ user, greenhouses, login, logout, resetAuthGreenHouses }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext);
}