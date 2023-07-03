import { Navigate, Outlet } from "react-router-dom";
const ProtectedRoutes = ({ auth }) => {
    if (auth === "true") {
        return <Outlet />;
    } else if (auth === "false") {
        return <Navigate to="/" replace />;
    }
};

export default ProtectedRoutes;
