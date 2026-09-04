// import React from 'react';
// import { useState } from 'react';
// const App = () => {
//   const [num, setNum] = useState({
//     user:'mishra',
//     age: 20
//   });
//   const btnClicked =()=>{
//     const newNum = {...num};
//     newNum.user='Prajjawal'
//     setNum(newNum);
//     // console.log(num);
//   }
//   return (
//     <div>
//       <h1>{num.user},{num.age}</h1>
//       <button onClick={btnClicked}>Click</button>
//     </div>
//   );
// }
// export default App;

import React from 'react';
import { useState } from 'react';
// const App = () => {
//   const [num, setNum] = useState([10,20,30,40]);
//   const btnClicked =()=>{
//     const newNum = [...num];
//     newNum.push(59)
//     setNum(newNum);
//   }
//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={btnClicked}>Click</button>
//     </div>
//   );
// }
// export default App;


const App = () => {
  const [num, setNum] = useState(10);
  const btnClicked =()=>{
   
    setNum(prev => (prev+1));
    setNum(prev => (prev+1));
    setNum(prev => (prev+1));
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  );
}
export default App;