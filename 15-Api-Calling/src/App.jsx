import React from 'react';
import axios from 'axios';
const App = () => {
  // function getData(){

  //   const response = fetch('https://jsonplaceholder.typicode.com/todos/1');
    
  //   console.log(response);
  // }
  //  const getData =async ()=>{


    // const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    
    // console.log(response);
  // }
  const getData =async ()=>{
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(response);
  }
  return (
    <div>
      <button onClick={getData}>Click Me</button>
      <div>
        {data.map(function(elem,idx){
          return <h2>Hello,{elem.author}{idx}</h2>
        })
}</div>
    </div>
  );
}

export default App;
