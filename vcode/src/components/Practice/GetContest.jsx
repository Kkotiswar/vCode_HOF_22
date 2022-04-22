import React, {useState , useEffect} from "react";
import {Card , Button} from "react-bootstrap";
import axios from "axios";
const url='https://codeforces.com/api/contest.list';

const checkContest =(data,type)=>{

    if(type==='all') return true;
    if(type==='gym') return data.name.includes('gym');
    if(type==='Educational') return data.name.includes('Educational');
    if(type==='Global') return data.name.includes('Global');
    if(type==='Div. 3') return data.name.includes('Div. 3');
    if(type==='Div. 4') return data.name.includes('Div. 4');
   if(type==='Div. 1 + Div. 2'){
       return data.name.includes('Div. 1 + Div. 2');
   }
   if(type==='Div. 1'){
         return data.name.includes('Div. 1');
   }
    if(type==='Div. 2'){

        return data.name.includes('Div. 2');
    }   
    return false;
}

const GetContest = (props) => {
  //console.log("entered getContest");
//  console.log(props);
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
    const renderContest = (data) => {      

      return checkContest(data,props.type)?(
        <Card>
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          
          <a href={`https://codeforces.com/contestRegistration/${data.id}/virtual/true`} target="blank"><Button  variant="primary">Virtual Contest</Button></a>
          <a href={`https://codeforces.com/contest/${data.id}/`} target="blank"><Button style={{margin:"5px"}} variant="primary">Solve</Button></a>
        </Card.Body>
      </Card>
      ):null;
    };
  return (
     <>
     { contest.slice(0,loading).map((renderContest))}
     </>
  );
};

export default GetContest;