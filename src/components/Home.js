import React, { useState } from "react";
import Icons from "./Icons";
import { v4 as uuidv4 } from 'uuid';


function Home() {
    const [data, setData] = useState([
        { icon: "fas fa-home", num: "150+", topic: "Branches" },
        { icon: "fas fa-car", num: "4770+", topic: "cars sold" },
        { icon: "fas fa-users", num: "320+", topic: "Happy clients" },
        { icon: "fas fa-car", num: "1500+", topic: "news cars" },
    ]);

    const [active, setActive] = useState(true);
    const [activeClass, setActiveClass] = useState(["", ""]);

    //   This function will will handle the hovering effect
    const handleMouse = () => {
        setActive(!active);
        active ? setActiveClass(["focus-btn", "focus-img"]) : setActiveClass(["", ""]);
    };
    return (
        <>
            <section
                className="home"
                id="home"
                onMouseEnter={handleMouse}
                onMouseLeave={handleMouse}
            >
                <img src="./image/rolls.webp" alt="" className={activeClass[1]} />

                <a href="#" className={`btn explore ${activeClass[0]}`}>
                    explore cars
                </a>
            </section>

            <section className="icons-container">
                {data.map(({ icon, num, topic }, idx) => (
                    <Icons icon={icon} num={num} topic={topic} key={uuidv4()} />
                ))}
            </section>
        </>
    );
}


export default Home;
