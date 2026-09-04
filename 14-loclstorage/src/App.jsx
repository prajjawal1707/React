import React from 'react';

const App = () => {
  // localStorage.setItem('name', 'John Doe');
  // const name = localStorage.getItem('name');
  //   console.log(name);
  // localStorage.removeItem('name');
  // const user ={
  //   name: 'prajjawal',
  //   age:22,
  //   city : 'shrawasti'
  // }
  // localStorage.setItem('user', JSON.stringify(user));
  const user = JSON.parse(localStorage.getItem('user'));
  
  return (
    <div>
      APP
    </div>
  );
}

export default App;
