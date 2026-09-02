import React from 'react';
import Card from './components/card';

const App = () => {
  return (
    <div className="parent">
      <Card user ="Doe" age={30} />
      <Card user ="Smith" age={35} />
    </div>
  );
}

export default App;
