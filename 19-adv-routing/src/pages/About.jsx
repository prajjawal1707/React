import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  let navigate = useNavigate();
  // const btnclecked = () => {
  //   navigate('/home');
  // }
  return (
    <div>
      <button  
      onClick={()=>
        navigate('/home')
      }
       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Back to home
      </button>

     <button  
      onClick={()=>
        navigate(-1)
      }
       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Back to previous page
      </button>
      <h1>About</h1>
    </div>
  );
}

export default About;
