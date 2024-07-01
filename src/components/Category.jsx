import React from "react";

const Category = (props) => {
    return(
        <div className={`category-container ${props.color}`}>
            <span>
                <img src={props.imgSrc} alt="reaction-image" />
                <p className="name">{props.name}</p>
            </span>
            <p><b>{props.score}</b> / 100</p>
        </div>
    )
}

export default Category