import React from 'react';
import Blackjack from './blackjack.png';
import Lounge from './lounge.png';
 
function Portfolio(props) {
  return (
    <div>
      <h1 style={{ margin: 20 }}>Portfolio</h1>
      <br></br>
      <a href="https://bsmalls6.github.io/Project_1/">[Project 1: Blackjack]</a>
      <br></br>
      <img src={Blackjack} alt=""/>
      <br></br>
      <a href="https://serene-headland-87883.herokuapp.com/">[Project 2: The Lounge]</a>
      <br></br>
      <img src={Lounge} alt=""/>
    </div>  


  )
}
 
export default Portfolio;