import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";



export function NavbarDemo() {
    return (
        <>
            {/* <div className="relative w-full flex items-center justify-center"> */}
            <Navbar className="top-6" />
            
            {/* </div> */}
        </>
    );
}

function Navbar({ className }) {
    const [active, setActive] = useState(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                 <div className="flex flex-col space-y-4 text-sm" setActive={setActive} active={active}>
                         <Link to="/">Home</Link>
                    </div>
                    <div className="flex flex-col space-y-4 text-sm" setActive={setActive} active={active}>
                         <Link to="/gallery">Gallery</Link>
                    </div>
                 <div className="flex flex-col space-y-4 text-sm" setActive={setActive} active={active}>
                         <Link to="/contact-us" >Contact Us</Link>
                    </div>
            </Menu>
        </div>
    );
}