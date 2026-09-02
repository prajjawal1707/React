import React from 'react';

const card = (props) => {
    console.log(props);
  return (
    <div>
      <div className="card">
        <img src="https://unsplash.com/photos/a-very-colorful-diamond-shaped-object-on-a-black-background-pnKoOVS3xgg" alt="" />
        <h1>{props.user}</h1>
        <p>{props.age} years old</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, minima.</p>
        <button>Click Me</button>
      </div>
    </div>
  );
}

export default card;
