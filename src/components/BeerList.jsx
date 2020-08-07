import React from 'react';
import '../styles/BeerList.css'

const BeerList = (props) => {
  return (
  <li>
    <img src={props.beerImg} alt=""/>
    <div class="flexColumn">
        <p>
            {props.beerId}
        </p>
        <p>
            {props.beerName}
        </p>
        <p>
            {props.beerTag}
        </p>
    </div>
  </li>
  
  )
}

export default BeerList;