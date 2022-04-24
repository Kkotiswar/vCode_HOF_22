
import react from 'react';
import Entry from "./aboutEntry";
import data from "./data";

function createEntry(currentEntry)
{
    return (
        <Entry 
        name={currentEntry.name}
        img={currentEntry.img}
        role={currentEntry.role}
        linkedin={currentEntry.linkedin}
        mail={currentEntry.mail}
        github={currentEntry.github}
       />
    );
}

function app()
{
    return (
        <div style={{margin: "10% auto"}}>
            <h1> <span>ABOUT</span> </h1>
            <dl className="dictionary"> {data.map(createEntry)} </dl>
        </div>
    );
}

export default app;