import React from "react";

const Category = (props) => {
    return(
        <div className={`category-container ${props.color}`}>
            <div>
                <img src={props.imgSrc} alt="reaction-image" />
                <p className="name">{props.name}</p>
            </div>
            <p><b>{props.score}</b> / 100</p>
        </div>
    )
}

export default Category