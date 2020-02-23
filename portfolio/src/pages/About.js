import React from 'react'; 
import BioImage from './bio-image.jpeg';

function About(props) {
  return (
    <div>
      <h1 style={{ margin: 20 }}>About Me</h1>
      <br />
      <img src={BioImage} alt=""/>

      <p id="about" style={{ margin: 20 }}>Hi, there! My name is Serina Tsang, and welcome to my portfolio site! I am currently
                        enrolled at
                        the University of Washington Coding Bootcamp. In my portfolio are a few early assignments,
                        including our first project built
                        with the knowledge and skills obtained during the first eight weeks of my journey!</p>
      <p id="about2" style={{ margin: 20 }}>A little bit about myself: I graduated from the University of Washington with a
          bachelors degree in Chemistry
          over 20 years ago and moved up to research scientist 2 in the University of Washington
          Comparative Medicine
          department.
          Several years ago I took a couple coding classes but had to postpone my completion
          due to family circumstances. Coding is definitely not like riding a bike, you need to practice
          and learn everyday to keep up with technology and to become a successful developer. While I
          enjoy the flexibility of my current research scientist job, my ultimate goal is to pivot out of
          academia and apply my passion for technology in a more relevant, challenging, team-oriented and
          prosperous field. More importantly, I want to instill in my kids the necessity and value in
          setting higher goals and expectations for themselves, something learned a bit later than planned
                        but now more ready than ever! Thanks for finding me!</p>
    </div>
  )
}

export default About;