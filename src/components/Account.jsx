import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw } from "redux/store";



export const Account = () => {
  const dispatch = useDispatch();
  const balance = useSelector(state => state.account.balance)
  console.log(balance);
return (
    <div>
          {/* <input type="number"/> */}
    <p>Balance: {balance}</p>
      <button onClick={()=>{dispatch(deposit(10))}}>Deposit</button>
      <button onClick={()=>{dispatch(withdraw(5))}}>Withdraw</button>
    </div>
  );
};
