import React from 'react';
import Card from './component/card';
// import {Bookmark} from 'lucide-react';

const App = () => {
const arr = [10,20,30];
  return (
    <div className="parent">
     {arr.map(function(elem){
      return <Card />
     })}
    </div>

  );
}

export default App;
