import React, { useEffect, useState } from 'react';
import User from '../User/User';

const History = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(datas => setUsers(datas))
    }, [])

    return (
        <div>
            <h1>User History page </h1>
            {users.map(user => <User user={user} key={user.id}></User>)}
        </div>
    );
};

export default History;