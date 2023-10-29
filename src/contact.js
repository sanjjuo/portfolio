import React from "react";
import handleContactClick from "./error"



const Contact = () => {
    return (
      <div>
        
         <nav className="nav-bar">
              <p className="heading">Portfolio</p>
              <ul className="list1">
                  <li><a href="/" className="items">Home</a></li>
                  <li><a href="/about" className="items">About</a></li>
                  <li><a href="/skills" className="items">Skills</a></li>
                  <li><a href="/contact" className="items">Contact</a></li>
              </ul>

          </nav>
        <div className="map">
        <div className="cover3" id="contact"></div>  
          <img src="/dark-aesthetic-wallpaper-5.jpg" width="100%" height="1000px" alt="" />
        </div>
        <div className="contact">Let's Chat !</div>
        <div className="form">
          <div id="error" className="err"></div>
          <form id="frm" action="/Layout">
            <div>
              <input type="text" id="name" placeholder="Full name" className="name" />
            </div>
            <div>
              <input type="email" id="email" placeholder="E-mail" className="email" />
            </div>
            <div>
              <input type="text" id="message" placeholder="Message" className="message" />
            </div>
            <div>
              <button className="btn" onClick={handleContactClick}>Contact me</button>
            </div>
          </form>        
        </div>
      </div>
    );
  };
   
  export default Contact;
  