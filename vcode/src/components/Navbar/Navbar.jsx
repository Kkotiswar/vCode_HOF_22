import react from 'react'
import Entry from "./aboutEntry"
import data from "./data"

function createEntry(currentEntry)
{
    return (
        <Entry 
        name={currentEntry.name}
        img={currentEntry.img}
        role={currentEntry.role}
        linkedin={currentEntry.linkedin}
        twitter={currentEntry.twitter}
        github={currentEntry.github}
    />
    );
}

function app()
{
    return (
        <div>
            <h1> <span>ABOUT</span> </h1>
            <dl className="dictionary"> {data.map(createEntry)} </dl>
        </div>
    );
}

export default app;