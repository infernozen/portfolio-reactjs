import React, { useState } from "react";
import '../styles/Navfooter.css'

const Navfooter = (props) => {
    const [selectedItem, setSelectedItem] = useState("contact");

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    return (
        <nav className={props.className}>
            <ul className="nav-footer">
                <li className={selectedItem === "home" ? "selected" : ""} onClick={() => handleItemClick("home")}>
                    HOME
                </li>
                <li className={selectedItem === "about" ? "selected" : ""} onClick={() => handleItemClick("about")}>
                    ABOUT
                </li>
                <li className={selectedItem === "projects" ? "selected" : ""} onClick={() => handleItemClick("projects")}>
                    PROJECTS
                </li>
                <li className={selectedItem === "tools" ? "selected" : ""} onClick={() => handleItemClick("tools")}>
                    TOOLS
                </li>
                <li className={selectedItem === "contact" ? "selected" : ""} onClick={() => handleItemClick("contact")}>
                    CONTACT
                </li>
            </ul>
        </nav>
    );
};

export default Navfooter;
