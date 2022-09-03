import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function Navbar() {
    const Nav = styled.nav`
    .navbar-list {
        display: flex;
        gap: 4.8rem;

        li {
            list-style: none;

            .navbar-link {
                text-decoration: none;
            }
        }
    }`;

    return  <Nav>
        <div className="menuIcon">
            <ul className="navbar-list">
                <li>
                    <NavLink className="navbar-link" to="/Wallat">Wallat</NavLink>
                </li>
                <li>
                    <NavLink className="navbar-link" to="/Mint">Mint</NavLink>
                </li>
                <li>
                    <NavLink className="navbar-link" to="/Burn">Burn</NavLink>
                </li>
                <li>
                    <NavLink className="navbar-link" to="/Transfer">Transfer</NavLink>
                </li>
            </ul>
        </div>
    </Nav>
};

export default Navbar;