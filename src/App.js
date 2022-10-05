import React, {useEffect, useState} from "react";

import AppRouter from "./router/AppRouter";
import Navbar from "./components/Navbar/Navbar";

// function App() {
//     const [data, setData] = useState(null);
//     const [toggle, setToggle] = useState(false);
//     const [value, setValue] = useState('');
//     useEffect(() => {
//         setTimeout(() => {
//             setData({});
//         }, 1000);
//     }, []);
//     const onClick = () => setToggle(prev => !prev);
//
//     return (
//         <div>
//             <h1 data-testid={'value-elem'}>{value}</h1>
//             {toggle && <div data-testid={'toggle-elem'}>toggle</div>}
//             {data && <div style={{color: 'red'}} className={'block'}>data</div>}
//             <h1>Hello world</h1>
//             <button data-testid={'toggle-btn'} onClick={onClick}>click me</button>
//             <input
//                 type="text"
//                 placeholder="input value"
//                 value={value}
//                 onChange={(event) => setValue(event.target.value)}
//             />
//             <Users id={value}/>
//         </div>
//     );
// }

const App = () => {
    return (
        <div>
            <Navbar/>
            <AppRouter/>
        </div>
    )
}

export default App;
