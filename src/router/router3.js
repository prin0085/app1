import React from "react";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import "../css/navlink.css";
import Product from "../components/product";
import Home from './../components/home';
import Member from "../components/member";

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

            <Routes style={{ margin: '20px' }}>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<Product />} />
                <Route path="/member" Component={Member} />
                <Route path="/contact" element={<div style={{ textAlign: 'center' }}>Contact Page</div>} />
                <Route path="/*" element={<div style={{ textAlign: 'center' }}>Error 404 Not Found</div>} />
            </Routes>
        </BrowserRouter>
    )
}