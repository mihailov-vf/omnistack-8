import React, { useEffect, useState } from 'react';
import './Main.css';

import api from '../services/api';

import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';

export default function Main({ match }) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function loadDevs() {
            const response = await api.get('/devs', {
                headers: {
                    user: match.params.id
                }
            });

            setUsers(response.data);
        };
        loadDevs();
    }, [match.params.id]);

    function removeUser(id) {
        setUsers(users.filter(user => user._id !== id));
    }

    async function handleLike(id) {
        const result = await api.post(`/devs/${id}/likes`, null, {
            headers: {
                user: match.params.id
            }
        });

        if (result.status === 200) {
            removeUser(id);
        }
    }

    async function handleDislike(id) {
        const result = await api.post(`/devs/${id}/dislikes`, null, {
            headers: {
                user: match.params.id
            }
        });

        if (result.status === 200) {
            removeUser(id);
        }
    }

    return (
        <div className="main-container">
            <img src={logo} alt="Tindev" />
            {users.length ? (
                <ul>
                    {users.map(user => (
                        <li key={user._id}>
                            <img src={user.avatar} alt="Dev avatar" />
                            <footer>
                                <strong>{user.name}</strong>
                                <p>{user.bio}</p>
                            </footer>
                            <div className="buttons">
                                <button onClick={() => handleLike(user._id)}>
                                    <img src={like} alt="Like" />
                                </button>
                                <button onClick={() => handleDislike(user._id)}>
                                    <img src={dislike} alt="Dislike" />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="empty">Acabou! :(</div>
            )}
        </div>
    );
}
