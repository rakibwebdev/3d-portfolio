import React from "react";
import Logo from "../Logo/Logo";

function Header() {
    return (
        <div className='header-wrapper columns-2 py-4'>
            <Logo />
            <nav className='text-white float-right'>
                <ul className='flex gap-6'>
                    <li>
                        <a href='#'>Home</a>
                    </li>
                    <li>
                        <a href='#'>About</a>
                    </li>
                    <li>
                        <a href='#'>Portfolio</a>
                    </li>
                    <li>
                        <a href='#'>Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
