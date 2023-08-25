import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './body.css'
function BODY() {
  const [listing, setListing] = useState('');
  const[inputdata,setInputdata]=useState([]);

  const updateInputData=(value)=>{
    const updatedData=[...inputdata].concat(value);
    console.log('$%09()')
    console.log(inputdata)
console.log(updatedData);
console.log(value);
    setInputdata(updatedData)
  }

  function handleSubmit (event){
    event.preventDefault()
    console.log({listing: listing})
    axios.post('http://localhost:5000/add/', {listing: listing}).
    then(res=> {console.log(res); updateInputData(res.data);})
    .catch(err=> console.log(err))
  }

  const handleDeleteTodo = (todoId) => {
    console.log(todoId);
    axios.delete(`http://localhost:5000/delete/${todoId}`)
      .then(res =>{ 
        const updatedData = inputdata.filter(todo => todo._id !== todoId);
        setInputdata(updatedData);
        console.log("inside delte")
        console.log(res)
        console.log(todoId) })
      .catch(error => console.error('Error deleting todo:', error ));
  };

  // useEffect(() => {
  //   // Fetch initial data
  //   axios.get(`http://localhost:5000/`)
  //     .then(response => { console.log("inside");console.log(response);setInputdata(response.data);})
  //     .catch(error => console.error('Error fetching data:', error));
  // }, []);

  // useEffect(() => {
  //  console.log("@manoj$")
  //  console.log(inputdata)
  // }, [inputdata])


  return (
<div id='div'>
      <div id='div1'>
      </div>
        <div id='div2'>
            <form action="POST" onSubmit={handleSubmit} >
                <input type='text' id='input' name='listing' value={listing} onChange={e=>setListing(e.target.value)}/>
                <button id='sub' type='submit'>ADD</button> 
            </form>
            <hr></hr>
  {inputdata.map(data =>(
              <li key={data._id}>
              <div id='split'>
              <div class="splitleft">
          <div class="centeredleft">
          <span id='content'>{data.listing}</span>
            </div>
        </div>
                <div class="splitright">
          <div class="centeredright">
          <input id='checkbox' type='checkbox'></input>
           <button id='but' onClick={()=>handleDeleteTodo(data._id)}>Delete</button>
            </div>
        </div>
              </div>
              <hr></hr>
              </li>
            ))} 
        </div>
        <div id='div3'>
        </div>
    </div>
 )}
export default BODY