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
      <Thumbnail
        link="https://bsmalls6.github.io/Project_1/"
        image="./blackjack.png"
        
        title="Blackjack"
        category="Project"
      />

      <Thumbnail
        link="./lounge"
        image="https://serene-headland-87883.herokuapp.com"
        title="The Lounge"
        category="Project"
      />
    </div>
  )
}

export default Portfolio;