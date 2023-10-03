import React from "react";
import "./Heading.css"

function Heading({ title, subtitle }) {
    return(
        <div className="section-heading">
            <h1 className="title">{title}</h1>
            {subtitle && <p className="subtitle">{subtitle}</p>}
        </div>
    );
}

export default Heading;