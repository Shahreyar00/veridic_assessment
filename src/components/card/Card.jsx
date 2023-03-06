import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({ data }) => {

    return (
        <div className="card__container">
            <div className="card__wrapper">
                <a href={data.link} className="link" target="_blank" rel="noopener noreferrer">
                    <div className="top">
                        <img src={data.jetpack_featured_media_url || "https://images.pexels.com/photos/13806260/pexels-photo-13806260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt="" />
                    </div>
                    <div className="bottom">
                        <div className="title">{data.title?.rendered}</div>
                        <p className="desc">
                            {data.primary_category.description}
                        </p>
                    </div>
                </a>
                <div className="checkAuthor">
                    <Link to={`/author/${data.author}`}>
                        <span>About Author {">"}</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Card