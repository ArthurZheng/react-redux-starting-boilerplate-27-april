import '../public/css/style.css';
// import '../public/css/base.css';

import React from 'react';
import ReactDOM from 'react-dom';


const List = React.createClass({
  render: function(){
    return (
      <div className='container'>
        <h1>Hello from List</h1>
      </div>
    )
  },
});

let elementToMountReactTo = document.getElementById('react-content');

ReactDOM.render(
  <List />,
  elementToMountReactTo
);
