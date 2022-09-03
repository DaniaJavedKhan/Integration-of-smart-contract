import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from "./Navbar";

function Header() {

    return (
    <MainHeader>
        <NavLink to="/">
            <img src="./logo192.png" alt="logo" className="logo" />
        </NavLink>
        <Navbar />
    </MainHeader>
    );
};
const MainHeader = styled.header`
    padding: 0 4.8rem;
    height: 5rem;
    background-color: ${({ theme }) => theme.colors.bg};
    display flex;
    justify-content: space-between;
    align-items: center;
.logo {
    height: auto;
    max-width: 30%;
}`;
export default Header;