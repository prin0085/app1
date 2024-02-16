import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import "../css/navlink.css";

export default function Router2() {
    const nav_menu = [
        {
            text: "Home",
            to: "/"
        },
        {
            text: "Product",
            to: "/product"
        },
        {
            text: "Member",
            to: "/member"
        },
        {
            text: "Contact",
            to: "/contact"
        },
    ];

    return (
        <BrowserRouter>
            <nav className="nav">
                {
                    nav_menu.map((d) => {
                        return (
                            <NavLink to={d.to} key={d.text}
                                className={({ isActive }) => isActive ? "active_menu" : "menu"}
                                style={({ isActive }) => { return { fontWeight: isActive ? "bold" : "" } }}>
                                {d.text}
                            </NavLink>
                        )
                    })
                }
            </nav>
        </BrowserRouter>
    )
}