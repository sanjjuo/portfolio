import React from "react";

const About = () => {
    return (
      <div className="cover1" id="about">
         <nav className="nav-bar">
              <p className="heading">Portfolio</p>
              <ul className="list1">
                  <li><a href="/" className="items">Home</a></li>
                  <li><a href="/about" className="items">About</a></li>
                  <li><a href="/skills" className="items">Skills</a></li>
                  <li><a href="/contact" className="items">Contact</a></li>
              </ul>

          </nav>
        <div className="about">So, Who Am I ?</div>
        <div className="line1"></div>
        
        <div className="photo">
          <img
            src="/imagecafe.jpg"
            width="340px"
            height="380px"
            alt=""
          />
        </div>
        <div className="aboutme">
        I am a MERN stack developer with proficiency in building dynamic web applications using MongoDB, Express.js, React, and Node.js. My expertise spans the entire development process, from designing interactive frontends to implementing scalable backend solutions.</div>
       
<button className="btn3">
            <a href="/contact">Contact Me</a>
          </button>
          <button className="btn2">
            <a href="/">Get My Resume</a>
          </button>
          <div className="follow">Connect to</div>
          <div className="facebook">
            <a href="https://www.facebook.com/profile.php?id=100092943613170">
              <img src="/logo-facebookpng-32204.png" width="30px" height="30px" alt="" />
            </a>
          </div>
          <div className="instagram">
            <a href="https://www.instagram.com/sanjjuo/?next=%2F">
              <img src="/logo-ig-png-32461.png" width="45px" height="45px" alt="" />
            </a>
          </div>
          <div className="twitter">
            <a href="https://twitter.com/MohamedSanjeed1">
              <img src="/logo-twitter-png-5859.png" width="45px" height="45px" alt="" />
            </a>
          </div>
          <div className="linkedin">
            <a href="https://linkedin.com/in/mohamed-sanjeed-b60737278/">
              <img src="/linkedin.png" width="35px" height="35px" alt="" />
            </a>
          </div>
      </div>
      
    );
  };
  
  export default About;
  