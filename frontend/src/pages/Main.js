import React from 'react';
import './Main.css';

import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';

export default function Main({ match }) {
    return (
        <div className="main-container">
            <img src={logo} alt="Tindev" />
            <ul>
                <li>
                    <img src="https://avatars3.githubusercontent.com/u/4248081?s=460&v=4" alt="Dev avatar" />
                    <footer>
                        <strong>Nome</strong>
                        <p>Bio asdasdasdasd dasd asd asd asd asd asdasdadasdasdasd asdasdasdasd asdasdasdasdasda asdasdasdasd asdasdasdasda asdasdasdasdasd asdasdasds</p>
                    </footer>
                    <div className="buttons">
                        <button>
                            <img src={like} alt="Like" />
                        </button>
                        <button>
                            <img src={dislike} alt="Dislike" />
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars3.githubusercontent.com/u/4248081?s=460&v=4" alt="Dev avatar" />
                    <footer>
                        <strong>Nome</strong>
                        <p>Bio</p>
                    </footer>
                    <div className="buttons">
                        <button>
                            <img src={like} alt="Like" />
                        </button>
                        <button>
                            <img src={dislike} alt="Dislike" />
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars3.githubusercontent.com/u/4248081?s=460&v=4" alt="Dev avatar" />
                    <footer>
                        <strong>Nome</strong>
                        <p>Bio</p>
                    </footer>
                    <div className="buttons">
                        <button>
                            <img src={like} alt="Like" />
                        </button>
                        <button>
                            <img src={dislike} alt="Dislike" />
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    );
}
