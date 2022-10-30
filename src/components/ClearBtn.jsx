import React from 'react';
import '../styles/ClearBtn.css';

function ClearBtn (props){

  return(
    <div className='btn' 
      onClick={props.setClear}>
      Clear
    </div>
  )
}


export default ClearBtn;