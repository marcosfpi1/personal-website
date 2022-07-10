import  "../styles/index.scss";
import Recipes from "./Recipes";
import Supra from "../images/supra.png";
import LesPaul from "../images/lespaul.svg";
import React from "react";

const App = () => {
    return (
        <>
            <section className="hero">
                <h1>HI PROD</h1>
            </section>
            <main>
                <section>
                    <h1>Hello!</h1>
                </section>
                <img src={Supra} alt="Supra" width="250" />
                <img src={LesPaul} alt="LesPaul" width="250" />
                <Recipes />
            </main>
        </>
    );
};

export default App;