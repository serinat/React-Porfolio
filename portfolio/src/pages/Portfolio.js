import React from 'react';
import Thumbnail from './Thumbnail';
//import './App.css';
//import Blackjack from './blackjack.png';
//import Lounge from './lounge.png';
//import Project from './components/Project';

function Portfolio(props) {
  return (
    <div>
      <h1 style={{ margin: 20 }}>Portfolio</h1>
      <a href="https://github.com/BSmalls6/Project_1"> [Blackjack Github]</a>
      <a href="https://bsmalls6.github.io/Project_1/"> [Blackjack Deployed]</a>
      <Thumbnail
        link="https://bsmalls6.github.io/Project_1/"
        image="./blackjack.png"
        
        //title="Blackjack"
        //category="Project"
      />

      <a href="https://github.com/cbarcala23/Project2"> [Lounge Github]</a>
      <a href="https://serene-headland-87883.herokuapp.com/"> [Lounge Deployed]</a>

      <Thumbnail
        link="https://serene-headland-87883.herokuapp.com"
        image="./lounge.png"
        //title="The Lounge"
        //category="Project"
      />
    </div>
  )
}

export default Portfolio;