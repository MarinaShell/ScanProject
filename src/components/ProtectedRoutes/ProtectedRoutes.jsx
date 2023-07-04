import { Navigate, Outlet } from "react-router-dom";

const Authenticated = localStorage.getItem("Authenticated");

const ProtectedRoutes = () => {
    if (Authenticated === "true") {
        return <Outlet />;
    } 
    else {
        return <Navigate to="/" />;
    }
};

export default ProtectedRoutes;
