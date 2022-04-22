import React, {useState} from 'react'
import { InputGroup, Button } from 'react-bootstrap';
import Form  from 'react-bootstrap/Form';
import GetContest from './GetContest';
const Problems = () => {
     
    const [contest,setContest] = useState("");
    const [apply,setApply] = useState(false);

    function handleChange(e){
        const value = e.target.value;
        setContest(value);
    }

    function handleClick(){
        setApply(prev=>{
          return !prev;
        })
    }

  return (
      <>
     <InputGroup>
    <Form.Select
      name="contest"
      value={contest}
      onChange={handleChange}
    >
    <option value="Select contest">Select contest :</option>
                 <option value="Div. 1" title="Div 1">Div. 1</option>
                 <option value="Div. 2" title="Div 2">Div. 2</option>
                 <option value="Div. 3" title="Div 3">Div. 3</option>
                 <option value="Div. 4" title="Div 4">Div. 4</option>
                 <option value="Div. 1 + Div. 2" title="Div 1 + Div 2">Div. 1 + Div.2</option>
                 <option value="Educational" title="Educational">Educational</option>
                 <option value="Global" title="Global">Global</option>
                 <option value="Gym" title="Gym">Gym contests</option>
                 <option value="All contests" title="All contests">All contests</option>
  </Form.Select>
  <Button onClick={handleClick}>Apply</Button>
  </InputGroup>
    {apply && <GetContest type={contest} />}
  </>
  )
}

export default Problems;