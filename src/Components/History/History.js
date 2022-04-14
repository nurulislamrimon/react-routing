import React, { useEffect, useState } from 'react';

const History = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(datas => console.log(datas))
    }, [])
    return (
        <div>
            <h1>Hello History page </h1>
            <p>Hello History page </p>
            <p>Hello History page </p>
            <p>Hello History page </p>
        </div>
    );
};

export default History;