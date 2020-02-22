import React from "react"

function Contact(props) {
  return (
    <div style={{ margin: 20 }}>
      <div><h1>Contact + Resources </h1>
        <br></br>
        <p class="float-left"><i class="far fa-envelope fa-2x animated rotateIn"
        ></i><a href="mailto:serinat@uw.edu">  [serinat@uw.edu]</a></p>

        <p class="float-left" ><i
          class="fas fa-mobile-alt fa-2x animated rotateIn"></i>  (425) 301-2906
    </p>
        <p class="float-left" ><i
          class="far fa-file-pdf fa-2x animated rotateIn"></i><a href="Tsang_Serina_resume November 2019.pdf" download>  [Resume]</a>
        </p>
        <p class="float-right" ><i
          class="fab fa-github fa-2x animated rotateIn"></i><a href="https://github.com/serinat">  [Github]</a></p>
        <p class="float-right" ><i
          class="fab fa-linkedin fa-2x animated rotateIn"></i><a
            href="https://www.linkedin.com/in/serina-tsang-91b810105/">  [LinkedIn]</a></p></div>
    </div>

  );
}

export default Contact;