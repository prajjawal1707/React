// import Card from './components/card';
// const App = () => {
//   return (
//     <div>
//       <div className="card">
//         <h1>what ok i am doing somthing</h1>
//         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, sint.</p>
//       </div>
//       {<Card />}
//     </div>
//   );
// }

// export default App;

// import React from 'react';
import Card from './components/card';
import Navbar from './components/navbar';

const App = () => {
  const user ='mishra'
  return (
    <div>
      {/* <h1> Hello morphy this is prajjawal {user} </h1> */}
      <Card/>
      <Navbar/>
    </div>
  );
}

export default App;
