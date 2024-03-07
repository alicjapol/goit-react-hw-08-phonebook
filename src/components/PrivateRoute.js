import useAuth from "hooks/useAuth";
import { Navigate } from "react-router-dom";

export default function PrivateRoute ({Component, redirectTo}) {
    const {isLoggedIn} = useAuth()
    console.log(isLoggedIn, "?")
    return !isLoggedIn ? Component : <Navigate to={redirectTo} />
}