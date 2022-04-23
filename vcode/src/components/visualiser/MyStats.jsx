import React, { useEffect, useState } from 'react';
import axios from 'axios';



const MyStats = (props) => {

    const url="https://codeforces.com/api/user.rating?handle=tourist";
    const [contest, setContest] = useState([]);
    const [loading, setLoading] = useState(200);
   
    const fetchData = async () => {
        const result = await axios.get(url);
        setContest(result.data.result);
    }
    const loadmore = () => {
        setLoading(loading + 20);
    }

    useEffect(() => {
        fetchData();
    },[]);

    return (
        <div>
            
        </div>
    );
};

export default MyStats;