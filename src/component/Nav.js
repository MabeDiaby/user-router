import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
    return (
        <div>
            <br />
        <Link to="/Home">
            <button>
                <h3> Home </h3>
            </button>
        </Link>
        <Link to="/Greet">
        <br />
            <button>
                <h3> Greetings! </h3>
            </button>
        </Link>
        <br />
        <Link to="/greet/:param">
            <button>
                <h3> Users </h3>
            </button>
        </Link>
        <br />
        <Link to= "/users/new">
            <button>
                <h3> Newest Users </h3>
            </button>
        </Link>
        </div>
    );
}

export default Nav;