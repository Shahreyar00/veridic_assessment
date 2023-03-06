import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Author.scss";
import Loader from "../../components/loader/Loader";
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Author = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [authorData, setAuthorData] = useState(null);
    const [error, setError] = useState(false);

    useEffect(()=>{
        const fetchData = async() => {
            setLoading(true);
            try{
                const res = await axios.get(`https://techcrunch.com/wp-json/tc/v1/users/${id}`);
                console.log(res.data);
                setAuthorData(res.data);
            } catch(err){
                setError(true);
            }
            setLoading(false);
        }
        fetchData();
    },[id])

    return (
        <div className="author__container">
            <div className="author__wrapper">
                {loading && !error && (
                    <Loader />
                )}
                <div className="top">
                    <img src={authorData?.cbAvatar || "https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png"} alt="" />
                    <div className="info">
                        <div className="name">{authorData?.name}</div>
                        <div className="post">{authorData?.position}</div>
                    </div>
                </div>
                <div className="bottom">
                    <a href={authorData?.link} className="link" target="_blank" rel="noopener noreferrer">
                        <span className="link">Visit Author's Tech Crunch Profile</span>
                    </a>
                    <div className="socials">
                        <span className="tag">Socials:</span>
                        <a href={authorData?.links?.facebook || "https://www.facebook.com/"} className="link" target="_blank" rel="noopener noreferrer">
                            <span className="icon">
                                <FaFacebookSquare />
                            </span>
                        </a>
                        <a href={authorData?.links?.twitter || "https://twitter.com/"} className="link" target="_blank" rel="noopener noreferrer">
                            <span className="icon">
                                <FaTwitterSquare />
                            </span>
                        </a>
                        <a href={authorData?.links?.linkedin || "https://www.linkedin.com/"} className="link" target="_blank" rel="noopener noreferrer">
                            <span className="icon">
                                <FaLinkedin />
                            </span>
                        </a>
                    </div>
                </div>
                {error && <span>Something went wrong!</span>}
            </div>
        </div>
    )
}

export default Author