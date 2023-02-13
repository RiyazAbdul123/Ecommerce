import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import "./index.css";

const perfumesList = [
    {
        id: 1,
        name: "perfume 1",
        description:
            "Let's face it. Everyone wants to smell good. Whether you're out to impress your crush or simply looking for a way to make yourself feel more confident, perfume is the ultimate self-expression tool. Our ultra-concentrated fragrances are formulated with only the finest organic ingredients and essential oils from around the world.",
        imageURL: "/images/samplePerfume.jpg",
    },
    {
        id: 2,
        name: "perfume 2",
        description:
            "Let's face it. Everyone wants to smell good. Whether you're out to impress your crush or simply looking for a way to make yourself feel more confident, perfume is the ultimate self-expression tool. Our ultra-concentrated fragrances are formulated with only the finest organic ingredients and essential oils from around the world.",
        imageURL: "/images/samplePerfume.jpg",
    },
    {
        id: 3,
        name: "perfume 3",
        description:
            "Let's face it. Everyone wants to smell good. Whether you're out to impress your crush or simply looking for a way to make yourself feel more confident, perfume is the ultimate self-expression tool. Our ultra-concentrated fragrances are formulated with only the finest organic ingredients and essential oils from around the world.",
        imageURL: "/images/samplePerfume.jpg",
    },
    {
        id: "1",
        name: "perfume 4",
        description:
            "Let's face it. Everyone wants to smell good. Whether you're out to impress your crush or simply looking for a way to make yourself feel more confident, perfume is the ultimate self-expression tool. Our ultra-concentrated fragrances are formulated with only the finest organic ingredients and essential oils from around the world.",
        imageURL: "/images/samplePerfume.jpg",
    },
    {
        id: "1",
        name: "perfume 5",
        description:
            "Let's face it. Everyone wants to smell good. Whether you're out to impress your crush or simply looking for a way to make yourself feel more confident, perfume is the ultimate self-expression tool. Our ultra-concentrated fragrances are formulated with only the finest organic ingredients and essential oils from around the world.",
        imageURL: "/images/samplePerfume.jpg",
    },
];

const Home = () => {
    return (
        <div className="home-cotainer">
            <Header />
            <div>
                <img
                    src="/images/homeBanner.jpg"
                    className="banner-img"
                    alt="Perfume-img"
                />
            </div>
            <ul className="home-ul-container">
                {perfumesList.map((perfume) => (
                    <li className="home-li-ele">
                        <div>
                            <img
                                src={perfume.imageURL}
                                alt={perfume.name}
                                className="perfume-img"
                            />
                        </div>
                        <div>
                            <h1 className="perfume-name">{perfume.name}</h1>
                            <p className="perfume-description">{perfume.description}</p>
                            <button className="button">Shop Now</button>
                        </div>
                    </li>
                ))}
            </ul>
            <Footer />
        </div>
    );
};

export default Home;
