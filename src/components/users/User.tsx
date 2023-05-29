import { useEffect, useState } from 'react';
import Clients from '../classes/Clients';
import './User.css';

type UsersProps = {
    urlForUsers: string,
    urlForPosts: string,
    actualUsersData: Clients[],
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

    const uploadPost = (api: string, params?: Object) => {
        try {
            fetch(api, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(params)
            }).then(response => response.json()).then(result => console.log(result))
                .catch(err => setErrors(err));
        } catch (error) {
            console.log(error);
        }
    }

    //executes at page loading once
    useEffect(() => {
        fetchUserData(Props.urlForUsers);
        uploadPost(Props.urlForPosts);
    }, [Props.urlForUsers, Props.urlForPosts]); //When props URLs changes the useEffect executes one more time, 
    //leave it empty if you need it to run only once

    const respectclients = () => {
        Props.actualUsersData = Props.actualUsersData.map(client => {
            return {
                ...client,
                name: 'Mr.' + client.name
            }
        });
        Props.onDataChange(Props.actualUsersData);
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
                    {Props.actualUsersData.map(client => (
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
            <button className='button' onClick={() => fetchUserData(Props.urlForUsers)}>Refresh data</button>
        </div>
    );
}

export default User;


