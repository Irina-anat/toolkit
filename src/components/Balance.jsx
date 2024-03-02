import { useSelector } from "react-redux";

export const Balance = value => {
    const balance = useSelector(state => state.account.balance);
    //console.log(balance);

    return <p>Balance: {balance}</p>;
};