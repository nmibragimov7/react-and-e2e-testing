import React, {useState} from 'react';

const HelloWorld = () => {
    const [value, setValue] = useState("");
    const [visible, setVisible] = useState(false);
    const toggle = () => value === "hello" && setVisible(prev => !prev);

    return (
        <div>
            <input
                id={"search"}
                type="text"
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
            <button id={"toggle"} onClick={toggle}>Click me</button>
            {visible && <h1 id={"hello"}>HELLO WORLD</h1>}
        </div>
    );
};

export default HelloWorld;
