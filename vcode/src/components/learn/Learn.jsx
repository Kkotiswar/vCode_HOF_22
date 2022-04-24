import React from "react";
import Reactplayer from "react-player";
import Data from "./learnDT";
import './Learn.css';
function createEntry(currentEntry) {
    return (

        <div>
            <Reactplayer width="300px" height="170px" style={{ margin: "50px" }} controls url={currentEntry.url} />
            <h3 style={{margin: "0% auto 10%"}}>{currentEntry.topic}</h3>
        </div>
    );
}

function content() {
    return (
            <div style={{ margin: "5% auto 10%" }}>
                <h1> <span>LEARN</span> </h1>
                <div style={{width: "100%"}}>
                <div className="content" > {Data.map(createEntry)} </div>
                </div>
            </div>
    );
}

export default content;