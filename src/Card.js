import React from 'react';


const Card = (props) => {

  return (
  	<div className='tc bg-light-pink dib br3 ma2 grow'>
  		<img alt="Robo" src={`https://robohash.org/${props.id}?200*200`} />
  	   <div>
  	    <h2>{props.name}</h2>
  	    <p>{props.email}</p>
  	   </div> 
    </div>
  	);	
}

export default Card;