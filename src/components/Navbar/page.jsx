"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";



const Navbar = () => {
    const menuItems = (
        <>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/tiles">All Tiles</Link></li>
            <li><Link href="/profile">My Profile</Link></li>
        </>

    );
    const { data: session, isPending } = authClient.useSession()
    const user = session?.user;
    console.log(user,isPending, "user");

    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-950" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow bg-amber-50 text-blue-950">
                            {menuItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl text-black">Tiles Gallery
                        </a>
                </div>
                <div className="navbar-center hidden lg:flex t">
                    <ul className="menu menu-horizontal px-1 text text-blue-950">
                        {menuItems}
                        
                    </ul>
                </div>
                {isPending?(
                    <span className="loading loading-dots loading-xl"></span>
                ) : user ? (
                    <div className="navbar-end text-blue-950">
                            <span className="mr-4">Welcome, {user.name}!</span>
                        <button className="btn btn-primary" onClick={async()=> await authClient.signOut() }>
                            Logout
                        </button>
                    </div>
                ) : (
                    <div className="navbar-end text-blue-950">
                        <button className="btn btn-primary">
                            <Link className="text-white" href="/login">
                                Login
                            </Link>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;