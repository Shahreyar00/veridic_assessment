import React, { useContext } from "react";
import { TechCrunchContext } from "../../context/TechCrunchContext";
import "./Home.scss";
import Loader from "../../components/loader/Loader";
import Card from "../../components/card/Card";

const Home = () => {
    const { techCrunch, loading, error } = useContext(TechCrunchContext);

    return (
        <div className="home__container">
            <div className="home__wrapper">
                {loading && !error && (
                    <Loader />
                )}
                {techCrunch?.map((data) => (
                    <Card key={data.id} data={data} />
                ))}
                {error && <span>Something went wrong!</span>}
            </div>
        </div>
    )
}

export default Home