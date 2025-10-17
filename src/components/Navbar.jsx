import { navItems, COLORS } from "../constants";
import {Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/Logo.svg";


const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }

    return (
        <nav className="sticky top-0 z-50 py-3 bg-gradient-to-b from-black/80 to-transparent">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <img className="w-10 h-10 mr-2" src={logo} alt="logo"/>
                        <span className="text-white text-xl font-bold">NetBinge</span>
                    </div>
                    <ul className="hidden lg:flex space-x-12">
                        {navItems.map((items, index)=>(
                            <li key={index} className="text-white">
                                <a href={items.href}>{items.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden lg:flex space-x-5 items-center">
                        <a href="#" className="border py-2 px-3 rounded-md">Log in</a>
                        {/* Sign up uses the primary color (falls back to JS COLORS if CSS var not found) */}
                        <a
                            href="#"
                            className="py-2 px-3 rounded-md font-bold"
                            style={{
                                backgroundColor: 'var(--color-primary, ' + COLORS.PRIMARY + ')',
                                color: 'var(--color-primary-foreground, ' + COLORS.PRIMARY_FOREGROUND + ')',
                            }}
                        >
                            Sign Up
                        </a>
                    </div>
                    <div className="md:flex flex-col justify-end lg:hidden ">
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;