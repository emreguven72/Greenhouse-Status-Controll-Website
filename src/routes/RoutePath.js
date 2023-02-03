import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignupPage";
import Authentication from "./Authentication";

const RoutePath = () => {
    return(
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route 
                path="/home"
                element={
                    <Authentication>
                        <HomePage />
                    </Authentication>
                }
            />
        </Routes>
    )
}
export default RoutePath;