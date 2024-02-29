import { useDispatch, useSelector } from "react-redux";
import { logOut } from "redux/userSlice";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const login = useSelector(state => state.user.login);

    return (
        <div className="user-menu">
            <span className="user-login" style={{ marginRight: '10px' }}>{login}</span>
            <button type="button" className="btn btn-outline-danger"
                onClick={() => dispatch(logOut())}>Log out</button>
        </div>
    );
};