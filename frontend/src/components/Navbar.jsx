import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/Post">Post</Link>
            </li>
            <li>
                <Link to="/QuickPost">Quick Post</Link>
            </li>
            <li>
                <Link to="/MyPost">My Post</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
