import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    // console.log(error);
    return (
        <div>
            <p className="text-center font-bold text-3xl mt-10">{error.statusText || error.message}</p>
            {
                error.status ===404 && <div className="text-center">
                    <p className="font-bold text-3xl mt-10">Page Not Found</p>
                    <Link to="/" className="btn btn-secondary font-bold mt-4">Go Back to Home</Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;