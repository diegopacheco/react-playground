import React from 'react';

function sum(a,b){
    return parseInt(a) + parseInt(b);
}

function Msg() {
  var result = sum(2,2);  
  return (
    <p>JavaScript sum(2,2) == {result} </p>
  );
}

export default Msg;
