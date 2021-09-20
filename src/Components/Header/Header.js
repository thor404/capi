import React, { useState } from 'react';

const Header = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h2>This is header: {count}</h2>
            <button onClick = {() => setCount(count + 1)}>Increase</button> &nbsp;
            <button onClick = {() => setCount(count - 1)}>Decrease</button>
        </div>
    );
};

export default Header;