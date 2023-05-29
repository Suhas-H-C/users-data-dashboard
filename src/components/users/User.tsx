import { useEffect, useState } from 'react';
import Clients from '../classes/Clients';
import './User.css';

type UsersProps = {
    url: string,
    actualData: Clients[],
    onDataChange: Function
}

const User = (Props: UsersProps) => {

    const [error, setErrors] = useState({});

    const fetchUserData = (api: string) => {
        try {
            fetch(api, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            })
                .then(response => response.json())
                .then(res => Props.onDataChange(res))
                .catch(err => setErrors(err));

        } catch (error) {
            console.log(error);
        }
    };

    //executes at page loading once
    useEffect(() => {
        fetchUserData(Props.url);
    }, [Props.url]);

    const respectclients = () => {
        Props.actualData = Props.actualData.map(client => {
            return {
                ...client,
                name: 'Mr.' + client.name
            }
        });
        Props.onDataChange(Props.actualData);
    }

    return (
        <div className='userdata'>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Website</th>
                    </tr>
                </thead>
                <tbody>
                    {Props.actualData.map(client => (
                        <tr key={client.id}>
                            <td>{client.id}</td>
                            <td>{client.name}</td>
                            <td>{client.username}</td>
                            <td>{client.email}</td>
                            <td>{client.phone}</td>
                            <td>{client.website}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className='button' onClick={() => fetchUserData(Props.url)}>Refresh data</button>
        </div>
    );
}

export default User;


