import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logIn } from "redux/userSlice";

export const LoginForm = () => {

const navigate = useNavigate()   
const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.currentTarget;
        // console.log(form.elements.login.value)
        dispatch(logIn(form.elements.login.value))
        e.currentTarget.reset();
        navigate("/dashboard", { replace: true });//перенаправ на dashboard page
    };

    return (
        <form onSubmit={handleSubmit} >
            <div className="mb-3 mt-3">
                <input className="form-control" type="text" name="login" autoComplete="off" />
            </div>
            <button className="btn btn-primary" type="submit">Log in</button>
        </form>
    );
};