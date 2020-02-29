import React from 'react';
import Thumbnail from './Thumbnail';
//import './App.css';
//import Blackjack from './blackjack.png';
//import Lounge from './lounge.png';
//import Project from './components/Project';

function Portfolio(props) {
  return (

    <div style={{ margin: 20 }}>
      <h1>Portfolio</h1>
      <br />
      <div class="row">
        <div class="col-md-4">
          <a href="https://github.com/cbarcala23/Project2"> [ Github Link ]</a>
          <a href="https://serene-headland-87883.herokuapp.com/"> [ Lounge ]</a>

          <Thumbnail
            link="https://serene-headland-87883.herokuapp.com"
            image="./lounge.png"
          //title="The Lounge"
          //category="Project"
          />
        </div>

        <br />

        <div class="col-md-4">
          <a href="https://github.com/BSmalls6/Project_1"> [ Github Link ]</a>
          <a href="https://bsmalls6.github.io/Project_1/"> [ Blackjack ]</a>

          <Thumbnail
            link="https://bsmalls6.github.io/Project_1/"
            image="./blackjack.png"
          //title="Blackjack"
          //category="Project"
          />
        </div>

        <br />

        <div class="col-md-4">
          <a href="https://github.com/serinat/Budget-Tracker"> [ Github Link ]</a>
          <a href="https://serene-bastion-86706.herokuapp.com/"> [ Budget Tracker ]</a>

          <Thumbnail
            link="https://github.com/serinat/Budget-Tracker"
            image="./budget.png"
          //title="Budget-Tracker"
          //category="Assignment"
          />
        </div>
      </div>

      <div class="row">
        <div class="col-md-4">
          <a href="https://github.com/serinat/Engineering-Team-Generator"> [ Github Link ]</a>

          <Thumbnail
            link="https://github.com/serinat/Engineering-Team-Generator"
            image="./team.png"
          //title="Engineering-Team-Generator"
          //category="Assignment"
          />
        </div>

        <br />

        <div class="col-md-4">
          <a href="https://github.com/serinat/Note-taker"> [ Github Link ]</a>
          <a href="https://boiling-reaches-19093.herokuapp.com/"> [ Note Taker ]</a>

          <Thumbnail
            link="https://github.com/serinat/Budget-Tracker"
            image="./note.png"
          //title="Note-Taker"
          //category="Assignment"
          />
        </div>

        <br />

        <div class="col-md-4">
          <a href="https://github.com/serinat/UW-Password-Generator"> [ Github Link ]</a>

          <Thumbnail
            link="https://github.com/serinat/UW-Password-Generator"
            image="./pwGenerator.png"
          //title="Password-Generator"
          //category="Assignment"
          />
        </div>
      </div>
    </div>



  )
}

export default Portfolio;