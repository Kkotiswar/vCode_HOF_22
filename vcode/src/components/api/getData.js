
import axios from "axios";
async function getapi(url){
    const response= await fetch(url);
    var data = await response.json();    
    return data;
}

export const getProblems = async (tags,rating) =>{
    // try{
    //     const url=`http://codeforces.com/api/problemset.problems?tags=${tags}`;
    //     const { data : {data}} = await axios.get(url);
    //     return data;
    // }catch (error){
    //     console.log(error);
    // }
    const url=`http://codeforces.com/api/problemset.problems?tags=${tags}`;
    const prb= await getapi(url);
    //console.log(prb);
    return prb.result.problems;
};