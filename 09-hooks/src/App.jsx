// import { useState } from 'react';

// const App = () => {
//   const [num, setNum] = useState(10);
//   const [username, setUsername] = useState('mishra ji');
//   function changeNum(){
//     setNum(30);
//     setUsername('mishra ji updated');
//   }
//   return (
//     <div>
//       <h1>value of num is {num} value of user is {username}</h1>
//       <button onClick = {changeNum}> Click me</button>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { useState } from 'react';

const App = () => {
  const [num, setNum] = useState(10)
  function increaseNum(){
    setNum(num + 1);
  }
  function decreaseNum(){
    console.log('decreasing');
    setNum(num - 1);
  }
  return (
    <div>
     <h1>{num}</h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
      <button onClick={() => setNum(num + 5)}>Jump by 5</button>
    </div>
  );
}

export default App;
