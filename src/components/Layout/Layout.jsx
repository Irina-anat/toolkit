//import { useDispatch, useSelector } from "react-redux"
//import { decrement, increment } from "redux/myValue/slice"
//import { decrement, increment } from "redux/store"

import { AppBar } from "components/AppBar";
import { Outlet } from "react-router-dom";


export const Layout = () => {

    return (
        <div className="container">
            <AppBar />
            <Outlet />
        </div>
    );
};





// export const Layout = ()=>{
//     const value = useSelector((state) => state.myValue)
//    // console.log(value)
//     const dispatch = useDispatch()

//     return (
//         <div>
//             {value}
//             <button onClick={() => dispatch(increment(100))}>Increment</button>
//             <button onClick={()=>dispatch(decrement(50))}>Decrement</button>
//         </div>
//     )
// }