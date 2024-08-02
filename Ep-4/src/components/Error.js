import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError()
    console.log(err);
    return (
        <div>
            <h3>Oops...</h3>
            <h3>something went wrong</h3>
        </div>
    )
};

export default Error;