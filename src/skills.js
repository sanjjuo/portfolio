import React from "react";


const Skills = () => {
    return (
      <div className="cover2" id="skills">
       <nav className="nav-bar">
              <p className="heading">Portfolio</p>
              <ul className="list1">
                  <li><a href="/" className="items">Home</a></li>
                  <li><a href="/about" className="items">About</a></li>
                  <li><a href="/skills" className="items">Skills</a></li>
                  <li><a href="/contact" className="items">Contact</a></li>
              </ul>

          </nav>
        <div className="technology">
          <img src="/Lattice-abstract-background-vector.jpg" width="100%" height="1000px" alt="" />
        </div>
        <div className="skills">Skills</div>
        <div className="python card">
        <img src="/python-logo-vector-1.svg" width="150px" height="150px" alt="" />
      </div>
      <div className="html card">
        <img src="/html5-logo-vector.svg" width="150px" height="150px" alt="" />
      </div>
      <div className="c card">
        <img src="/logo512.png" width="150px" height="150px" alt="" />
      </div>
      <div className="js card">
        <img src="/icons8-js-240.png" width="150px" height="150px" alt="" />
      </div>
      <div className="css card">
        <img src="/html5-logo-31822.png" width="150px" height="150px" alt="" />
      </div>
      <div className="sql card">
        <img src="/icons8-nodejs-480.png" width="150px" height="150px" alt="" />
      </div>
      <div className="adobe card">
        <img src="/icons8-express-js-240.png" width="210px" height="150px" alt="" />
      </div>
      <div className="mongodb card">
        <img src="/mongodb-logo-vector.svg" width="150px" height="150px" alt="" />
      </div>
    </div>
  );
};
  
  export default Skills;
  