import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { RotatingLines } from "react-loader-spinner";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    // console.log(user);
    const location = useLocation();
    // console.log(location);

    if (loading) {
        return <div className="flex justify-center">
            <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
            />
        </div>
    }

    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};


PrivateRoutes.propTypes = {
    children: PropTypes.node
}

export default PrivateRoutes;