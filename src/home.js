import React from "react";

const Home = () => {
    return (
      <div className="cover" id="home">
      <div className="lattice" ><img 
      src="/amy-hirschi-szrJ3wjzOMg-unsplash.jpg" 
      width="100%" 
      height="1000px" 
      alt=""
      />
      </div>
          <nav className="nav-bar">
              <p className="heading">Portfolio</p>
              <ul className="list1">
                  <li><a href="/" className="items">Home</a></li>
                  <li><a href="/about" className="items">About</a></li>
                  <li><a href="/skills" className="items">Skills</a></li>
                  <li><a href="/contact" className="items">Contact</a></li>
              </ul>

          </nav>
        <p className="sanjeed">Hi, I'M MOHAMED SANJEED</p>
        <p className="developer">Mern Stack Developer</p>
        
        <div>
          <button className="btn1">
            <a href="/contact">Hire Me?</a>
          </button>
        </div>
      </div>
    );
  };
  
  export default Home;
  