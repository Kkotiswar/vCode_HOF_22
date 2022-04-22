import React, {useState , useEffect} from "react";
import {Card , Button} from "react-bootstrap";
import axios from "axios";
import './GetProblem.css';
const visitURL='https://codeforces.com/';
function getProblemURL1(problemData){
    if(problemData.contestId.toString().length>4) return visitURL+"/problemset/gymProblem/"+problemData.contestId+"/"+problemData.index;
    else return visitURL+"contest/"+problemData.contestId+"/problem/"+problemData.index;
  }
const getTags=(data)=>{
    console.log(data);
  return (
    <Button style={{margin:"5px"}} variant="success"  size='sm' disabled >{data}</Button>
  );
}
const GetProblem = (props) => {
 // console.log("Entered getProblem");
    const [problems, setProblems] = useState([]);
    const [loading, setLoading] = useState(20);
    const url=`http://codeforces.com/api/problemset.problems?tags=${props.tag}`;
    const fetchData = async () => {
       console.log("fetching data");
        const result = await axios.get(url);
         setProblems(result.data.result.problems);
         console.log("fetched data");
      // }
      // catch{
      //   console.log("Error in fetching data");
      // }
       
    }
    const loadmore = () => {
        setLoading(loading + 20);
    }
    useEffect(() => {
        fetchData();
    },[]);
    const renderProblem = (data) => {       
      return (
        <Card >
        <Card.Body>
          <Card.Title className="alignn">{data.name}</Card.Title>
          <Card.Text className="alignn">
            {data.tags.map(getTags)}
          </Card.Text >
          <a href={getProblemURL1(data)} target="blank" className="alignn"><Button variant="primary">Solve!!</Button></a>
        </Card.Body>
      </Card>
      );
    };
  return (
     <>
     { problems.slice(0,loading).map((renderProblem))}
     </>
  );
};

export default GetProblem;